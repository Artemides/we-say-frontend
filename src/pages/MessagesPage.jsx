import React from 'react';
import {useLocation} from 'react-router-dom';
import { Messages } from '../containers/Messages';
import { MessagesHeader } from '../containers/MessagesHeader';
import { MessagesSender } from '../containers/MessagesSender';
import '../styles/MessagePageContainer.css'
export const MessagesPage=()=>{
    const location=useLocation();   
    const {user,avatar,status}=location.state;
    return(
        <section className="messages-page--container">
            <MessagesHeader user={user} avatar={avatar} status={status}/>
            <Messages />
            <MessagesSender user={user}/>
        </section>
    )
};