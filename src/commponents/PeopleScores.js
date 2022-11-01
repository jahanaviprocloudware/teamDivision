import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';



export default function PeopleScores({rows}) {
   
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell align="right">Stamina</TableCell>
                        <TableCell align="right">Response</TableCell>
                        <TableCell align="right">Focus</TableCell>
                        <TableCell align="right">Stress</TableCell>
                        <TableCell align="right">Clean</TableCell>
                        <TableCell align="right">Total</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                       
                        <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="right">{row.stamina}</TableCell>
                            <TableCell align="right">{row.response}</TableCell>
                            <TableCell align="right">{row.focusOnGame}</TableCell>
                            <TableCell align="right">{row.clean}</TableCell>
                            <TableCell align="right">{row.stressHandler}</TableCell>
                            <TableCell align="right">{row.total}</TableCell>
                           {console.log("next page-->" , row.total)}
                        </TableRow>
                    ))}
                     <Link to="/divide"><button>divide</button></Link>
                </TableBody>
            </Table>
        </TableContainer>
    );
   
    
}
