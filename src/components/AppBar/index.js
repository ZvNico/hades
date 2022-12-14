import {
    AppBar as MuiAppBar,
    Avatar,
    Box,
    FormControl,
    IconButton,
    InputLabel,
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
import {Link, useNavigate } from "react-router-dom";
import {users} from "../../consts";

const AppBar = ({isSidebarOpen, setSidebarOpen, height}) => {
    const navigate = useNavigate();
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
                    <FormControl>
                        <InputLabel id={"profile"}>Profile</InputLabel>
                        <Select
                            labelId={"profile"}
                            sx={{mx: 1, color: "white"}}
                            value={profile}
                            label="Profile"
                            onChange={(e) => {
                                navigate("/hades");
                                dispatch(goToProfile(e.target.value));
                            }}
                        >
                            {users.map((user, index) =>
                                <MenuItem
                                    value={user}
                                    key={index}>
                                    {user.role + " " + user.firstName + " " + user.lastName}
                                </MenuItem>)}
                        </Select>
                    </FormControl>
                </Stack>
                <Avatar sx={{ml: 1}}><Typography>{profile.firstName[0]}{profile.lastName[0]}</Typography></Avatar>
            </Toolbar>
        </MuiAppBar>
    </Box>);
}

export default AppBar