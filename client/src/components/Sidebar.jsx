import React, { useContext } from 'react'
import assets, { userDummyData } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'

const Sidebar = ({ selectedUser, setSelectedUser }) => {
 
  const {logout} = useContext(AuthContext)

  const navigate = useNavigate()

  return (
    <div className={`bg-panel border-r border-border h-full
     p-6 rounded-r-xl overflow-y-auto text-text-primary ${selectedUser ? 'max-md:hidden' : ''}`}
    >
      <div className="pb-5">
        <div className="flex justify-between items-center">
          <img src={assets.vibechat_logo} alt="Vibe Chat" className="max-w-36"/>

          <div className="relative py-2 group">
            <img src={assets.menu_icon} alt="Menu" className="max-h-5 cursor-pointer"/>

            <div className="absolute top-full right-0 z-20 w-32 p-5 rounded-lg bg-elevated 
              border border-border text-text-primary hidden group-hover:block">
              <p onClick={() => navigate('/profile')} className="cursor-pointer 
                text-sm hover:text-primary transition-colors">
                Edit Profile
              </p>
              <hr className="my-2 border-t border-border" />
              <p onClick={()=> logout()} 
                className="cursor-pointer text-sm hover:text-primary transition-colors">
                Logout
              </p>
            </div>
          </div>
        </div>

        <div className = 'bg-surface rounded-lg flex items-center gap-3 py-3 px-4 mt-6 border border-border
              focus-within:border-accent'>
          <img src = {assets.search_icon} alt = "Search" className = 'w-4 opacity-60' />
          <input type = "text" className = 'bg-transparent border-none outline-none text-text-primary text-sm
                          placeholder:text-text-muted flex-1' placeholder='Search User...'/>
        </div>

      </div>

      <div className = 'flex flex-col gap-1 mt-2'>
        {userDummyData.map((user, index)=> (
            <div onClick = {()=> {setSelectedUser(user)}}
              key ={index} className = {`relative flex items-center gap-2 
              px-4 py-3 pl-4 rounded-lg cursor-pointer hover:bg-elevated 
              transition-all duration-200 max-sm:text-sm ${selectedUser?._id == user._id && 
              'bg-elevated border border-accent/40 shadow-glow'}`}>
              <img src = {user?.profilePic || assets.avatar_icon} alt = ""
              className = 'w-[35px] aspect-[1/1] rounded-full' />
              <div className = 'flex flex-col leading-5'>
                <p className='font-medium text-sm'>{user.fullName}</p>
                {
                  index < 3
                  ? <span className = 'text-accent text-xs'>Online</span>
                  : <span className = 'text-text-muted text-xs'>Offline</span>
                }
              </div>
              {index > 2 && <p className = 'absolute top-4 right-4 text-xs h-5 w-5 
                                flex justify-center items-center rounded-full bg-primary
                                text-accent'>{index}</p>}
            </div>
          ))}
      </div>

    </div>
  )
}

export default Sidebar