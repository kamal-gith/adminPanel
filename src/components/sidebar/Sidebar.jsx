import './sidebar.css'
import { LineStyle, Timeline, TrendingUp, Group, AllInbox, AttachMoney, Assessment, Email, DynamicFeed, Forum, BusinessCenter, Report } from '@material-ui/icons'


export default function Sidebar() {
    return (
        <div className='sidebar'>
            <div className="sidebarWrapper">
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Dashboard</h3>
                <ul className="sidebarlist">
                    <li className="sidebarListItems active">
                        <LineStyle className='sidebarIcons'/>
                        Home
                    </li>
                    <li className="sidebarListItems">
                        <Timeline className='sidebarIcons'/>
                        Analytics
                    </li>
                    <li className="sidebarListItems">
                        <TrendingUp className='sidebarIcons'/>
                        Sales
                    </li>
                </ul>
            </div>
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Quick Menu</h3>
                <ul className="sidebarlist">
                    <li className="sidebarListItems">
                        <Group className='sidebarIcons'/>
                        Users
                    </li>
                    <li className="sidebarListItems">
                        <AllInbox className='sidebarIcons'/>
                        Products
                    </li>
                    <li className="sidebarListItems">
                        <AttachMoney className='sidebarIcons'/>
                        Transactions
                    </li>
                    <li className="sidebarListItems">
                        <Assessment className='sidebarIcons'/>
                        Reports
                    </li>
                </ul>
            </div>
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Notifications</h3>
                <ul className="sidebarlist">
                    <li className="sidebarListItems">
                        <Email className='sidebarIcons'/>
                        Mail
                    </li>
                    <li className="sidebarListItems">
                        <DynamicFeed className='sidebarIcons'/>
                        Feedbacks
                    </li>
                    <li className="sidebarListItems">
                        <Forum className='sidebarIcons'/>
                        Messages
                    </li>
                </ul>
            </div>
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Staff</h3>
                <ul className="sidebarlist">
                    <li className="sidebarListItems">
                        <BusinessCenter className='sidebarIcons'/>
                        Manage
                    </li>
                    <li className="sidebarListItems">
                        <Timeline className='sidebarIcons'/>
                        Analytics
                    </li>
                    <li className="sidebarListItems">
                        <Report className='sidebarIcons'/>
                        Reports
                    </li>
                </ul>
            </div>
            </div>            
        </div>
    )
}
