import {createSlice} from "@reduxjs/toolkit";

const initialState = []
const dispoSlice = createSlice({
    name: "dispos",
    initialState,
    reducers: {
        addDispo: (state, dispo) => {
            state.push(dispo.payload)
        },
    }

})
// Action creators are generated for each case reducer function
export const {addDispo} = dispoSlice.actions
export default dispoSlice.reducer