import React, { useState } from 'react'
import assets from '../assets/assets'

const LoginPage = () => {

	const [currState, setCurrState] = useState("Sign up")
	const [fullName, setFullName] = useState("")
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [bio, setBio] = useState("")
	const [isDataSubmitted, setIsDataSubmitted] = useState(false)

	const onSubmitHandler = (event)=>{
		event.preventDefault();

		if(currState == 'Sign up' && !isDataSubmitted) {
			setIsDataSubmitted(true)
			return;	
		}
	}	

	return (
		<div className='min-h-screen flex items-center justify-center gap-8 
			sm:justify-evenly max-sm:flex-col bg-[#0D0916]'>
			{/*---- left ----*/}
			<img src = {assets.vibechat_icon} alt = "" className = 'w-[min(30vw,250px)]' />
			{/*---- right ----*/}

			<form onSubmit={onSubmitHandler} className='border-2 bg-[#181224] text-[#F5F3FF] border-[#2A1F3D] p-6 flex flex-col	 
				gap-6 rounded-lg shadow-[0_0_40px_rgba(168,85,247,0.15)] z-50 relative'>
			    <h2 className = 'font-medium text-2xl flex justify-between items-center' >
			    	{currState}
			    	{isDataSubmitted &&  <img onClick = {()=> setIsDataSubmitted(false)} src = {assets.arrow_icon} 
			    		alt="" className = 'w-5 cursor-pointer' />
			    	}	
			    </h2>
			    {currState === "Sign up" && !isDataSubmitted && (
			    	<input  onChange={(e)=>setFullName(e.target.value)} value = {fullName}
			    	 type = "text" className = 'p-2 border border-[#2A1F3D] rounded-md bg-transparent text-white 
			    		focus:outline-none focus:ring-2 focus:ring-[#A855F7]' placeholder="Full Name" required />	
			    )}

			    {!isDataSubmitted && (
			    	<>
			    	<input onChange={(e)=>setEmail(e.target.value)} value = {email} 
			    		type = "email" placeholder = 'Email Address' required 
			    		className = 'p-2 border border-[#2A1F3D] rounded-md bg-transparent text-white 
			    		focus:outline-none focus:ring-2 focus:ring-[#A855F7]'/>

			    	<input onChange={(e)=>setPassword(e.target.value)} value = {password} 
			    		type = "password" placeholder = 'Password' required 
			    		className = 'p-2 border border-[#2A1F3D] rounded-md bg-transparent text-white 
			    		focus:outline-none focus:ring-2 focus:ring-[#A855F7]'/>
			    	</>
			    )}

			    {currState === "Sign up" && isDataSubmitted && (
			    		<textarea onChange={(e)=>setBio(e.target.value)} value= {bio}
			    			rows={4} className = 'p-2 border-[#2A1F3D] rounded-md bg-transparent text-[#A855F7]
			    			focus:outline-none focus:ring-2 focus:ring-[#A855F7]' 
			    			placeholder = 'provide a short bio...'
			    			required >
			    		</textarea>
			    	)
			    }

			    <button type = 'submit' className = 'py-3 bg-gradient-to-r from-[#A855F7] to-[#7E22CE]
			    	text-white rounded-md cursor-pointer' >
			    	{currState === "Sign up" ? "Create Account" : "Login Now"}
			    </button>

			    <div className = 'flex items-center gap-2 text-sm text-[#B8AFCF]' >
			    	<input type = "checkbox" />
			    	<p>Agree to the terms of use & privacy policy.</p>
			    </div>

			    <div className = 'flex flex-col gap-2' >
			    	{currState === "Sign up" ? (
			    		<p className = 'text-sm text-[#B8AFCF]' >Already have an account? 
			    			<span onClick= {()=>{setCurrState("Login"); setIsDataSubmitted(false)}} 
			    				className = 'font-medium text-[#D8B4FE] cursor-pointer' >Login here</span>
			    		</p>
			    	) : (
			    		<p className = 'text-sm text-[#B8AFCF]'>Create an account.
			    			<span onClick = {()=>{setCurrState("Sign up")}} 
			    				className = 'font-medium text-[#D8B4FE] cursor-pointer'>Click here</span>
			    		</p>
			    	)}
			    </div>

			</form>		
		</div>
	)
}

export default LoginPage