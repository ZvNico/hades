import {useSelector} from "react-redux";
import {Stack, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography} from "@mui/material";
import {days, months} from "../consts";

const Dispos = () => {
    const dispos = useSelector(state => state.dispos)
    const sortedDispos = dispos.map(dispo => {
        return {...dispo, date: new Date(dispo.date)}
    }).sort((a, b) => a.date > b.date)
    return (
        <div>
            <Typography variant={"h5"}>Vos disponibilités</Typography>
            <TableContainer mt={5} >
                <TableHead>
                    <TableCell>Date</TableCell>
                    <TableCell>Heure début</TableCell>
                    <TableCell>Heure fin</TableCell>
                </TableHead>
                <TableBody>
                {sortedDispos.map((dispo, index) => {
                    return (
                        <TableRow key={index}>
                            <TableCell>{days[dispo.date.getDay()]} {dispo.date.getDate()} {months[dispo.date.getMonth()]}</TableCell>
                            <TableCell>{dispo.start}</TableCell>
                            <TableCell>{dispo.end}</TableCell>
                        </TableRow>
                    )
                })}
                </TableBody>
            </TableContainer>
        </div>
    )
}

export default Dispos