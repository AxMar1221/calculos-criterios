
import { Checkbox, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from "@mui/material"
import { useState } from "react"

export const CaliPooApp = () => {
    const practicas = [
        "6: String Concatenation",
        "7: Calculadora",
        "8: If-Else by Switch-Case",
        "9: Estructura de control",
        "Total"
    ];
    const checkboxes = [1, 2, 3, 4];

    const [values, setValue] = useState(Array(4).fill(''));
    const [checkBox, setCheckBox] = useState(Array(4).fill(''));
    const [totalPoints, setTotalPoints] = useState(0);
    const [totalPointsCheck, setTotalPointsCheck] = useState(0);

    const handleInput = (idx, value) => {

        const typeValue = parseInt(value , 10);

        if (!isNaN(typeValue) && typeValue >= 0){
            const maxPoints = [20, 20, 25, 20];

            const limitPoints = Math.min(typeValue, maxPoints[idx]);

            const newValue = [...values];
            newValue[idx] = limitPoints.toString();
            setValue(newValue);
            
            const points = newValue.reduce((acc, val) => acc + (parseFloat(val) || 0), 0);
            const total = Math.floor((points / 85) * 40);
            setTotalPoints(total)
        }
    }

    const handleCheck = (idx, isChecked) => {
        const newCheckBoxValue = [...checkBox];
        newCheckBoxValue[idx] = isChecked;
        setCheckBox(newCheckBoxValue);

        const selectedCheckBox = newCheckBoxValue.filter((val) => val);
        const points = selectedCheckBox.length * 2.5;
        setTotalPointsCheck(points);
    }

    const totalPointsSum = () => {
        return totalPoints + totalPointsCheck;
    }

    return (
        <div className="container" style={{ padding: '20px' }}>
            <TableContainer component={Paper} elevation={24} >
                <Table >
                    <TableHead >
                        <TableRow sx={{ bgcolor: 'whitesmoke' }}>
                            <TableCell align="center">Prácticas</TableCell>
                            {practicas.map((cols) => (
                                <TableCell align="center" key={cols}>{cols}</TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>

                            <TableCell>Calificación</TableCell>
                            {values.map((value, idx) => (
                                <TableCell align='center' key={idx}>
                                    <TextField
                                        type="number"
                                        value={value}
                                        onChange={(e) => handleInput(idx, e.target.value)}
                                    />
                                </TableCell>
                            ))}
                            <TableCell align='center'>{totalPoints}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Actividad entregada</TableCell>
                            {checkboxes.map((idx) => (
                                <TableCell
                                    align='center'
                                    checked={checkBox[idx - 1]}
                                    onChange={(e) => handleCheck(idx - 1, e.target.checked)}
                                    key={idx}>
                                    <Checkbox />
                                </TableCell>
                            ))}
                            <TableCell align='center'>{totalPointsCheck}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell colSpan={5} align="center">Total de puntos de los criterios Prácticas realizadas en clases y trabajo independiente</TableCell>
                            <TableCell align='center'>{totalPointsSum()}</TableCell>
                        </TableRow>
                    </TableBody>

                </Table>
            </TableContainer>
        </div>
    )
}
