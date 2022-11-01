import { Paper, Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material'
import React, { useEffect } from 'react'

export default function Divide({ rows }) {
    const result = []
    const teamA = [];
    const teamB = [];
    const teamAScore = [];
    const teamBScore = []

    rows.forEach((data) => {
        result.push(data.total)
    })
    rows.sort(function (a, b) { return b.total - a.total });
    rows.forEach((v, i) => {
        if (i % 2 == 0) {
            // v.stringify()
            teamA.push(JSON.stringify(v));
            teamAScore.push(v.total)
        }
        else {
            // v.stringify()
            teamB.push(JSON.stringify(v))
            teamBScore.push(v.total)
        }
        // }
    });
    let teamAadd = teamAScore.reduce((a, b) => a + b)
    let teamBadd = teamBScore.reduce((a, b) => a + b)
    console.log("total A==>", teamAadd);
    console.log("total B==>", teamBadd);
    console.log("team  A==>", teamA);
    console.log("team B==>", teamB);

    console.log(rows)
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

                                        <TableCell align="right">{A}</TableCell>

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
                                        <TableCell align="right">{B}</TableCell>
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
