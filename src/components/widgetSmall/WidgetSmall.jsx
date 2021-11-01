import './widgetSmall.css'
import image from './kml.jpeg'
import { Visibility } from '@material-ui/icons'

export default function WidgetSmall() {
    return (
        <div className='widgetSmall'>
            <span className="widgetSmallTitle">New Members</span>
            <ul className="widgetSmallList">
                <li className="widgetSmallListItems">
                    <img src={image} alt="" className="widgetSmallImage" />
                    <div className="widgetSmallUser">
                        <span className="widgetSmallUserName">Kamal Idris</span>
                        <span className="widgetSmallUserTitle">Software Developer</span>
                    </div>
                    <button className="widgetSmallButton">
                        <Visibility className='widgetSmallIcon'/> Display
                    </button>
                </li>
                <li className="widgetSmallListItems">
                    <img src={image} alt="" className="widgetSmallImage" />
                    <div className="widgetSmallUser">
                        <span className="widgetSmallUserName">Kamal Idris</span>
                        <span className="widgetSmallUserTitle">Software Developer</span>
                    </div>
                    <button className="widgetSmallButton">
                        <Visibility className='widgetSmallIcon'/> Display
                    </button>
                </li>
                <li className="widgetSmallListItems">
                    <img src={image} alt="" className="widgetSmallImage" />
                    <div className="widgetSmallUser">
                        <span className="widgetSmallUserName">Kamal Idris</span>
                        <span className="widgetSmallUserTitle">Software Developer</span>
                    </div>
                    <button className="widgetSmallButton">
                        <Visibility className='widgetSmallIcon'/> Display
                    </button>
                </li>
                <li className="widgetSmallListItems">
                    <img src={image} alt="" className="widgetSmallImage" />
                    <div className="widgetSmallUser">
                        <span className="widgetSmallUserName">Kamal Idris</span>
                        <span className="widgetSmallUserTitle">Software Developer</span>
                    </div>
                    <button className="widgetSmallButton">
                        <Visibility className='widgetSmallIcon'/> Display
                    </button>
                </li>
                <li className="widgetSmallListItems">
                    <img src={image} alt="" className="widgetSmallImage" />
                    <div className="widgetSmallUser">
                        <span className="widgetSmallUserName">Kamal Idris</span>
                        <span className="widgetSmallUserTitle">Software Developer</span>
                    </div>
                    <button className="widgetSmallButton">
                        <Visibility className='widgetSmallIcon'/> Display
                    </button>
                </li>
            </ul>
            
        </div>
    )
}
