import {createSlice} from "@reduxjs/toolkit";

const initialState = []
const rdvSlice = createSlice({
    name: "rdvs",
    initialState,
    reducers: {
        addRDV: (state, rdv) => {
            state.push(rdv.payload)
        },
    }

})
// Action creators are generated for each case reducer function
export const {addRDV} = rdvSlice.actions
export default rdvSlice.reducer