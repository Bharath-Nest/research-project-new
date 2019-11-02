import React, {Component} from 'react';
import ProfilePic from '../ProfilePic';

class Sidebar extends Component {
    render() {
        return (
            <div className="sidebar_bg">
                <ProfilePic/>
            </div>
        )
    }
}

export default Sidebar;