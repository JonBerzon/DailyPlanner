import React from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Typography } from "@mui/material";

function Session(){
    return(
        <div className="session-main-div">
            <Typography variant="h4" component="h1">Signup and Organize your Life</Typography>
            <form>
                <TextField id="outlined-basic" label="Username" variant="outlined" size="small" />
                <TextField id="outlined-basic" label="Password" variant="outlined" size="small" type="password" />
                <Button variant="outlined" color="secondary" >Submit</Button>
            </form>
        </div>
    )
}

export default Session;