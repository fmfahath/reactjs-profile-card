import React from 'react'
import './UsersProfileCard.style.css';
import profileImg1 from '../assets/profile1.jpg'
import profileImg2 from '../assets/profile2.jpg'
import profileImg3 from '../assets/profile3.jpg'


const UserProfileCard = () => {

    const profileCard = {
        profiles: [
            {
                name: "Raswika",
                image: profileImg1,
            },
            {
                name: "Anith Kumar",
                image: profileImg2,
            },
            {
                name: "Asanga Peris",
                image: profileImg3,
            },
        ]
    }


    return (
        <>
            {profileCard.profiles.map((profile) => (
                <div className='upc'>
                    <div className="gradiant">

                    </div>
                    <div className="profile-down">

                        <img src={profile.image} alt="" />
                        <div className="profile-title">{profile.name}</div>
                        <div className="profile-description">
                            I'm the founder & cheif executive officer of ShareX startup
                        </div>
                        <div className="profile-button">
                            <a href="mailto:someone@gmail.com">Contact Me</a>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )

}

export default UserProfileCard;