import './Sign.css'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

firebase.initializeApp({
  apiKey: "AIzaSyD8XZ5EQKf9yCZL1UXeQK8yLhsOnXFTtLo",
  authDomain: "dwii-4e451.firebaseapp.com",
  projectId: "dwii-4e451",
  storageBucket: "dwii-4e451.appspot.com",
  messagingSenderId: "517728196754",
  appId: "1:517728196754:web:d5d244ff0d4bf9a806ee4b"

})

const auth = firebase.auth();


function SignOut() {
    return auth.currentUser &&<button className='whatsapp-button' onClick={()=> auth.signOut()}>Out</button>
    }

export default SignOut