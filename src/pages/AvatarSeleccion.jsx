import React from 'react'
import {ProfileIcon} from '../components/ProfileIcon';
import Avatar from '../assets/images/profile.webp';
import '../styles/AvatarSeleccion.css';
const AvatarSeleccion = () => {
  return (
    <section className="avatar-selection--container">
        <h3>We Say</h3>
        <article className="avatar-selection--body">
            <h4>Avatar</h4>
            <div className="avatar-selection--choose">
                <ProfileIcon image={Avatar} size='small' status='offline'/>
                <ProfileIcon image={Avatar} size='small' status='offline'/>
                <ProfileIcon image={Avatar} size='small' status='offline'/>
                <ProfileIcon image={Avatar} size='small' status='offline'/>
            </div>
        </article>
        <a className='avatar-selection--finalize' href="#">Finalize</a>
    </section>
  )
}

export default AvatarSeleccion