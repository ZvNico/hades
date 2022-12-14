import {useDispatch, useSelector} from "react-redux";
import {Alert, Button, FormControl, InputLabel, MenuItem, Select, Snackbar, Stack, Typography} from "@mui/material";
import {useEffect, useState} from "react";
import {days, months} from "../consts";
import {addRDV} from "../redux/slices/rdv";

const ChooseRDV = () => {
    const [open, setOpen] = useState(false);
    const profile = useSelector(state => state.profile);
    const dispos = useSelector(state => state.dispos);
    const [date, setDate] = useState("");
    const [dates, setDates] = useState([]);
    const [times, setTimes] = useState([]);
    const [time, setTime] = useState("");
    const rdvs = useSelector(state => state.rdvs);
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        const [start, end] = time.split(" - ")
        const dispo = dispos.find(examiner =>
            examiner.date === date &&
            (start => examiner.start && start <= examiner.end) &&
            (end => examiner.start && end <= examiner.end)
        )
        dispatch(addRDV({date: date, start: start, end: end, candidatId: profile.id, examinerId: dispo?.examinerId}))
        setOpen(true)
        reset()
    }
    const reset = () => {
        if (dates.length > 0) setDate(dates[0]);
        if (times.length > 0) setTime(times[0]);
    }
    useEffect(() => {
        const temp = []
        dispos.forEach(dispo => {
            if (!temp.includes(dispo.date)) temp.push(dispo.date);
        });
        if (temp.length > 0) setDate(temp[0]);
        setDates([...temp]);
    }, [dispos])

    useEffect(() => {
        const temp = []
        dispos.filter(dispo => dispo.date === date).forEach(dispo => {
            const start = parseInt(dispo.start.slice(0, 2));
            const end = parseInt(dispo.end.slice(0, 2));
            for (var i = start; i < end; i++) {
                const hour = `${i < 10 ? "0" : ""}${i}:00 - ${(i + 1) < 10 ? "0" : ""}${i + 1}:00`
                if (!temp.includes(hour)) temp.push(hour)
            }
        })
        if (temp.length > 0) setTime(temp[0]);
        setTimes([...temp])
    }, [date])
    return (
        <>
            <Typography mb={5} variant={"h5"}>Choisir une date et un horaire pour votre entretien</Typography>
            {rdvs.find(rdv =>  rdv.candidatId === profile.id ) === undefined
                ? <Stack spacing={4}>
                    <FormControl>
                        <InputLabel id={"date"}>Date</InputLabel>
                        <Select
                            labelId={"date"}
                            sx={{mx: 1, color: "black"}}
                            value={date}
                            label="Date"
                            onChange={(e) => setDate(e.target.value)}
                        >
                            {dates.map((d, index) => {
                                    const newDate = new Date(d)
                                    return <MenuItem
                                        value={d}
                                        key={index}>
                                        {days[newDate.getDay()]} {newDate.getDate()} {months[newDate.getMonth()]}
                                    </MenuItem>
                                }
                            )}
                        </Select>
                    </FormControl>
                    <FormControl>
                        <InputLabel id={"hour"}>Heure</InputLabel>
                        <Select
                            labelId={"hour"}
                            sx={{mx: 1, color: "black"}}
                            value={time}
                            label="Heure"
                            onChange={(e) => setTime(e.target.value)}
                        >
                            {times.map((t, index) => {
                                    return <MenuItem
                                        value={t}
                                        key={index}>
                                        {t}
                                    </MenuItem>
                                }
                            )}
                        </Select>
                    </FormControl>
                    <Button variant={"outlined"} onClick={handleSubmit}>Choisir</Button>
                </Stack>
                : <Typography>Vous avez déjà pris rendez vous</Typography>
            }

            <Snackbar autoHideDuration={5000} open={open}
                      onClose={() => setOpen(false)}>
                <Alert onClose={() => setOpen(false)} severity="success" sx={{width: '100%'}}>
                    Rendez vous pris
                </Alert>
            </Snackbar>
        </>
    )
}

export default ChooseRDV