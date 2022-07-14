import React from 'react';
import '../styles/Chat.css';
import {ProfileIcon} from '../components/ProfileIcon';
export const Chat=({user,avatar})=>{
    return(
        <article className="chat-container">
            <ProfileIcon image={avatar} size={'small'} status={`${user.status}`}/>
            <section className='chat-content'>
                <p className='chat-name'>{user.name}</p>
                <div className="chat-message">
                    <p className='chat-message--text'>{user.message}</p>
                    <p className='chat-message--time'><small>{user.createdAt}</small></p>
                </div>
            </section>
        </article>
    );
}