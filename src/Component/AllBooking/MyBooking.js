import { Button } from '@mui/material';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import React, { useEffect, useState } from 'react';
import useAuth from '../Hooks/UseAuth';
import './AllBooking.css';
const MyBooking = () => {

    const { user ,token} = useAuth();
    const [booking, setBooking] = useState([])
    const [isDeleted, setDeleted] = useState(null);
    const email = `${user.email}`;
    // console.log(email)
    useEffect(() => {

     const url =`http://localhost:5000/myBooking/${email}`
     
     fetch(url, {
      headers:{
          'authorization':`Bearer${token}`
      }   
     })
            .then(res => res.json())
            .then(data => setBooking(data))
    }, [isDeleted])
    console.log(booking)


// DELETED 

const handleDeleteOrder = (id) => {
    const proceed = window.confirm('Are You Deleted This Order?');
    if (proceed) {
        fetch(`http://localhost:5000/deleteMYBooking/${id}`, {
        method: 'DELETE',
        headers: {
            content: 'application/json'
        }
    }).then(res => res.json())
        .then(result => {
            if (result.acknowledged) {
                setDeleted(true)
                console.log(result.data)
                alert('Deleted successfully');
               
            } else{
                setDeleted(false)
            }
           
        })
    // console.log(id);
    }
}

const style = {
    typography: {
      // In Chinese and Japanese the characters are usually larger,
      // so a smaller fontsize may be appropriate.
      fontSize: 20,
    },
  };

    return (
        <div className='MARGIN'>
            <h1 className='text-danger' >Booking: {booking.length}</h1>
            <TableContainer 
            sx={{style}}
            className='TABLE shadow-lg m-2 p-3 '
            component={Paper}>
                <Table sx={{}} aria-label="Appointments table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Date</TableCell>
                            <TableCell align="right">Phone </TableCell>
                            <TableCell align="right">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody className='m-2'>
                        {booking.map((row) => (
                            <TableRow className="CELL"
                                key={row._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell  component="th" scope="row">
                                    {row.Name}
                                </TableCell>
                                <TableCell variant="h3" align="right">{row.date}</TableCell>
                                <TableCell align="right">{row.phone}</TableCell>
                                <TableCell align="right"> <Button onClick={() => handleDeleteOrder(row._id)} variant="contained">Deleted</Button>   </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

        </div>
    );
};

export default MyBooking;