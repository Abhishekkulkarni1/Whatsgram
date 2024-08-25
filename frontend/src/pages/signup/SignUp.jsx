import React, { useState } from 'react'
import PasswordInput from '../../components/passwordInput/PasswordInput'
import { Link, useNavigate } from 'react-router-dom'
import Gender from './Gender'
import useSignup from '../../hooks/useSignup'

const SignUp = () => {
    const [inputs, setInputs] = useState({
		fullName: "",
		username: "",
		password: "",
		confirmPassword: "",
		gender: "",
	});

    const {loading, signup} = useSignup()
    // const navigate = useNavigate();

    const handleSubmit = async (e) => {
		e.preventDefault();
		// const result = 
        await signup(inputs);
        // if (result) {
        //     navigate('/home'); 
        // }
        // console.log(inputs)
	};

    const handleCheckboxChange = (gender) => {
		setInputs({ ...inputs, gender });
	};

  return (
    <>
        <div className='flex items-center justify-center mt-28'>
            <div className='w-96 border rounded px-7 py-10'>
                <form onSubmit={handleSubmit}>
                    <h4 className='text-2xl mb-7 items-center justify-center flex'>SignUp 
                        <span className='text-blue-600'>    WhatsGram</span>
                    </h4>
                    <input type = "text" placeholder='Name' className='input-box' value={inputs.fullName} onChange={(e) => setInputs({...inputs, fullName: e.target.value})}/>
                    <input type = "text" placeholder='Username' className='input-box' value={inputs.username} onChange={(e) => setInputs({...inputs, username: e.target.value})}/>
                    <PasswordInput type = "text" placeholder='Password' className='input-box1' value={inputs.password} onChange={(e) => setInputs({...inputs, password: e.target.value})}/>
                    <PasswordInput type = "text" placeholder='Confirm Password' className='input-box' value={inputs.confirmPassword} onChange={(e) => setInputs({...inputs, confirmPassword: e.target.value})}/>
                    <Gender onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender} />
                    <button type='submit' className='btn-primary' disabled={loading}>
                        SignUp
                    </button>
                   
                    <p className='text-sm text-center mt-4'>
                        Already Registered, Click here {" "}
                        <Link to = "/" className='font-medium text-primary underline'>
                            Login
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    </>
  )
}

export default SignUp