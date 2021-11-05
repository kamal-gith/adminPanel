import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish } from '@material-ui/icons'
import { Link } from 'react-router-dom'
import './user.css'

export default function User() {
    return (
        <div className='user'>
            <div className="userTitelContainer">
                <h1 className="userTitle">Edit User</h1>
                <Link to='/newUser'>
                    <button className="userAddButton">Create</button>
                </Link>
            </div>
            <div className="userContainer">
                <div className="userShow">
                    <div className="userShowTop">
                        <img src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2$w=500" alt="" className="userShowImage" />
                    <div className="userShowTopTitle">
                        <span className="userShowUsername">Kamal Idris</span>
                        <span className="userShowUserTitle">Web Developer</span>
                    </div>
                    </div>
                    <div className="userShowBottom">
                        <span className="userShowTitle">Account Details</span>
                       <div className="userShowInfo">
                        <PermIdentity className='userShowIcon'/>
                        <span className="userShowInfoTitle">Kamal001</span>
                       </div>
                       <div className="userShowInfo">
                        <CalendarToday className='userShowIcon'/>
                        <span className="userShowInfoTitle">3.11.2021</span>
                       </div>
                       <span className="userShowTitle">Contact Details</span>
                       <div className="userShowInfo">
                        <PhoneAndroid className='userShowIcon'/>
                        <span className="userShowInfoTitle">+234 80 3456 7890</span>
                       </div>
                       <div className="userShowInfo">
                        <MailOutline className='userShowIcon'/>
                        <span className="userShowInfoTitle">Kamal001@gmail.com</span>
                       </div>
                       <div className="userShowInfo">
                        <LocationSearching className='userShowIcon'/>
                        <span className="userShowInfoTitle">Kaduna | Nigeria</span>
                       </div>
                    </div>
                </div>

                <div className="userUpdate">
                    <span className="userUpdateTitle">Edit</span>
                    <form action="#" className="userUpdateForm">
                        <div className="userUpdateLeft">
                            <div className="userUpdateItem">
                                <label htmlFor="#">Username</label>
                                <input type="text" placeholder='Enter Username' className='userUpdateInput'/>
                            </div>
                            <div className="userUpdateItem">
                                <label htmlFor="#">Full Name</label>
                                <input type="text" placeholder='Enter Full Name' className='userUpdateInput'/>
                            </div>
                            <div className="userUpdateItem">
                                <label htmlFor="#">Email</label>
                                <input type="text" placeholder='Enter Email' className='userUpdateInput'/>
                            </div>
                            <div className="userUpdateItem">
                                <label htmlFor="#">Phone</label>
                                <input type="text" placeholder='Enter Phone Number' className='userUpdateInput'/>
                            </div>
                            <div className="userUpdateItem">
                                <label htmlFor="#">Address</label>
                                <input type="text" placeholder='Enter Address' className='userUpdateInput'/>
                            </div>
                            <div className="userUpdateItem">
                                <label htmlFor="#">Username</label>
                                <input type="text" placeholder='Enter Username' className='userUpdateInput'/>
                            </div>
                        </div>
                        <div className="userUpdateRight">
                            <div className="userUpdateUpload">
                                <img src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2$w=500" alt="" className="userUpdateImage" />
                                <label htmlFor="file"><Publish className='userUpdateIcon'/></label>
                                <input type="file" id='file' style={{display: 'none'}} />

                            </div>
                            <button className="userUpdateButton">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
