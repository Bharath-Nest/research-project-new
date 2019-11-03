import React, {Component} from 'react';
import ProfilePic from '../ProfilePic';

class Sidebar extends Component {
    render() {
        return (
            <div className="sidebar_bg">
                <ProfilePic
                    src="https://images.pexels.com/photos/2896837/pexels-photo-2896837.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                    className="profile-pic"
                />
            </div>
        )
    }
}

export default Sidebar;