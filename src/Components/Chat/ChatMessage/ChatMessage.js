import './ChatMessage.css'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const auth = firebase.auth();

function ChatMessage(props){
 
    const { message } = props;
    const isSent = message.uid === auth.currentUser.uid;
    return (
      <div className={isSent ? 'message-sent' : 'message-received'}>
      {message.photoURL && <img src={message.photoURL} alt={message.displayName} />}
      <p>{message.text}</p>
    </div>
    )
    
  }

export default ChatMessage