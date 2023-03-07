import React from 'react'

function Nav() {
  return (
    <div className='navbar'>
      <span className='logo'>Ouxr chat</span>
      <div className='user'>
        <img src='https://www.freepik.com/free-photo/smiling-doctor-with-strethoscope-isolated-grey_26673614.htm#&position=17&from_view=popular' alt=''/>
        <span>oussama</span>
        <button>logout</button>
      </div>
    </div>
  )
}

export default Nav