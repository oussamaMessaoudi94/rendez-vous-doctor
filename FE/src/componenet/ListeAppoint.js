import React, { useEffect, useState } from 'react'
import swipe from '../js/swipe'
import pagination from '../js/pagination'
import pagination2 from '../js/pagiantion2'
import search from '../js/search'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Stack from '@mui/material/Stack';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { MenuItem } from '@mui/material';


export default function ListeAppoint() {
  const [open, setOpen] = React.useState(false);
  const [opens, setOpens] = React.useState(false);
  const [selected, setSelected] = useState();
  const [apponit, setAppoint] = useState([])
  const [apponitDay, setAppointDay] = useState([])
  const [apponitArch, setAppointArch] = useState([])
  const [length, setLength] = useState([])
  const navigate = useNavigate()

  const params = useParams()
  useEffect(() => {
    if (params.id) {
      getProdById()
    }
    swipe()
    getAppAppoint()
    getArchAppoint()
    pagination()
    search()
  }, [params.id])
  const formatDate = (date = Date) => {
    const month = date.getMonth() + 1; // Get month (0-based index)
    const day = date.getDate(); // Get day
    const year = date.getFullYear(); // Get full year

    // Format with leading zeros for month and day if necessary
    const formattedMonth = month < 10 ? `0${month}` : `${month}`;
    const formattedDay = day < 10 ? `0${day}` : `${day}`;

    return `${formattedDay}-${formattedMonth}-${year}`;
  }
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const currentDate = formatDate(new Date());
  const getArchAppoint = () => {
    axios.get('http://localhost:8080/archive').then((res) => {


      setAppointArch(res.data.finded.filter((value) => value.date == currentDate))
    })
  }
  const getAppAppoint = () => {
    axios.get('http://localhost:8080/appointment').then((res) => {

      setAppoint(res.data.appoints)

      setAppointDay(res.data.appoints.filter((value) => value.date == currentDate && value.etat == 'Accepted'))
      setLength(res.data.appoints.filter((value) =>  value.etat == 'En Attente'))
      
    })
  }
  const sortedAppointments = apponit.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  const handleDelete = (id) => {
    axios.delete(`http://localhost:8080/appointment/${id}`).then((res) => {
      console.log(res.data.message);
      setAppoint(apponit.filter((value) => value._id !== id))
    })
    setOpen(false);
  }

  const [formData, setFormData] = useState({
    email: '',
    etat: '',
    message: ''
  });
  const currencies = [
    {
      value: '---------',
      label: '---------',
    },
    {
      value: 'En Attente',
      label: 'En Attente',
    },
    {
      value: 'Accepted',
      label: 'Accepted',
    },
    {
      value: 'Annulee',
      label: 'Annulee',
    },
  ];

  const handleChange = (e) => {
    let newState = { ...formData }
    newState[e.target.name] = e.target.value
    setFormData(newState)
  };

  const handleSubmit = async (e) => {
    axios.put(`http://localhost:8080/appointment/${params.id}`, formData).then((res) => {
      console.log(res.data.message);
      navigate('/listeAppoint')
    })
    const FD = ({
      email: formData.email,
      etat: formData.etat,
      message: (formData.message || '')
    })
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/send-email", FD);
      alert("Email sent successfully!");
    } catch (error) {
      alert("Failed to send email.");
      console.error("Error:", error);
    }
  };
  const getProdById = (() => {
    axios.get(`http://localhost:8080/appointment/${params.id}`).then((res) => {
      setFormData(res.data.appoints)
    }).catch((err) => {
      console.error('Failed to fetch appointment:', err);
    });
  })
  return (
    <div style={{ marginBottom: '175px' }}>
      <div className="container text-center" >
        <h3 className="category-button" data-target="tab1">
          rendez-vous aujourd'hui
        </h3>
        <h3 className="category-button" data-target="tab2">
          les rendez-vous
          <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} style={{ marginTop: '-1%' }} fill="currentColor" className="bi bi-bell-fill" viewBox="0 0 16 16">
            <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2m.995-14.901a1 1 0 1 0-1.99 0A5 5 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901" />
          </svg>
          <span className="badge badge-danger" style={{ backgroundColor: 'red'}}>{length.length}</span>
        </h3>
      </div>
      <br />
      <br />
      {/* Tab 1 Content */}
      <div>
        <div className="page-content tab1">
          <div className="container">
            <div className="tb_search">
              <input style={{ width: '50%', marginLeft: '25%', border: '2px solid #3498db' }} type="text" id="search2" placeholder="Search.." className="form-control" />
            </div>
            <table id="table-id2" >
              <thead>
                <tr>
                  <th>Name/Prenom</th>
                  <th>Email</th>
                  <th>Number</th>
                  <th>Date</th>
                  <th>Heure</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody id='table'>
                {apponitDay.map((value, i) => (
                  <tr key={i}>
                    <td data-th="Supplier Code">{value.name}</td>
                    <td data-th="Supplier Code">{value.email}</td>
                    <td data-th="Supplier Code">{value.phone}</td>
                    <td data-th="Supplier Code">{value.date}</td>
                    <td data-th="Supplier Code">{value.time}</td>
                    <td data-th="Supplier Code"><Button onClick={() =>
                      navigate(apponitDay ? `/noteDoctor/${value._id}` : `/noteDoctorArch/${value._id}`)
                    } variant="outlined" startIcon={<EditIcon />}>
                      Edit
                    </Button></td>
                  </tr>
                ))}
                {apponitArch.map((value, i) => (
                  <tr key={i}>
                    <td data-th="Supplier Code">{value.name}</td>
                    <td data-th="Supplier Code">{value.email}</td>
                    <td data-th="Supplier Code">{value.phone}</td>
                    <td data-th="Supplier Code">{value.date}</td>
                    <td data-th="Supplier Code">{value.time}</td>
                    <td data-th="Supplier Code"><Button onClick={() =>
                      navigate(apponitArch ? `/noteDoctorArch/${value._id}` : `/noteDoctorArch/${value._id}`)
                    } variant="outlined" startIcon={<EditIcon />}>
                      Edit
                    </Button></td>
                  </tr>
                ))}
              </tbody>
            </table>
            <select style={{ width: '80px' }} class="form-control" name="state" id="maxRows2">
              <option value="5">5</option>
              <option value="15">15</option>
              <option value="20">20</option>
              <option value="50">50</option>
              <option value="70">70</option>
              <option value="100">100</option>
              <option value="5000">Show ALL Rows</option>
            </select>
            <div className="rows_count">Showing 11 to 20 of 91 entries</div>
            <nav style={{ marginTop: '-70px' }}>
              <ul className="pagination2">
                {/*	Here the JS Function Will Add the Rows */}
              </ul>
            </nav>
          </div>
        </div>{/* end container */}
        {/* Tab 2 Content  */}
        <div className="page-content tab2">
          <div className="container">
            <div className="tb_search">
              <input style={{ width: '50%', marginRight: '25%', border: '2px solid #3498db' }} type="text" id="search" placeholder="Search.." className="form-control" />
            </div>
            <table id="table-id" >
              <thead>
                <tr>
                  <th>Name/Prenom</th>
                  <th>Email</th>
                  <th>Number</th>
                  <th>Date</th>
                  <th>Heure</th>
                  <th>Action</th>
                  <th></th>
                </tr>
              </thead>
              <tbody id='table'>
                {sortedAppointments.map((value, i) => (
                  <tr key={i}>
                    <td data-th="Supplier Code">{value.name}</td>
                    <td data-th="Supplier Code">{value.email}</td>
                    <td data-th="Supplier Code">{value.phone}</td>
                    <td data-th="Supplier Code">{value.date}</td>
                    <td data-th="Supplier Code">{value.time}</td>
                    <td data-th="Supplier Code">    <Stack direction="row" spacing={2}>
                      <Button onClick={() => {
                        setSelected(value)
                        handleClickOpen()
                      }} variant="outlined" startIcon={<DeleteIcon />}>
                        Delete
                      </Button>
                      <Dialog
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                      >
                        <DialogTitle id="alert-dialog-title">
                          {"Do you want delete appointment "}
                        </DialogTitle>
                        <DialogContent>
                          <DialogContentText id="alert-dialog-description">
                            appointment of {selected?.name}
                          </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                          <Button onClick={handleClose}>Disagree</Button>
                          <Button onClick={() => handleDelete(selected._id)} autoFocus>
                            Agree
                          </Button>
                        </DialogActions>
                      </Dialog>
                      <Button onClick={() => navigate('/appointments/' + value._id)} variant="outlined" startIcon={<EditIcon />}>
                        Edit
                      </Button>
                    </Stack></td>
                    <td>
                      <button onClick={() => {
                        setSelected(value)
                        setOpens(true)
                        navigate('/listeAppoint/' + value._id)
                      }} className="btn btn-wobble" style={{
                        backgroundColor:
                          value.etat === 'En Attente' ? 'orange' :
                            value.etat === 'Accepted' ? 'green' :
                              'red' // Default color if none of the conditions match
                      }}>{value.etat}</button>
                      <Modal
                        aria-labelledby="modal-title"
                        aria-describedby="modal-desc"
                        open={opens}
                        onClose={() => setOpens(false)}
                        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                      >
                        <Sheet
                          variant="outlined"
                          sx={{ maxWidth: 500, borderRadius: 'md', p: 3, boxShadow: 'lg' }}
                        >
                          <ModalClose variant="plain" sx={{ m: 1 }} />
                          <Typography
                            component="h2"
                            id="modal-title"
                            level="h4"
                            textColor="inherit"
                            sx={{ fontWeight: 'lg', mb: 1 }}
                          >
                          </Typography>
                          <Typography id="modal-desc" textColor="text.tertiary">
                            <Box
                              component="form"
                              sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
                              noValidate
                              autoComplete="off"
                            >
                              <div >
                                <h1 style={{ color: 'black' }}>Send Email</h1>
                                <TextField
                                  style={{ width: '200px' }}
                                  id="outlined-multiline-flexible"
                                  label="email"
                                  multiline
                                  maxRows={4}
                                  name="email"
                                  value={formData?.email}
                                  onChange={(event) => handleChange(event)}
                                />
                                <TextField
                                  id="outlined-select-currency"
                                  select
                                  label="Etat"
                                  name="etat"
                                  defaultValue="---------"
                                  onChange={(event) => handleChange(event)}
                                >
                                  {currencies.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                      {option.label}
                                    </MenuItem>
                                  ))}

                                </TextField>
                                <TextField
                                  id="outlined-multiline-static"
                                  label="Multiline"
                                  multiline
                                  rows={4}
                                  name="message"
                                  onChange={(event) => handleChange(event)}
                                />
                              </div>
                            </Box>
                            <button onClick={handleSubmit} type='button' style={{ marginLeft: '40%', width: '150px' }} class="btn btn-pulse">send</button>
                          </Typography>
                        </Sheet>

                      </Modal>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <select style={{ width: '80px' }} class="form-control" name="state" id="maxRows">
              <option value="5">5</option>
              <option value="15">15</option>
              <option value="20">20</option>
              <option value="50">50</option>
              <option value="70">70</option>
              <option value="100">100</option>
              <option value="5000">Show ALL Rows</option>
            </select>
            <div className="rows_count">Showing 11 to 20 of 91 entries</div>
            <nav style={{ marginTop: '-70px' }}>
              <ul className="pagination">
                {/*	Here the JS Function Will Add the Rows */}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>

  )
}
