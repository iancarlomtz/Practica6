import React from 'react';
import { Box, Container } from '@mui/material';
import Navbar  from "./Navbar";
const Layout = ({ children }) => {
    return (
        <Box>
            <Navbar/>
            <Container className="container">
                {children}

            </Container>
            <Box
                className="footer"
                sx={{
                    mt: "auto",
                    backgroundColor: "navy",
                    color: "white",
                    textAlign: "center",
                    py: 2
                }}
            >
                © 2025 - All Rights Reserved
            </Box>

        </Box>
    );
};

export default Layout;
