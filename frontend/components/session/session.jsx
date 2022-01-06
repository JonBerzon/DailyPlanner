import React from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Typography, Box, FormControl } from "@mui/material";
import { flexbox } from "@mui/system";


function Session(){
    return(
        <Box
            sx={{
                display: 'flex',
                flexDirection: "column",
                alignItems: 'center',
                '& > :not(style)': { margin: 1},
                
            }}
        
        >
            <Typography variant="h4" component="h1" paddingTop={3}>Signup and Organize your Life</Typography>
            <FormControl>
                <TextField id="outlined-basic" label="Username" variant="outlined" margin="normal" sx={{width: '30ch'}} />
                <TextField id="outlined-basic" label="Password" variant="outlined" type="password" />
                <Button 
                    variant="outlined" 
                    sx={{
                        marginTop: '10px',
                        border: '1px solid grey',
                        color: 'gray',
                        // '&:hover': {border: '1px solid white'}

                    }}
                
                >Submit</Button>
            </FormControl>
        </Box>
    )
}

export default Session;