import React, { useEffect, useState } from 'react'
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { TextareaAutosize } from '@mui/material';
import Button from '@mui/material/Button';
import axios from 'axios';
import { useParams } from 'react-router-dom';


export default function NoteDoctor() {
  const [appoint, setAppoint] = useState({
    note: '',
    med: ''
  })
  const [archive, setArchive] = useState({})
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    fontSize: '20px',
    color: (theme.vars ?? theme).palette.text.secondary,
    ...theme.applyStyles('dark', {
      backgroundColor: '#1A2027',
    }),
  }));
  const params = useParams()
  useEffect(() => {
    if (params.id) {
      getNoteById()
      getArchiveById()
    }
  }, [params.id])
  const getNoteById = (() => {
    axios.get(`http://localhost:8080/appointment/${params.id}`).then((res) => {
      setAppoint(res.data.appoints)
    })
  })
  const getArchiveById = (() => {
    axios.get(`http://localhost:8080/archive/${params.id}`).then((res) => {
      setArchive(res.data.findedId)
    })
  })
  const noteHandleSubmit = () => {
   axios.post('http://localhost:8080/archive', appoint).then((res)=>{
    console.log(res.data.message);
   })

  }
  return (
    <div style={{ marginTop: '30px' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid size={6}>
          <Item>Name : {appoint?.name} {archive?.name} </Item>
        </Grid>
        <Grid size={6}>
          <Item>Email : {appoint?.email} {archive?.email}</Item>
        </Grid>
        <Grid size={6}>
          <Item>Phone : {appoint?.phone} {archive?.phone}</Item>
        </Grid>
        <Grid size={6}>
          <Item>Date appointment : {appoint?.date} {archive?.date}</Item>
        </Grid>
        <Grid size={6}>
          <TextareaAutosize
            aria-label="minimum height"
            minRows={3}
            placeholder="Note"
            style={{ width: 400, marginLeft: '200px', marginTop: '30px', height: 100 }}
            name='note'
            onChange={(event) => setAppoint((prev) => ({ ...prev, note: event.target.value }))}
            value={archive?.note}
          />
        </Grid>
        <Grid size={6}>
          <TextareaAutosize
            aria-label="minimum height"
            minRows={3}
            placeholder="Medicament"
            style={{ width: 400, marginLeft: '200px', marginTop: '30px', height: 100 }}
            name='med'
            onChange={(event) => setAppoint((prev) => ({ ...prev, med: event.target.value }))}
            value={archive?.med}
          />
        </Grid>
        <Button onClick={() => noteHandleSubmit()} style={{ marginLeft: '50%', marginBottom: '20px', fontSize: '25px', backgroundColor: '#20acb8' }} variant="contained" disableElevation>
          Archive
        </Button>
      </Grid>


    </div>

  )
}
