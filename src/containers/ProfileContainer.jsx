import React from 'react';
import { ProfileIcon } from '../components/ProfileIcon';
import defaultIcon from '../assets/images/default.png';
import '../styles/ProfileContainer.css';
export const ProfileContainer=({user})=>{
    return(
        <section className="user-container">
            <ProfileIcon image={user.avatar?? defaultIcon} size='large' status='offline'/>
            <p><small>{user.name}</small></p>
        </section>
    )
}