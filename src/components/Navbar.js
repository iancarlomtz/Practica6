import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import Sidebar from "./Sidebar";
const Navbar = () => {
    return (
        <AppBar className="Barra" position="static">
            <Toolbar>
                <Sidebar/>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                    Bobbers Motors Company
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
