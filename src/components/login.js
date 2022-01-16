import { Alert, Box, Button, Divider, Modal, Snackbar, TableHead, TableRow, TextField, Typography } from "@mui/material"
import { useEffect, useState } from "react";
import { SOURCEURL } from "../utils";
import axios from "axios";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',    
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,   
 };

export const Login =(props)=>{
    const [open, setOpen] = useState(false);

    const onSubmit=()=>{
        getData();
    }

    const getData = async function() {
        const arr = [];
        let formData = new FormData()
        formData?.append('acct', 'krushal')
        formData?.append('pwd', 'Artoo1#')
        try {
          const { data } = await axios.post(
            `${SOURCEURL}/login`, formData
          );
         // data.slice(start, end).map(item => arr.push(item));
        } catch (error) {
             setOpen(true);
            // setLoading(false);   
          return error;
        }
        return arr;
      };

    return(
        <Modal
        open={true}
        component="form"
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <TableHead className="p-20">Login</TableHead>
            <Divider/>
            <div className="d_inline-grid p-20">
                     <span>
                      <TextField id="standard-basic"  value = 'krushal' autoComplete="off" label="User Name"  />
                   </span>
                   <span  className='p-t-10'>
                   <TextField type='password' value ='Artoon1#'  label="Password" autoComplete="off"/>

                   </span>
            </div>
            <Divider/>
            <div className="p-20">
            <Button variant="outlined" onClick={()=> props?.onClose()}>Close</Button>
            <Button variant="contained" onClick={()=> onSubmit()}>Submit</Button>
           </div>
           <Snackbar open={open} autoHideDuration={3000} onClose={()=> setOpen(false)}>
            <Alert severity="error" onClose={()=> setOpen(false)}>Somthing went wrong!</Alert>
         </Snackbar>
        </Box>
        
      </Modal>
    )
}