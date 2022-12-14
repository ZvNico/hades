import {Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import {Link} from "react-router-dom";
import {CalendarMonth, Create, Event, WatchLater} from "@mui/icons-material";
import {useSelector} from "react-redux";

const Sidebar = ({open, drawerWidth}) => {
    const profile = useSelector(state => state.profile)
    const items = profile.role === "examinateur"
        ? [{"label": "Saisir disponibilité", link: "hades/add-dispo", icon: <Create/>},
            {"label": "Vos disponibilités", link: "hades/see-dispos", icon: <CalendarMonth/>},
            {"label": "Vos rendez-vous", link: "hades/see-rdv", icon: <WatchLater/>}]
        : [{"label": "Choisir rendez-vous", link: "hades/choose-rdv", icon: <Event/>},
            {"label": "Votre rendez-vous", link: "hades/choose-rdv", icon: <WatchLater/>}]
    return (
        <Drawer
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    position: "absolute",
                    top: "70px",
                    height: "calc(100% - 70px)",
                    width: drawerWidth,
                    boxSizing: 'border-box',
                },
            }}
            variant="persistent"
            anchor="left"
            open={open}
        >
            <Divider/>
            <List>
                {items.map((item, index) => (
                    <ListItem key={index} disablePadding>
                        <ListItemButton to={item.link} component={Link}>
                            <ListItemIcon>
                                {item.icon}
                            </ListItemIcon>
                            <ListItemText primary={item.label}/>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Drawer>)
}

export default Sidebar