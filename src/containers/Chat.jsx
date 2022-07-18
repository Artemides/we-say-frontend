import React, { useEffect,useRef } from 'react';
import {useNavigate} from 'react-router-dom';
import '../styles/Chat.css';
import {ProfileIcon} from '../components/ProfileIcon';
import moment from 'moment';
import 'moment/locale/es';
moment.locale('es');
export const Chat=({user,avatar,message,status,chatId})=>{
    const navigate=useNavigate();
    const handleToChat=()=>{
        navigate(`/messages/${chatId}`,{
           state:{
            user,
            avatar
           }
        });
    }
    return(
        <article 
            className="chat-container"
            onClick={()=>handleToChat()}
        >
            <ProfileIcon image={avatar} size={'small'} status={`${status}`}/>
            <section className='chat-content'>
                <p className='chat-name'>{user.name} - <small>{moment(message.createdAt).fromNow()}</small></p>
                <div className="chat-message">
                    <p className='chat-message--text'>{message.text}</p>
                    <p className='chat-message--time'>
                        <small>
                        {moment(message.createdAt).format('l')}
                        </small>
                    </p>
                </div>
            </section>
        </article>
    );
}