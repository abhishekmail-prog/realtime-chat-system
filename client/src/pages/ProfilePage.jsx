import React, { useState } from 'react'
import assets from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const ProfilePage = () => {

	const [selectedImg, setSelectedImg] = useState(null)
	const navigate = useNavigate();
	const [name, setName] = useState("Martin Johnson")
	const [bio, setBio] = useState("Hi Everyone, I am using VibeChat")

	const handleSubmit = async(e)=>{
		e.preventDefault();
		navigate('/')		
	}

	return (
		<div className = 'min-h-screen bg-[#0D0916] flex items-center
		justify-center' >
			<div className = 'w-5/6 max-w-2xl
					bg-[#181224]
					backdrop-blur-2xl
					text-[#F5F3FF]
					border-2 border-[#2A1F3D]
					shadow-[0_0_40px_rgba(168,85,247,0.12)]
					flex items-center justify-between
					max-sm:flex-col-reverse
					rounded-lg'>
				<form onSubmit = {handleSubmit} className = 'flex flex-col gap-5 p-10 flex-1' >
					<h3 className = 'text-xl font-semibold text-[#F5F3FF]' >Profile details</h3>
					<label htmlFor = "avatar" className = 'flex items-center gap-3
						cursor-pointer' >
						<input onChange={(e)=>setSelectedImg(e.target.files[0])} 
							type="file" id = 'avatar' accept = '.png, .jpg. jpeg' hidden />
						<img src={selectedImg ? URL.createObjectURL(selectedImg) : 
						assets.avatar_icon} alt="" className = {`w-12 h-12 rounded-full
							shadow-[0_0_15px_rgba(168,85,247,0.25)]`} />
							upload profile image
					</label>
					<input onChange={(e)=>setName(e.target.value)} value={name} 
						type="text" required placeholder='Your name' className='p-2 bg-transparent border
						border-[#2A1F3D] rounded-md focus:outline-none focus:ring-2
						focus:ring-[#A855F7]' />
						<textarea onChange={(e)=>setBio(e.target.value)} value={bio}
							placeholder="Write profile bio" required className = 'p-2 text-black
							border border-[#2A1F3D] rounded-md focus:outline-none focus:ring-2
							focus:ring-violet-500 ' rows={4}>	
						</textarea>

						<button type="submit" className= 'bg-gradient-to-r from-purple-400 to-violet-600
							text-white p-2 rounded-full text-lg cursor-pointer'>Save
						</button>

				</form>
				<img className = 'max-w-44 aspect-square rounded-full mx-10 max-sm:mt-10' 
					src = {assets.vibechat_icon} alt = "" />
			</div>
		</div>
	)
}

export default ProfilePage