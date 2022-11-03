import { Paper, Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material';
import React from 'react'

export default function DivideInput() {
    let rows = JSON.parse(localStorage.getItem('playersList'));
    const result = []
    const teamA = [];
    const teamB = [];
    const teamAScore = [];
    const teamBScore = []
    console.log(rows);
    rows.map((data) => {
        result.push(data.total)
    })
    rows.sort(function (a, b) { return b.total - a.total });
    rows.forEach((v, i) => {
        if (i % 2 == 0) {
            teamA.push((v));
            teamAScore.push(v.total)
        }
        else {
            teamB.push((v))
            teamBScore.push(v.total)
        }
    });
    let teamAadd = teamAScore.reduce((a, b) => a + b,0)
    let teamBadd = teamBScore.reduce((a, b) => a + b,0)
    console.log("total A==>", teamAadd);
    console.log("total B==>", teamBadd);
    console.log("team  A==>", teamA);
    console.log("team B==>", teamB);
    return (
        <div>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 350 }} aria-label="simple table">
                    <TableBody>

                        <div style={{ display: 'flex ' }}>
                            <div>
                                <TableCell align="right">Team A</TableCell>
                                {teamA.map((A) => (
                                    <TableRow
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell align="right">
                                        <div><b>name:</b> {A.name}</div>
                                            <div><b>stamina:</b> {A.stamina}</div>
                                            <div><b>response:</b> {A.response}</div>
                                            <div><b>focusOnGame:</b> {A.focusOnGame}</div>
                                            <div><b>clean:</b> {A.clean}</div>
                                            <div><b>stressHandler:</b> {A.stressHandler}</div>
                                            <div><b>Total:</b> {A.total}</div>
                                        </TableCell>
                                    </TableRow>
                                ))}
                                <TableCell align="right">total A = {teamAadd}</TableCell>
                            </div>
                            <div>
                                <TableCell align="right">Team B</TableCell>
                                {teamB.map((B) => (
                                  
                                    <TableRow
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell align="right">
                                            <div><b>name:</b> {B.name}</div>
                                            <div><b>stamina:</b> {B.stamina}</div>
                                            <div><b>response:</b> {B.response}</div>
                                            <div><b>focusOnGame:</b> {B.focusOnGame}</div>
                                            <div><b>clean:</b> {B.clean}</div>
                                            <div><b>stressHandler:</b> {B.stressHandler}</div>
                                            <div><b>Total:</b> {B.total}</div>
                                        </TableCell>
                                    </TableRow>       
                                ))}
                                <TableCell align="right">total B = {teamBadd}</TableCell>
                            </div>
                        </div>
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}
