import {ChatContainer,ChatBody,lightTheme, darkTheme } from './styled-components';
import './App.css'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { useState} from 'react';
import {useAuthState} from 'react-firebase-hooks/auth';

import SignIn from './Components/Log/SignIn'
import SignOut from './Components/Log/SignOut';
import ChatRoom from './Components/Chat/ChatRoom/ChatRoom';

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

function App() {
  const [user] = useAuthState(auth);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prevState) => !prevState);
  };

  console.log('isDarkMode:', isDarkMode);

  return (
    <ChatContainer theme={isDarkMode ? darkTheme : lightTheme}>

      <label className="switch">
        <input type="checkbox" onChange={toggleTheme} checked={isDarkMode} />
        <span className="slider round"></span>
      </label>
      
      <ChatBody>
        <header className="App-header">
          <SignOut />
        </header>
        <section>{user ? <ChatRoom /> : <SignIn />}</section>
      </ChatBody>
    </ChatContainer>
  );
}
export default App;

// function SignIn() {
//   const signInWithGoogle = () =>{
//       const provider = new firebase.auth.GoogleAuthProvider();
//       auth.signInWithPopup(provider);
//   }
// return (
//   <button className='whatsapp-button' onClick={signInWithGoogle}> in</button>
// )
// }


// function SignOut() {
//   return auth.currentUser &&<button className='whatsapp-button' onClick={()=> auth.signOut()}>Out</button>
//   }
  



  // function ChatRoom() {
  //   const dummy= useRef()

  //   const [messages, setMessages] = useState([]);
  //   const [inputValue, setInputValue] = useState('');
    // const [image, setImage] = useState(null)
  
    // const messagesRef = firestore.collection('messages');
    // const imageCollectionRef = firebase.firestore().collection('images');
    // const query = messagesRef.orderBy('createdAt');

    // const unsubscribe = useRef(null);

    // useEffect(() => {
      // unsubscribe.current = query.onSnapshot((querySnapshot) => {
        // const data = querySnapshot.docs.map((doc) => ({
          // ...doc.data(),
          // id: doc.id,
        // }));
        // setMessages(data);
      // });
  
      // return () => {
        // unsubscribe.current();
      // };
    // }, []);
  
    // const sendMessage = async () => {
      // if (!inputValue.trim()) return;
      // const { uid, photoURL } = auth.currentUser;

      // if(image){
      //   const strongeRef = firebase.storage().ref();
      //   const imageRef = strongeRef.child(image.name)
      //   await imageRef.put(image);
      //   const imageURL = await imageRef.getDownloadURL();

      //   await messagesRef.add({
      //     imageURL,
      //     createdAt:new Date(),
      //     uid,
      //     photoURL,
      //   })

      //   setImage(null);

      // }else
      //  if (inputValue.trim() !== ''){
        // await messagesRef.add({
          // text:inputValue,
          // createdAt:new Date(),
          // uid,
          // photoURL,
        // })
      // }
      
      // setInputValue('');
      //  dummy.current.scrollIntoView({behavior: 'smooth'});
    // };
  
    // const handleInputChange = (event) => {
      // setInputValue(event.target.value);
    // };
    // const handleFileInputChange = (event) => {
    //   const file = event.target.files[0];
    //   setImage(file);
    // };

    // if (!auth.currentUser) {
      // return <SignIn />;
    // }
    
    // return (
      // <>
        {/* <main> */}
        // {messages.map((message) => (
          // <MessageContainer  key={message.id}>
            // <img src={message.photoURL} alt={message.uid} />
            // <p>{message.text}</p>
          // </MessageContainer>
        // ))}
        // <div ref={dummy}></div>
        // </main>
        // <InputContainer>
        // <input value={inputValue} onChange={handleInputChange} placeholder="دوي على راسك"/>
        {/* <label htmlFor='file-input'>
          <span>choose a file</span>
          <input id='file-input' type="file" onChange={handleFileInputChange}></input>
        </label> */}
        // <button onClick={sendMessage}>🕊</button>
        
        // </InputContainer>

        // </>
    // );
  // }


  // function ChatMessage(props){
 
  //   const { message } = props;
  //   const isSent = message.uid === auth.currentUser.uid;
  //   return (
  //     <div className={isSent ? 'message-sent' : 'message-received'}>
  //     {message.photoURL && <img src={message.photoURL} alt={message.displayName} />}
  //     {/* {message.imageUrl && <img src={message.imageUrl} alt={message.displayName} />} */}
  //     <p>{message.text}</p>
  //   </div>
  //   )
    
  // }

