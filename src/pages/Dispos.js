import {useSelector} from "react-redux";
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography} from "@mui/material";
import {days, months} from "../consts";

const Dispos = () => {
    const dispos = useSelector(state => state.dispos)
    const sortedDispos = dispos.map(dispo => {
        return {...dispo, date: new Date(dispo.date)}
    }).sort((a, b) => a.date > b.date)
    return (
        <>
            <Typography mb={5} variant={"h5"}>Vos disponibilités</Typography>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Date</TableCell>
                            <TableCell>Heure début</TableCell>
                            <TableCell>Heure fin</TableCell>
                        </TableRow>
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
                </Table>
            </TableContainer>
        </>
    )
}

export default Dispos