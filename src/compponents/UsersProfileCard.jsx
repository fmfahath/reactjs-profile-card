import React from 'react'
import './UsersProfileCard.style.css';
import profileImg from '../assets/profile.jpg'

const UserProfileCard = () => {
    return (
        <div className='upc'>
            <div className="gradiant">

            </div>
            <div className="profile-down">
                <img src={profileImg} alt="" width={'200px'} height={'180px'} />
                <div className="profile-title">

                </div>
                <div className="profile-description">

                </div>
                <div className="profile-button">
                    <a href="mailto:someone@gmail.com">Contact Me</a>
                </div>
            </div>
        </div>
    )
}

export default UserProfileCard;