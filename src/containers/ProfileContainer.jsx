import React from 'react';
import { ProfileIcon } from '../components/ProfileIcon';
import '../styles/ProfileContainer.css';
export const ProfileContainer=({user})=>{
    return(
        <section className="user-container">
            <ProfileIcon image={`data:image/svg+xml;base64,${user.avatar}`} size='large' status='offline'/>
            <p><small>{user.name}</small></p>
        </section>
    )
}