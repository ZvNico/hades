import {useSelector} from "react-redux";
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography} from "@mui/material";
import {days, months, users} from "../consts";

const RDV = () => {
    const rdvs = useSelector(state => state.rdvs);
    const profile = useSelector(state => state.profile);
    const sortedRdvs = rdvs.map(rdv => {
        return {...rdv, date: new Date(rdv.date)}
    }).sort((a, b) => a.date > b.date)
    return (
        <div>
            <Typography
                mb={5}
                variant={"h5"}>{profile.role === "examinateur" ? "Vos entretiens" : "Votre entretien"}</Typography>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Date</TableCell>
                            <TableCell>Heure début</TableCell>
                            <TableCell>Heure fin</TableCell>
                            <TableCell>Salle</TableCell>
                            <TableCell>{profile.role === "examinateur" ? "Candidat" : "Examinateur"}</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {sortedRdvs.map((rdv, index) => {
                            const otherUser = profile.role === "examinateur"
                                ? users.find(user => user.id === rdv.candidatId )
                                : users.find(user => user.id === rdv.examinerId )
                            return (
                                <TableRow key={index}>
                                    <TableCell>{days[rdv.date.getDay()]} {rdv.date.getDate()} {months[rdv.date.getMonth()]}</TableCell>
                                    <TableCell>{rdv.start}</TableCell>
                                    <TableCell>{rdv.end}</TableCell>
                                    <TableCell>{rdv.salle}</TableCell>
                                    <TableCell>{otherUser.firstName + " " + otherUser.lastName}</TableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default RDV