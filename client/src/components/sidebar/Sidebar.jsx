import React from 'react'
import "./sidebar.css"
import HomeIcon from '@mui/icons-material/Home';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import ChatIcon from '@mui/icons-material/Chat';
import VideoCameraFrontIcon from '@mui/icons-material/VideoCameraFront';
import GroupsIcon from '@mui/icons-material/Groups';
import PeopleIcon from '@mui/icons-material/People';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import { Users } from '../../dummyData';
import CloseFriend from '../closeFriend/CloseFriend';

export default function Sidebar() {
  return (
    <div className="sidebar">
          <div className="sidebarWrapper">
            <ul className="sidebarList">
            <li className="sidebarListItem">
                    <HomeIcon className="sidebarIcon"/>
                    <span className="sidebarListItemText">Home</span>
                </li>
                <li className="sidebarListItem">
                    <AccountCircleIcon className="sidebarIcon"/>
                    <span className="sidebarListItemText">C-Suite</span>
                </li>
                <li className="sidebarListItem">
                    <PeopleAltIcon className="sidebarIcon"/>
                    <span className="sidebarListItemText">Managers</span>
                </li>
                <li className="sidebarListItem">
                    <PeopleIcon className="sidebarIcon"/>
                    <span className="sidebarListItemText">Employees</span>
                </li>
                <li className="sidebarListItem">
                    <PeopleOutlineIcon className="sidebarIcon"/>
                    <span className="sidebarListItemText">Consultants</span>
                </li>
                <li className="sidebarListItem">
                    <GroupsIcon className="sidebarIcon"/>
                    <span className="sidebarListItemText">Departments</span>
                </li>
                <li className="sidebarListItem">
                    <AccountTreeIcon className="sidebarIcon"/>
                    <span className="sidebarListItemText">Projects</span>
                </li>
                <li className="sidebarListItem">
                    <ChatIcon className="sidebarIcon"/>
                    <span className="sidebarListItemText">Chat</span>
                </li>
                <li className="sidebarListItem">
                    <VideoCameraFrontIcon className="sidebarIcon"/>
                    <span className="sidebarListItemText">Videos</span>
                </li>
                <li className="sidebarListItem">
                    <RssFeedIcon className="sidebarIcon"/>
                    <span className="sidebarListItemText">News</span>
                </li>
            </ul>
            <button className="sidebarButton">Show More</button>
            <hr  className="sidebarHr"/>
            <ul className="sidebarFriendList">
                {Users.map(u=>(
                        <CloseFriend key={u.id} user={u}/>
                        ))}
            </ul>
          </div>
    </div>
  )
}
