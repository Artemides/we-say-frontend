import React from 'react';
import '../styles/Contact.css';
import {ProfileIcon} from '../components/ProfileIcon';
import avatar from '../assets/images/profile.webp';
export const Contact=()=>{
    return(
        <article className="contact-container">
            <ProfileIcon image={avatar} size={'small'} status='online'/>
            <section className='contact-content'>
                <p className='contact-name'>José Pérez</p>
                <div className="contact-message">
                    <p className='contact-message--text'>Hola amigo como te encuentras</p>
                    <p className='contact-message--time'><small>at 14:50</small></p>
                </div>
            </section>
        </article>
    );
}