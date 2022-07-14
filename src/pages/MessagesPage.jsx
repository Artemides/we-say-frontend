import React from 'react';
import { Messages } from '../containers/Messages';
import { MessagesHeader } from '../containers/MessagesHeader';
import { MessagesSender } from '../containers/MessagesSender';
import '../styles/MessagePageContainer.css'
export const MessagesPage=()=>{
    const user={
        id:1,
        name: "John Doe",
    }
    return(
        <section className="messages-page--container">
            <MessagesHeader user={user}/>
            <Messages />
            <MessagesSender/>
        </section>
    )
};