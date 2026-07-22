import React, { useContext, useState } from 'react'
import assets from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext';

const ProfilePage = () => {

	const {authUser, updateProfile} = useContext(AuthContext)

	const [selectedImg, setSelectedImg] = useState(null)
	const navigate = useNavigate();
	const [name, setName] = useState(authUser.fullName)
	const [bio, setBio] = useState(authUser.bio)

	const handleSubmit = async(e)=>{
		e.preventDefault();
		if(!selectedImg) {
			await updateProfile({fullName: name, bio});
			navigate('/');
			return;
		}

		const reader = new FileReader();
		reader.readAsDataURL(selectedImg);
		reader.onload = async ()=>	{
			const base64Image = reader.result;
			await updateProfile({profilePic: base64Image, fullName: name, bio})
			navigate('/');
		}
	}

	return (
		<div className = 'min-h-screen bg-background flex items-center
		justify-center p-6' >
			<div className = 'w-full max-w-3xl
					bg-panel
					border
					border-border
					rounded-xl
					flex items-center justify-between
					max-sm:flex-col-reverse
					overflow-hidden'>
				<form onSubmit = {handleSubmit} className = 'flex flex-col gap-5 p-5 flex-1' >
					<h3 className = 'text-2xl font-semibold text-text-primary tracking-tight' >Profile details</h3>
					<label htmlFor = "avatar" className = 'flex items-center gap-3
						cursor-pointer' >
						<input onChange={(e)=>setSelectedImg(e.target.files[0])} 
							type="file" id = 'avatar' accept = '.png, .jpg, .jpeg' hidden />
						<img src={selectedImg ? URL.createObjectURL(selectedImg) : 
								authUser?.profilePic || assets.avatar_icon}
						 alt="" className = {`w-12 h-12 rounded-full
							shadow-glow`} />
							<div className="flex flex-col">
								<span className="font-medium">
									Upload profile image
								</span>
								<span className="text-xs text-text-muted">
									PNG, JPG or JPEG
								</span>
							</div>
					</label>
					<input onChange={(e)=>setName(e.target.value)} value={name} 
						type="text" required placeholder='Your name' className='w-full px-4
						py-3 bg-surface border border-border rounded-lg text-text-primary
						placeholder:text-text-muted focus:border-accent focus:outline-none' />
						<textarea onChange={(e)=>setBio(e.target.value)} value={bio}
							placeholder="Write profile bio" required className = 'w-full px-4
							py-3 bg-surface border border-border rounded-lg text-text-primary
							placeholder:text-text-muted focus:border-accent focus:outline-none
							resize-none' rows={4}>	
						</textarea>

						<button type="submit" className= 'py-3 rounded-lg bg-accent hover:bg-accentHover
							text-background font-semibold transition-colors'>Save
						</button>

				</form>
				<img className = {`max-w-52 aspect-square rounded-full mx-8 max-sm:mt-10 ${selectedImg && 'rounded-full'}`} 
					src = {authUser?.profilePic || assets.vibechat_icon} alt = "" />
			</div>
		</div>
	)
}

export default ProfilePage