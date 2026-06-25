import React from 'react'
import assets, { imagesDummyData } from '../assets/assets'

const RightSidebar = ({selectedUser}) => {
	return selectedUser && (
		<div className = {`bg-[#181224]/10 text-white w-full relative overflow-y-scroll ${selectedUser ? 
						"max-md:hidden": ""} `}>
			<div className = {`pt-16 flex flex-col items-center gap-2 text-xs font-light mx-auto`} >
				<img src = {selectedUser?.profilePic || assets.avatar_icon} alt=""
				className = 'w-20 aspect-[1/1] rounded-full shadow-[0_0_20px_rgba(168,85,247,0.25)]' />
				<h1 className = 'px-10 text-xl font-medium mx-auto flex items-center
					gap-2' >
					<p className = 'w-2 h-2 rounded-full bg-[#22C55E]
						shadow-[0_0_8px_rgba(34,197,94,0.6)]' ></p>
					{selectedUser.fullName}
				</h1>
				<p className = 'px-10 mx-auto text-[#B8AFCF]' >{selectedUser.bio}</p>
			</div>

			<hr className = 'border-[#2A1F3D] my-4' />
			
			<div className = 'px-5 text-xs'>
				<p className = 'text-[#F5F3FF] font-medium'>Media</p>
				<div className = 'mt-2 max-h-[200px] overflow-y-scroll grid grid-cols-2
								  gap-4 opacity-80' >
					{imagesDummyData.map((url, index)=>(
						<div key ={index} onClick = {()=> window.open(url)} 
						className = 'cursor-pointer rounded hover:scale-105 transition-all duration-200'>
							<img src={url} alt = "" className = 'h-full rounded-md' /> 
							
						</div>
					))}		
				</div>
			</div>

			<button className='mt-6 ml-auto block bg-gradient-to-r
				from-[#A855F7]
				to-[#7E22CE]
				text-white border-none text-sm font-light
				py-2 px-20 rounded-full cursor-pointer
				hover:opacity-90 transition-all'>
    			Logout
			</button>
		</div>
	)
}

export default RightSidebar