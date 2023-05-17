import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import logo1 from "./images/main_logo.png";

const Header = () => {
    return (

        <React.Fragment>
            <AppBar style={{ background: '#1CB5E6', height: 100 }}>
                <Toolbar>
                    <Typography>

                        <img src={logo1} alt="logo1" style={{ position: 'absolute', width: 300, height: 100, top: 0, left: 0, alignItems: 'center' }} />
                        <h1 style={{ position: 'absolute', left: 680, top: 20, justifyContent: "right", marginTop: 0, alignItems: 'right', fontSize: 37, fontFamily: 'Times New Roman', color: 'black' }}>Health is Wealth</h1>
                        <h2 style={{ position: 'absolute', top: 50, left: 930, justifyContent: "right", alignItems: 'right', fontFamily: 'Times New Roman', fontStyle: 'oblique', color: 'black' }}>~ A Health Monitoring System </h2>

                    </Typography>
                </Toolbar>
            </AppBar>
        </React.Fragment>
    );
};
export default Header;