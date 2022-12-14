import {useEffect, useState} from "react";
import {Alert, Button, Snackbar, Stack, TextField, Typography} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {addDispo} from "../redux/slices/dispo";

const AddDispo = () => {
    const [date, setDate] = useState("");
    const [start, setStart] = useState("09:00");
    const [end, setEnd] = useState("18:00");
    const [open, setOpen] = useState(false);
    const profile = useSelector(state => state.profile)
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        dispatch(addDispo({date: date, start: start, end: end, examinerId: profile.id}));
        setOpen(true)
        reset();
    }
    const reset = () => {
        const currentDate = new Date();
        setDate(`${currentDate.getFullYear()}-${currentDate.getMonth()}-${currentDate.getDate()}`);
        setStart("09:00");
        setEnd("18:00");
    }
    useEffect(() => {
        const currentDate = new Date();
        setDate(`${currentDate.getFullYear()}-${currentDate.getMonth()}-${currentDate.getDate()}`);
    }, [])
    return (
        <>
                <Typography variant={"h5"}>Ajouter une disponibilité</Typography>
                <Stack mt={5} spacing={4}>
                    <TextField type={"date"}
                               value={date}
                               onChange={(e) => setDate(e.target.value)}
                               label={"Date"}/>
                    <TextField type={"time"}
                               min="09:00"
                               max="18:00"
                               value={start}
                               onChange={(e) => setStart(e.target.value)}
                               label={"Heure de début"}/>
                    <TextField type={"time"}
                               min="09:00"
                               max="18:00"
                               value={end}
                               onChange={(e) => setEnd(e.target.value)}
                               label={"Heure de fin"}/>
                    <Button variant={"outlined"} onClick={handleSubmit}>
                        ajouter
                    </Button>
                </Stack>
            <Snackbar autoHideDuration={5000} open={open}
                      onClose={() => setOpen(false)}>
                <Alert onClose={() => setOpen(false)} severity="success" sx={{width: '100%'}}>
                    Disponibilité ajoutée
                </Alert>
            </Snackbar>
        </>
    )
}

export default AddDispo