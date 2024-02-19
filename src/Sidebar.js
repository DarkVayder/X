import React from 'react';
import "./Sidebar.css";
import XIcon from '@mui/icons-material/X';
import HomeIcon from '@mui/icons-material/Home';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ExploreIcon from '@mui/icons-material/Explore';
import SidebarOption from './SidebarOption';


function Sidebar() {
  return (
    <div className= "sidebar">
        
        <XIcon />

        <SidebarOption Icon={HomeIcon} text="Home"/>
        <SidebarOption Icon={ExploreIcon} text="Explore"/>
        <SidebarOption Icon={NotificationsIcon} text="Notification" />

        

    </div>
  )
}

export default Sidebar