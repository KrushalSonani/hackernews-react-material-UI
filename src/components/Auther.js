import { Box, Modal } from "@mui/material"
import { useEffect } from "react";
import { BASEURL } from "../utils";
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

export const AuthorDetails =(props)=>{

  useEffect(()=>{
  
    if(props?.author){
      getData()
    }
  },[props?.author])
  const getData = async function() {
    const arr = [];
    try {
      const { data } = await axios.get(
        `${BASEURL}/${props?.author}.json?print=pretty`
      );
    } catch (error) {
        // setOpen(true);
        // setLoading(false);
      return error;
    }
    return arr;
  }

    return(
        <Modal
        open={true}
        component="form"
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          hellow Author
        </Box>
      </Modal>
    )
}