import {createSlice} from "@reduxjs/toolkit";
import {users} from "../../consts";

const initialState = users[0]

const profileSlice = createSlice({
    name: "profile",
    initialState,
    reducers: {
        goToProfile: (state, profile) => {
            return profile.payload;
        }
    }

})
// Action creators are generated for each case reducer function
export const {goToProfile} = profileSlice.actions
export default profileSlice.reducer