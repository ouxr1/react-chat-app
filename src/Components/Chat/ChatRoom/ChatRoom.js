import {InputContainer,MessageContainer} from '../../../styled-components';
import './ChatRoom.css'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { useState,useRef,useEffect } from 'react';
import SignIn from '../../Log/SignIn'

firebase.initializeApp({
  apiKey: "AIzaSyD8XZ5EQKf9yCZL1UXeQK8yLhsOnXFTtLo",
  authDomain: "dwii-4e451.firebaseapp.com",
  projectId: "dwii-4e451",
  storageBucket: "dwii-4e451.appspot.com",
  messagingSenderId: "517728196754",
  appId: "1:517728196754:web:d5d244ff0d4bf9a806ee4b"

})

const auth = firebase.auth();
const firestore = firebase.firestore();


function ChatRoom() {
    const dummy= useRef()

    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState('');
  
    const messagesRef = firestore.collection('messages');
    const query = messagesRef.orderBy('createdAt');

    const unsubscribe = useRef(null);

    useEffect(() => {
      unsubscribe.current = query.onSnapshot((querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setMessages(data);
      });
  
      return () => {
        unsubscribe.current();
      };
    }, []);
  
    const sendMessage = async () => {

      const { uid, photoURL } = auth.currentUser;
       if (inputValue.trim() !== ''){
        await messagesRef.add({
          text:inputValue,
          createdAt:new Date(),
          uid,
          photoURL,
        })
      }
      
      setInputValue('');
       dummy.current.scrollIntoView({behavior: 'smooth'});
    };
  
    const handleInputChange = (event) => {
      setInputValue(event.target.value);
    };

    if (!auth.currentUser) {
      return <SignIn />;
    }
    
    return (
      <div className='chat'>
        <main>
        {messages.map((message) => (
          <MessageContainer  key={message.id}>
            <img src={message.photoURL} alt={message.uid} />
            <p>{message.text}</p>
          </MessageContainer>
        ))}
        <div ref={dummy}></div>
        </main>
        <InputContainer>
        <input value={inputValue} onChange={handleInputChange} placeholder="دوي على راسك"/>
        <button onClick={sendMessage}>🕊</button>
        
        </InputContainer>

        </div>
    );
  }
export default ChatRoom