import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { MenuItem } from '@mui/material';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function Email() {
  const [apponits, setAppoints] = useState([])
      const currencies = [
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

      const [formData, setFormData] = useState({
        email: "",
        etat: "",
        message: "",
      });
      const params = useParams()
      useEffect(() => {
        if (params.id) {
          getProdById()
        }
      }, [params.id])
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('here', formData);
        
    
      //   try {
      //     await axios.post("http://localhost:8080/send-email", formData);
      //     alert("Email sent successfully!");
      //   } catch (error) {
      //     alert("Failed to send email.");
      //     console.error("Error:", error);
      //   }
      };

            const getProdById = (() => {
              axios.get(`http://localhost:8080/appointment/${params.id}`).then((res) => {
                  setAppoints(res.data.appoints)
              })
            })
  return (
    <div>
                                  <Box
                                    component="form"
                                    sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
                                    noValidate
                                    autoComplete="off"
                                  >
                                    <div onClick={handleSubmit} >
                                      <h1 style={{ color: 'black' }}>Send Email</h1>
                                      <TextField
                                        style={{ width: '200px' }}
                                        id="outlined-multiline-flexible"
                                        label="email"
                                        multiline
                                        maxRows={4}
                                        name="email"
                                        value={apponits?.name}
                                        onChange={handleChange}
      
                                      />
                                      <TextField
                                        id="outlined-select-currency"
                                        select
                                        label="Select"
                                        name="etat"
                                        defaultValue="En Attente"
                                        onChange={handleChange}
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
                                        onChange={handleChange}
      
                                      />
                                     
                                    </div>
                                  </Box>
                                  <button style={{marginLeft:'40%', width:'150px'}} class="btn btn-pulse">send</button>
    </div>
  )
}
