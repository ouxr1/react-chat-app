import React from 'react'

function Search() {
  return (
    <div className='search'>
      <div className='searchForm'>
        <input type={text} placeholder='find a user'/>
      </div>
      <div className='userChat'>
        <img src='https://www.freepik.com/free-photo/smiling-doctor-with-strethoscope-isolated-grey_26673614.htm#&position=17&from_view=popular' alt=''/>
        <div className='userChatInfo'>
          <span>daniah</span>
        </div>
      </div>
    </div>
  )
}

export default Search