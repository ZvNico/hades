import AppBar from "./components/AppBar";
import {Route, Routes} from "react-router-dom";
import {Box} from "@mui/material";
import Sidebar from "./components/Sidebar";
import {useState} from "react";
import AddDispo from "./pages/AddDispo";
import Dispos from "./pages/Dispos";
import RDV from "./pages/RDV";

const App = () => {
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const sideBarWidth = "250px";
    const appBarHeight = "70px"
    return (
        <div className="App">
            <AppBar height={appBarHeight} isSidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>
            <Sidebar open={sidebarOpen} drawerWidth={sideBarWidth}/>
            <Box sx={{
                position: "absolute",
                top: appBarHeight,
                p: 2,
                ml: sidebarOpen ? sideBarWidth : 0,
                transition: sidebarOpen ? "margin 225ms cubic-bezier(0, 0, 0.2, 1) 0ms" : "margin 195ms cubic-bezier(0.4, 0, 0.6, 1) 0ms"
            }}>
                <Routes>
                    <Route path={"hades"}>
                        <Route path={"add-dispo"} element={<AddDispo/>}/>
                        <Route path={"see-dispos"} element={<Dispos/>}/>
                        <Route path={"see-rdv"} element={<RDV/>}/>
                    </Route>
                </Routes>
            </Box>
        </div>
    );
}

export default App;
