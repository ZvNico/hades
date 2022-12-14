import {
    AppBar as MuiAppBar,
    Avatar,
    Box,
    IconButton,
    MenuItem,
    Select,
    Stack,
    Toolbar,
    Typography
} from '@mui/material';
import {Menu} from '@mui/icons-material';
import logo from "../../assets/logo-white.svg";
import {useDispatch, useSelector} from "react-redux";
import {goToProfile} from "../../redux/slices/profile";
import {Link} from "react-router-dom";
import {users} from "../../consts";

const AppBar = ({isSidebarOpen, setSidebarOpen, height}) => {
    const profile = useSelector(state => state.profile);
    const dispatch = useDispatch()
    return (<Box sx={{flexGrow: 1}}>
        <MuiAppBar position="static" sx={{height: height}}>
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    onClick={() => setSidebarOpen(!isSidebarOpen)}
                >
                    <Menu/>
                </IconButton>
                <Stack flexDirection={"row"} alignItems={"center"} to={""} sx={{flexGrow: 1, height: "100%"}}
                       component={Link}>
                    <Box component="img" sx={{height: "100%", py: 1}} src={logo}/>
                    <Typography variant="h4" component="h4">
                        HADES
                    </Typography>
                </Stack>
                <Stack flexDirection={"row"} alignItems={"center"}
                       sx={{"& MuiTypography-root": {verticalAlign: "middle"}}}>
                    <Typography>Bienvenue</Typography>
                    <Select
                        sx={{mx: 1, color: "white"}}
                        value={profile}
                        label="Profile"
                        onChange={(e) => dispatch(goToProfile(e.target.value))}
                    >
                        {users.map((user, index) =>
                            <MenuItem
                                value={user}
                                key={index}>
                                {user.role + " " + user.firstName + " " + user.lastName}
                            </MenuItem>)}
                    </Select>
                </Stack>
                <Avatar sx={{ml: 1}}><Typography>NB</Typography></Avatar>
            </Toolbar>
        </MuiAppBar>
    </Box>);
}

export default AppBar