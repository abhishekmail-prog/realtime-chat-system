import React from 'react'
import assets, { imagesDummyData } from '../assets/assets'

const RightSidebar = ({selectedUser}) => {
	return selectedUser && (
		<div className = {`bg-panel text-text-primary border-l border-border w-full relative overflow-y-auto ${selectedUser ? 
						"max-md:hidden": ""} `}>
			<div className = {`pt-10 flex flex-col items-center gap-3 text-xs font-light mx-auto`} >
				<img src = {selectedUser?.profilePic || assets.avatar_icon} alt=""
				className = 'w-20 aspect-[1/1] rounded-full shadow-glow' />
				<h1 className = 'px-10 text-lg font-semibold mx-auto flex items-center
					gap-3' >
					<p className = 'w-2 h-2 rounded-full bg-accent
						shadow-glow' ></p>
					{selectedUser.fullName}
				</h1>
				<p className = 'px-8 text-center leading-6 text-text-secondary' >{selectedUser.bio}</p>
			</div>

			<hr className = 'border-border my-4' />
			
			<div className = 'px-6 mt-6 text-xs'>
				<p className = 'text-text-primary font-medium'>Media</p>
				<div className = 'mt-2 max-h-[200px] overflow-y-scroll grid grid-cols-2
								  gap-4' >
					{imagesDummyData.map((url, index)=>(
						<div key ={index} onClick = {()=> window.open(url)} 
						className = 'cursor-pointer rounded-lg overflow-hidden hover:opacity-90 transition-all duration-200'>
							<img src={url} alt = "" className = 'h-full rounded-md' /> 
							
						</div>
					))}		
				</div>
			</div>

			<button className='mt-8 mx-auto block w-[85%]
				py-3 rounded-lg bg-surface
				border border-border
				text-text-primary font-medium
				hover:bg-elevated transition-colors'>
    			Logout
			</button>
		</div>
	)
}

export default RightSidebar