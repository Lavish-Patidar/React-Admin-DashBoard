import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../../thems";
import HomeOutLinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutLinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutLinedIcon from "@mui/icons-material/ContactsOutlined";
import RecieptOutLinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutLinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutLinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutLinedIcon from "@mui/icons-material/HelpOutlined";
import BarChartOutLinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutLineOutLinedIcon from "@mui/icons-material/PieChartOutLineOutlined";
import TimelineOutLinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutLinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutLinedIcon from "@mui/icons-material/MapOutlined";

const Items = ({ title, to, icon, selected, setSelected }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <MenuItem
            active={selected === title}
            style={{ color: colors.grey[100] }}
            onClick={() => setSelected(title)}
            icon={icon}
        >
            <Typography>{title}</Typography>
            <Link to={to} />
        </MenuItem>
    );
};

const Sidebar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [selected, setSelected] = useState("Dashboard");

    return (
        <Box
            sx={{
                "& .pro-sidebar-inner": {
                    background: `${colors.primary[400]} !important`,
                },
                "& .pro-icon-wrapper": {
                    backgroundColor: "transparent !important",
                },
                "& .pro-inner-item": {
                    padding: "5px 35px 5px 20px !important ",
                },
                "& .pro-inner-item:hover": {
                    color: "#868dfb !important",
                },
                "& .pro-menu-item.active": {
                    color: "#6870fa !important",
                },
            }}
        >
            <ProSidebar collapsed={isCollapsed}>
                <Menu iconShape="square">
                    <MenuItem
                        onClick={() => {
                            setIsCollapsed(!isCollapsed);
                        }}
                        icon={isCollapsed ? <MenuOutLinedIcon /> : undefined}
                        style={{
                            margin: "10px 0px 20px 0px ",
                            color: colors.grey[100],
                        }}
                    >
                        {!isCollapsed && (
                            <Box
                                display={"flex"}
                                justifyContent={"space-between"}
                                alignItems={"center"}
                                ml={"15px"}
                            >
                                <Typography variant="h3" color={colors.grey[100]}>
                                    ADMINIS
                                </Typography>
                                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                                    <MenuOutLinedIcon />
                                </IconButton>
                            </Box>
                        )}
                    </MenuItem>

                    {/* USER */}
                    {!isCollapsed && (
                        <Box>
                            <Box
                                display={"flex"}
                                justifyContent={"center"}
                                alignItems={"center"}
                            >
                                <img
                                    src="../../assets/user.png"
                                    alt="profile"
                                    width={"100px"}
                                    height={"100px"}
                                    style={{ cursor: "pointer", borderRadius: "50%" }}
                                />{" "}
                            </Box>

                            <Box textAlign={"center"}>
                                <Typography
                                    variant="h2"
                                    color={colors.grey[100]}
                                    fontWeight={"bold"}
                                    sx={{ m: "10px 0 0 0" }}
                                >
                                    Lavish
                                </Typography>
                                <Typography>VP Fancy Admin</Typography>
                            </Box>
                        </Box>
                    )}

                    {/* Menu Items */}
                    <Box paddingLeft={isCollapsed ? undefined : "10%"}>

                        <Items
                            title='Dashboard'
                            to="/"
                            icon={<HomeOutLinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />

                        <Typography
                            variant="h6" color={colors.grey[300]} sx={{ margin: '15px 0 5px 20px ' }}
                        >Data</Typography>

                        <Items
                            title='Manage Team'
                            to="/team"
                            icon={<PeopleOutLinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Items
                            title='Contacts Information'
                            to="/contacts"
                            icon={<ContactsOutLinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Items
                            title='Invoice Balances'
                            to="/invoces"
                            icon={<RecieptOutLinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />


                        <Typography
                            variant="h6" color={colors.grey[300]} sx={{ margin: '15px 0 5px 20px ' }}
                        >Pages</Typography>

                        <Items
                            title='Profile Form'
                            to="/form"
                            icon={<PersonOutLinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Items
                            title='Calender'
                            to="/calender"
                            icon={<CalendarTodayOutLinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Items
                            title='FAQ'
                            to="/faq"
                            icon={<HelpOutLinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />

                        <Typography
                            variant="h6" color={colors.grey[300]} sx={{ margin: '15px 0 5px 20px ' }}
                        >Chats</Typography>

                        <Items
                            title='Bar Chart'
                            to="/bar"
                            icon={<BarChartOutLinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Items
                            title='Pie Chart '
                            to="/pie"
                            icon={<PieChartOutLineOutLinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Items
                            title='Line Chart'
                            to="/line"
                            icon={<TimelineOutLinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Items
                            title='Geography Chart'
                            to="/geography"
                            icon={<MapOutLinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />

                    </Box>
                </Menu>
            </ProSidebar>
        </Box>
    );
};

export default Sidebar;
