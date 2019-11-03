import React from 'react';

const ProfilePic = ({src, className}) => {
    return (
        <div>
            <img src={src} className={className} alt="profile-icon" />
        </div>
    )
}

export default ProfilePic;