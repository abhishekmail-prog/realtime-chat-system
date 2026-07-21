import React, { useEffect, useRef } from 'react'
import assets, { messagesDummyData } from '../assets/assets'
import { formatMessageTime } from '../lib/utils'


const ChatContainer = ({selectedUser, setSelectedUser}) => {

	const scrollEnd = useRef()

	useEffect(()=> {
		if(scrollEnd.current) {
			scrollEnd.current.scrollIntoView({behavior: "smooth"})
		}
	},[])

	return selectedUser ?(
		<div className = 'h-full overflow-scroll relative bg-panel'>
			{/*---- header ----*/}
			<div className = 'flex items-center gap-3 py-3 mx-4 border-b border-border'>
				<img src= {assets.profile_martin} alt = "" className = "w-8 rounded-full" />
				<p className = 'flex-1 text-lg text-text-primary flex items-center gap-2'> 
					Martin Johnson
					<span className = "w-2 h-2 rounded-full bg-accent 
						shadow-glow"></span>
				</p>
				<img onClick = {()=> setSelectedUser(null)} src = {assets.arrow_icon} alt = "" 
					  className = 'md:hidden max-w-7' />
				<img src = {assets.help_icon} alt = "" className = 'max-md:hidden max-w-5' />
			</div>
			{/*---- chat area ----*/}
			<div className = 'flex flex-col h-[calc(100%_-_120px)] overflow-y-scroll px-6 py-4 pb-6'>
				{messagesDummyData.map((msg, index)=>(
					<div key = {index} className = {`flex items-end gap-2 justify-end 
					           ${msg.senderId !== '680f50e4f10f3ccd28382ecf9' && 'flex-row-reverse'}`}>
					     {msg.image ? (
					     	<img src = {msg.image} alt ="" className = 'max-w-[230px] border
					     		       border-border rounded-lg overflow-hidden mb-8'/>
					     ):(
					     	<p className = {`p-2 max-w-[200px] md:text-sm font-light
					     					 rounded-lg mb-8 break-all 
					     					 ${msg.senderId === '680f50e4f10f3ccd28382ecf9' ? 
					     					 'bg-elevated border border-accent/30  text-text-primary rounded-lg' : 
					     					 'bg-surface border border-border text-text-primary text-[#F5F3FF] rounded-lg'}`}>{msg.text}</p>
					     )}
					     <div className = "text-center text-xs">
					     	<img src = {msg.senderId === '680f50e4f10f3ccd28382ecf9' ? assets.avatar_icon :
					     				assets.profile_martin} alt = "" className= 'w-7 rounded-full' />
					     				<p className = 'text-text-muted'>{formatMessageTime(msg.createdAt)}</p>
					     </div>

					</div>
				))}
				<div ref = {scrollEnd} ></div>
			</div>

{/*---- bottom area ----*/}
		<div className = 'absolute bottom-0 left-0 right-0 flex items-center gap-3 p-3'>

			<div className='flex-1 flex items-center bg-surface backdrop-blur-md border border-border px-4 py-0.5 rounded-lg'>
  				<input type='text' placeholder='Type a message...' 
  					className='flex-1 bg-transparent text-sm p-3 outline-none text-text-primary placeholder-text-text-muted'/>

  				<input type='file' id='image' accept='image/png, image/jpeg' hidden />

  				<label htmlFor='image'>
    			<img src={assets.gallery_icon} alt='' className='w-5 mr-2 cursor-pointer opacity-70 hover:opacity-100'/>
		  		</label>
		  	</div>
			<img src = {assets.send_button} alt = "" className= "w-7 cursor-pointer" />
		</div>
		</div>
	) : (
		<div className = 'flex flex-col items-center justify-center gap-2 text-text-muted 
			              bg-panel max-md:hidden'>
			<img src = {assets.vibechat_icon} className='max-w-16' alt = "" />
			<p className = 'text-lg font-medium text-text-primary'>Chat anytime, anywhere</p>
		</div>
	)
}

export default ChatContainer