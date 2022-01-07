import { Box, Typography } from "@mui/material";
import React from "react";


function Footer(){
    return(
        <Box
            sx={{
                textAlign: 'center',
                position: 'fixed',
                bottom: '0',
                width: '100%',
                height: '50px',
            }}
        >
            <Typography variant="h4" component="h4" >This is a footer</Typography>
        </Box>
        
    )
}

export default Footer;
