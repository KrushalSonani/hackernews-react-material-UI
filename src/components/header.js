import {Search } from "@mui/icons-material";
import {Divider, InputAdornment, Tab, Tabs, TextField } from "@mui/material"
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Login } from "./login";

export const Header = () => {

  const navigate = useNavigate();
  const [value, setValue] = useState('topstories');
  const [open, setOpen] = useState(false)
  const handleChange = (event, newValue) => {
    navigate(`news/${newValue}`)
  };
  //set Active tab
  useEffect(() => {
    if (window?.location.pathname?.split('/')?.length > 2) {
      setValue(window?.location.pathname?.split('/')[2])
    }
  }, [window?.location?.pathname]);

  return (

    <>
      <div className="d_flex c-between logo sticky ">
        <h1 className="d_flex m-0 w-100 cp-n"><span className="logo-border">HN</span> <span className="heading-title">Hacker News</span></h1>
        <span className="p-r-10 cp" onClick={() => setOpen(true)}>Login</span>
      </div>

      <div className="d_flex h-top">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="scrollable auto tabs example"
        >
          <Tab value="topstories" label="Top" />
          <Tab value="newstories" label="New" />
          <Tab value="beststories" label="Best" />
          <Tab value="askstories" label="Ask" />
          <Tab value="jobstories" label="Jobs" />
        </Tabs>
      </div>

      <Divider />
    {
      open && <Login open={open} onClose={()=>setOpen(false)}/>
    }
    </>

  );
}