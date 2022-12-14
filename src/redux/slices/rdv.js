import {createSlice} from "@reduxjs/toolkit";
import {salles} from "../../consts";

const initialState = []
const rdvSlice = createSlice({
    name: "rdvs",
    initialState,
    reducers: {
        addRDV: (state, rdv) => {
            state.push({...rdv.payload, salle: salles[Math.floor(Math.random() * salles.length)]})
        },
    }

})
// Action creators are generated for each case reducer function
export const {addRDV} = rdvSlice.actions
export default rdvSlice.reducer