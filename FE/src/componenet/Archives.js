import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import pagination from '../js/pagination'
import search from '../js/search'
import date from '../js/date'

export default function Archives() {
    const [archive, setArchive] = useState([])
    const [archiveId, setArchiveId] = useState({
        date: ''
    })
    const navigate = useNavigate()
    const params = useParams()

    useEffect(() => {
        if (params.id) {
            getArchiveById()
        }
        getAllArchive()
        pagination()
        search()

    }, [params.id])
    const getAllArchive = () => {
        axios.get('http://localhost:8080/archive').then((res) => {
            setArchive(res.data.finded)
        })
    }
    const getArchiveById = (() => {
        axios.get(`http://localhost:8080/archive/${params.id}`).then((res) => {
            setArchiveId(res.data.findedId)
        })
    })
    const submitArchive = () => {
         axios.put(`http://localhost:8080/archive/${params.id}`, { date: archiveId.date })
        .then((res) => {
          console.log('ok', res.data.message);
        })
        .catch((err) => console.error('Error updating archive:', err));
        console.log('here', archiveId);
    }

    return (
        <div>
            <div className="page-content tab1" style={{ marginBottom: '77px' }}>
                <div className="container">
                    <div className="tb_search">
                        <input style={{ width: '50%', marginLeft: '25%', border: '2px solid #3498db', marginTop: '15px' }} type="text" id="search2" placeholder="Search.." className="form-control" />
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
                            {archive.map((value, i) => (
                                <tr key={i}>
                                    <td data-th="Supplier Code">{value.name}</td>
                                    <td data-th="Supplier Code">{value.email}</td>
                                    <td data-th="Supplier Code">{value.phone}</td>
                                    <td data-th="Supplier Code">{value.date}</td>
                                    <td data-th="Supplier Code">{value.time}</td>
                                    <td data-th="Supplier Code"><Button onClick={() => navigate('/archives/' + value._id)} data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo" variant="outlined" startIcon={<EditIcon />}>
                                        Edit
                                    </Button>

                                        <Button onClick={() => navigate(`/noteDoctorArch/${value._id}`)} style={{ marginLeft: '10px' }} variant="outlined" startIcon={<VisibilityIcon />}>
                                            show
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                        <div className="modal fade" id="exampleModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">Update date</h5>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">×</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        <form>
                                            <div className="form-group">
                                                <label htmlFor="recipient-name" className="col-form-label">Date:</label>
                                                <input value={archiveId?.date || ''}  id="date" name="date"
                                                    onChange={(event) => setArchiveId({ ...archiveId, date: event.target.value })} className="form-control" placeholder="MM/DD/YYYY" />
                                            </div>
                                        </form>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                        <button onClick={submitArchive} type="button" className="btn btn-primary">Send message</button>
                                    </div>
                                </div>
                            </div>
                        </div>

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
                    <nav>
                        <ul className="pagination2">
                            {/*	Here the JS Function Will Add the Rows */}
                        </ul>
                    </nav>
                </div>
            </div>{/* end container */}
        </div>
    )
}
