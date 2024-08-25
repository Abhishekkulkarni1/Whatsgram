import React, { useState }  from 'react'
import { Link, useNavigate } from 'react-router-dom'
import PasswordInput from '../../components/passwordInput/PasswordInput'
import useLogin from '../../hooks/useLogin';



const Login = () => {

    const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const { loading, login } = useLogin();

	const handleSubmit = async (e) => {
		e.preventDefault();
		await login(username, password);
	};
  
  return (
    <>
        <div className='flex items-center justify-center mt-28'>
            <div className='w-96 border rounded px-7 py-10'>
                <form onSubmit={handleSubmit}>
                    <h4 className='text-2xl mb-7 items-center justify-center flex'>Login 
                        <span className='text-blue-600'>    WhatsGram</span>
                    </h4>
                    <input type = "text" placeholder='Username' className='input-box' value={username} onChange={(e) => setUsername(e.target.value)}/>
                    <PasswordInput value={password} onChange={(e) => setPassword(e.target.value)}/>
                    <button type='submit' className='btn-primary'>
                        Login
                    </button>
        
                    <p className='text-sm text-center mt-4'>
                        Not Registered, Click here {" "}
                        <Link to = "/signup" className='font-medium text-primary underline'>
                            Create Your Account
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    </>
  )
}

export default Login