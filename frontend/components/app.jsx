import React from "react";
import Session from "./session/session";
import { CssBaseline } from "@mui/material";
import { Container } from "@mui/material";
import {ThemeProvider, createTheme } from "@mui/material"

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});


function App(){
    return(
        <div>
            
            <ThemeProvider theme={darkTheme}>
                <CssBaseline />
                <Container>
                    <Session />
                </Container>

            </ThemeProvider>
            
            
        </div>
    )
    
}

export default App;