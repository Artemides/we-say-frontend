import React from "react";
import moment from "moment";
import 'moment/locale/es';
import '../styles/Message.css';
import { useAuth } from "../hooks/useAuth";
moment.locale('es');
export const Message = ({message}) => {
  const auth=useAuth();
  return (
    <div className={`message-container ${message.user==auth.currentUser ? 'my-message': 'other-message'}`}>
      <div className="message-header">
        <h5>{moment(message.createdAt).format('LT')}</h5>
      </div>
      <div className="message-body">
        <p>
          {message.text}
        </p>
      </div>
    </div>
  );
};
