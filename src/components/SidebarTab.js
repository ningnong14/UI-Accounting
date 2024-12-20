import React, { useState } from "react";
import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarFooter,
} from "react-pro-sidebar";
import Pic from "../images/Menu1.png";
import { Box, IconButton, Typography, useTheme, Badge } from "@mui/material";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";


const SideBarTab = (props) => {
  const [isCollapsed, setCollapsed] = useState(false);
  const navigate = useNavigate(); //Link Url

const onClickMenuSidebar=(item)=>{ //clickMenu
  switch(item){
    case "Search Voucher": navigate('/SearchVoucher')
    break
    case "Add MainAccount": navigate('/AddMainAccount')
    break
    case "Record Voucher":navigate('/RecordVoucher')
    break
    case "Home":navigate('/MainMenu')
    break
    default : navigate('/login')
  }
}

  return (
    <div
      className="sidebar-tab"
      style={{backgroundColor: "darkgray" }}
    >
      <Sidebar collapsed={isCollapsed} style={{fontSize:"16px"}}>
        <Menu transitionDuration={1000}>
          <MenuItem
            className="test"
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            onClick={() => setCollapsed(!isCollapsed)}
          >
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              ml="15px"
            >
              <Typography>Accounting App</Typography>
              <IconButton onClick={() => setCollapsed(!isCollapsed)}>
                <MenuOutlinedIcon id="icon" />
              </IconButton>
            </Box>
            {!isCollapsed && (
              <Box
                display="flex"
                alignItems="center"
                position="absolute"
                flexDirection="column"
                marginTop={"15px"}
              >
                <img
                  src={Pic}
                  style={{ width: 200, height: 200, borderRadius: "50%" }}
                />
                <Typography className="mt-2">Dev Tester</Typography>
              </Box>
            )}
          </MenuItem>
          <MenuItem onClick={(e)=>{(onClickMenuSidebar("Home"))}}> Home</MenuItem>
          <SubMenu label="App Function">
            {props.functionName?.map((item, key) => (
              <MenuItem onClick={(e)=>{(onClickMenuSidebar(item))}} key={key}>{item}</MenuItem>
            ))}
          </SubMenu>
          <MenuItem> Calendar</MenuItem>
          <MenuItem> E-commerce</MenuItem>
          <MenuItem> Examples</MenuItem>
        </Menu>
      </Sidebar>
    </div>
  );
};
export default SideBarTab;
