import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Avatar, Button, Stack } from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";
import "./Header.css";
import { useHistory,Link } from "react-router-dom";
const Header = ({ children, hasHiddenAuthButtons }) => {
  const history=useHistory();
  const routetoExplore = ()=>{history.push("/");};
  const routetoRegister =()=>{history.push("/register");};
  const routertoLogin =()=>{history.push("/login");};
  const logout=()=>{
    localStorage.removeItem("username");
    localStorage.removeItem("token");
    localStorage.removeItem("balance");
    history.push("/");
    window.location.reload();
  }
  if(hasHiddenAuthButtons){
    return(
      <Box className="header">
      <Box className="header-title">
          <Link to="/"><img src="logo_light.svg" alt="Qkart-icon"></img></Link>
      </Box>
      <Button
        className="explore-button"
        startIcon={<ArrowBackIcon />}
        variant="text"
        onClick={routetoExplore}
      >
        Back to explore
      </Button>
    </Box>
    );
  };
    return (
      <Box className="header">
        <Box className="header-title">
        <Link to="/"><img src="logo_light.svg" alt="Qkart-icon"></img></Link>
        </Box>
        {children}
        <Stack direction="row" spacing={1} alignItems="center">
          {
            localStorage.getItem("username")?
        (<>
        <Avatar src="avatar.png" alt={localStorage.getItem("username") || "profile"}/>
        <p className="username-text">{localStorage.getItem("username")}</p>
        <Button type="primary" onClick={logout}>Logout</Button>
        </>):(<>
        
         <Button variant="contained" onClick={routertoLogin}>Login</Button>
         <Button variant="contained" onClick={routetoRegister}>Register</Button>
        </>)
}
        </Stack>
      </Box>
    );
};

export default Header;
