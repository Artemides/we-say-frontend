import React, { useEffect } from 'react';
import '../styles/Chat.css';
import {ProfileIcon} from '../components/ProfileIcon';
import moment from 'moment';
import 'moment/locale/es';
moment.locale('es');
export const Chat=({user,avatar,message,status})=>{
    useEffect(() => {
        const when=moment(message.createdAt).format('l');
        console.log(when);
    }, [])
    
    return(
        <article 
            className="chat-container"
            onClick={()=>console.log(user)}
        >
            <ProfileIcon image={avatar} size={'small'} status={`${status}`}/>
            <section className='chat-content'>
                <p className='chat-name'>{user.name}</p>
                <div className="chat-message">
                    <p className='chat-message--text'>{message.text}</p>
                    <p className='chat-message--time'>
                        <small>
                        {moment(message.createdAt).format('LT')}
                        </small>
                    </p>
                </div>
            </section>
        </article>
    );
}