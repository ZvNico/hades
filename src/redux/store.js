import {configureStore} from '@reduxjs/toolkit'
import profileReducer from "./slices/profile";
import dispoReducer from "./slices/dispo";
import rdvReducer from "./slices/rdv";

const store = configureStore({
    reducer: {
        profile: profileReducer,
        dispos: dispoReducer,
        rdvs: rdvReducer,
    },
    devTools: window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
})
export default store