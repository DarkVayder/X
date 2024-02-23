import React from 'react';
import "./Sidebar.css";
import XIcon from '@mui/icons-material/X';
import HomeIcon from '@mui/icons-material/Home';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ExploreIcon from '@mui/icons-material/Explore';
import SidebarOption from './SidebarOption';
import EmailIcon from '@mui/icons-material/Email';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import ListIcon from '@mui/icons-material/List';
import PersonIcon from '@mui/icons-material/Person';
import MoreIcon from '@mui/icons-material/More';
function Sidebar() {
  return (
    <div className= "sidebar">
        
        <XIcon />

        <SidebarOption active Icon={HomeIcon} text="Home"/>
        <SidebarOption Icon={ExploreIcon} text="Explore"/>
        <SidebarOption Icon={NotificationsIcon} text="Notification" />
        <SidebarOption Icon={EmailIcon} text="Email"/>
        <SidebarOption Icon={BookmarkIcon} text="Bookmark"/>
        <SidebarOption Icon={ListIcon} text="Lists"/>
        <SidebarOption Icon={PersonIcon} text="Profile"/>
        <SidebarOption Icon={MoreIcon} text="More"/>
        

    </div>
  )
}

export default Sidebar