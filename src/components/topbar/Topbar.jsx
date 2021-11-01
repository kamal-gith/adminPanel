import React from 'react'
import './topbar.css'
import avatar from './kml.jpeg';
import { NotificationsNone, Language, Settings, AccountBox } from '@material-ui/icons';

export default function Topbar() {
    return (
        <div className='topbar'>
            <div className="topbarWrapper">
                <div className="topLeft">
                <AccountBox className='logoIcon'/>
                    <span className='logo'>Admin Portal</span>
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                        <NotificationsNone />
                        <span className='topIconBadge'>2</span>
                    </div>
                   
                    <div className="topbarIconContainer">
                        <Language />
                        <span className='topIconBadge'>2</span>
                    </div>

                    <div className="topbarIconContainer">
                        <Settings />
                    </div>
                    <img src={avatar} alt="" className="topAvatar" />
                </div>
            </div>
        </div>
    )
}
