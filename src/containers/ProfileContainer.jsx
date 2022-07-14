import React from 'react';
import { ProfileIcon } from '../components/ProfileIcon';
import Avatar from '../assets/images/profile.webp';
import '../styles/ProfileContainer.css';
export const ProfileContainer=({user})=>{
    return(
        <section className="user-container">
            <ProfileIcon image={Avatar} size='large' status='offline'/>
            <p><small>{user.name}</small></p>
        </section>
    )
}