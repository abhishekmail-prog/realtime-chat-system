import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import ChatContainer from '../components/ChatContainer'
import RightSidebar from '../components/RightSidebar'

const HomePage = () => {

  const [selectedUser, setSelectedUser] = useState(false)

  return (
    <div className='w-full h-screen p-4 sm:p-6 lg:p-8 bg-background'>
      <div className={`h-full bg-panel border border-border
                       shadow-soft rounded-xl
                       overflow-hidden grid grid-cols-1 relative ${
                       selectedUser
                       ? 'md:grid-cols-[1fr_1.5fr_1fr] xl:grid-cols-[1fr_2fr_1fr]'
                       : 'md:grid-cols-2'
        }`}
      >
        <Sidebar selectedUser = {selectedUser} setSelectedUser = {setSelectedUser}/>
        <ChatContainer selectedUser = {selectedUser} setSelectedUser = {setSelectedUser}/>
        <RightSidebar selectedUser = {selectedUser} setSelectedUser = {setSelectedUser}/>
      </div>
    </div>
  )
}

export default HomePage