import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from "@mui/material"
import { useState } from "react"


export const CalCaliApp = () => {
    const practicas = [
        "6: Be cool",
        "7: Welcome to internet",
        "8: Tejiendo la red",
        "9: Packets",
        "10: HTTP and DNS",
        "11: Explorando Routers",
        "Total (valor final)"
    ]
    const [values,setValue] = useState(Array(6).fill(''));
    const [totalPoints,setTotalPoints] = useState(0);

    const handleInput = (idx, value) => {
        const newValue = [...values];
        newValue[idx] = value;
        setValue(newValue);

        const points = newValue.reduce((acc, val) => acc + (parseFloat(val) || 0), 0);
        const total = Math.floor((points / 110 ) * 40); 
        setTotalPoints(total)
    }

  return (
    <div className="container" style={{ padding: '20px'}}>
        <TableContainer component={Paper} >
            <Table>
                <TableHead >
                    <TableRow sx={{ bgcolor: 'whitesmoke' }}>
                        <TableCell align="center">Prácticas</TableCell>
                        {practicas.map((cols)=>(
                            <TableCell align="center" key={cols}>{cols}</TableCell>
                            ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableCell>Calificación</TableCell>
                    {values.map((value,idx) => (
                        <TableCell key={idx}>
                            <TextField 
                                type="number"
                                value={value}
                                onChange={(e) => handleInput(idx, e.target.value)}
                            />
                        </TableCell>
                    ))}
                    <TableCell align="center">{totalPoints}</TableCell>
                </TableBody>

            </Table>
        </TableContainer>
    </div>
  )
}
