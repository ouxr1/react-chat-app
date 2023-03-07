import React from 'react'
import ChatRoom from '../Components/Chat/ChatRoom/ChatRoom'
import SideBar from '../Components/SideBar/SideBar'

function Home() {
  return (
    <div className='home'>
        <div className='container'>
            <SideBar/>
            <ChatRoom/>
        </div>

    </div>
  )
}

export default Home