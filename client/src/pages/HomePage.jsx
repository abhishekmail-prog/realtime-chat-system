import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import ChatContainer from '../components/ChatContainer'
import RightSidebar from '../components/RightSidebar'

const HomePage = () => {

  const [selectedUser, setSelectedUser] = useState(false)

  return (
    <div className='w-full h-screen sm:px-[15%] sm:py-[5%] bg-gradient-to-br from-[#0D0916] 
      via-[#120C1E]to-[#0D0916]'>
      <div className={`bg-[#181224] backdrop-blur-xl border-2 border-[#2A1F3D]
                       shadow-[0_0_60px_rgba(168,85,247,0.12)] rounded-2xl
                       overflow-hidden h-full grid grid-cols-1 relative ${
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