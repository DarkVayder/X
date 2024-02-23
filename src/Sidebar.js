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
import GroupsIcon from '@mui/icons-material/Groups';
import { Button } from '@mui/material';
function Sidebar() {
  return (
    <div className= "sidebar">
        
        <XIcon className='sidebar__xicon'/>

        <SidebarOption active Icon={HomeIcon} text="Home"/>
        <SidebarOption Icon={ExploreIcon} text="Explore"/>
        <SidebarOption Icon={NotificationsIcon} text="Notification" />
        <SidebarOption Icon={EmailIcon} text="Messages"/>
        <SidebarOption Icon={BookmarkIcon} text="Bookmarks"/>
        <SidebarOption Icon={ListIcon} text="Lists"/>
        <SidebarOption Icon={GroupsIcon} text="Communities"/>
        <SidebarOption Icon={XIcon} text="Premium"/>
        <SidebarOption Icon={PersonIcon} text="Profile"/>
        <SidebarOption Icon={MoreIcon} text="More"/>
        
    <Button variant="outlined" className="sidebar__tweet" fullWidth>Post</Button>
    </div>
  )
}

export default Sidebar