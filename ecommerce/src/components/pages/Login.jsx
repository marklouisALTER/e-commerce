import React, {useState, useEffect} from 'react'
import { useNavigate,Link } from 'react-router-dom'
import { useAuth } from '../Authentication/Auth'
import { Modal } from '../mini-components/Modal'
import axios from 'axios'

export const Login = ({title}) => {
  const navigate = useNavigate();
  const { login, isAuthenticated } = useAuth();
  
  if(!isAuthenticated){
    navigate('/dashboard');  
  }
  

  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });

  const [validation, setValidation] = useState({
    title: '',
    comment: '',
  })


  const handleCredentials = (e) => {
    const {name, value} = e.target;
    setCredentials(prevState => ({
      ...prevState,
      [name] : value, 
    }))
  }
  

  const submitFunction = async (e) => {
    e.preventDefault();

    let error = {
      title: '',
      comment: '',
    }

    try {
          const response = await axios.post('http://localhost:5000/login', credentials);
            if (response.status === 200) {
              login({
                user: response.data.username,
                token: response.data.token
              })
              console.log('Login successful');
              navigate('/dashboard');

            } else if(response.status === 401) {
              error = {
                title: 'Unable to Login',
                comment: 'Your credentials are incorrect'
              }
              setValidation(error);
            }
    } catch (error) {
      error = {
        title: 'Unable to Login',
        comment: 'There is an error trying to login'
      }
      setValidation(error);
    }

  };
  

  useEffect(() => {
    
    document.title = title;

  },[title])


  
  return (
    <div className='relative flex justify-center w-full h-screen overflow-hidden py-[5rem] p-[2rem]'>
      <div className='mt-10 min-w-[23rem] max-w-[40rem] flex flex-col'>
          <h1 className='font-secondary font-bold text-3xl text-primary text-center py-5'>Login to your Account</h1>

          <div className="mt-5 flex items-center">
              <div className="border-t border-gray-500 flex-grow"></div>
                  <p className="mx-2 font-secondary">Username</p>
              <div className="border-t border-gray-500 flex-grow"></div>
          </div>

            <div className='flex items-center justify-center'>
                <input 
                      type="text"
                      name="email"
                      value={credentials.email}
                      onChange={handleCredentials} 
                      required
                      className='border-2 border-primary w-full py-2 rounded-xl px-5 font-optional'/>
            </div>

            <div className="mt-5 flex items-center">
                <div className="border-t border-gray-500 flex-grow"></div>
                    <p className="mx-2 font-secondary">Password</p>
                <div className="border-t border-gray-500 flex-grow"></div>
            </div>

            <div className='flex items-center justify-center'>
                <input
                      type="password" 
                      name="password"
                      value={credentials.password}
                      onChange={handleCredentials}
                      required
                      className='border-2 border-primary w-full py-2 rounded-xl px-5 font-optional'/>
            </div>
            
            <div className='flex items-center mt-5 gap-2'>
                  <input 
                          id="checked-checkbox" 
                          type="checkbox" 
                          value="" 
                          className="w-4 h-4 text-primary bg-primary border-gray-300 rounded focus:ring-secondary 
                          dark:focus:ring-primary dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 
                          dark:border-gray-600" />
                  <label 
                          htmlFor="checked-checkbox" 
                          className="ml-2 text-primary text-md font-optional">
                        Remember Me
                  </label>
            </div>
            
            <button 
                onClick={submitFunction}
                className='p-2 mt-5 rounded-xl transition-all delay-100 ease-in-out text-secondary font-secondary
                bg-primary hover:bg-secondary hover:text-primary focus:outline-none focus:ring ring-primary'>
              Sign In
            </button>
            <div className='mt-5 mb-5 ml-auto'>
                <h1 className='font-optional text-primary'>Forgot Password</h1>
            </div>
            <h1 className='font-secondary'>Dont have an account yet? 
                <Link to={'/register'} className='font-secondary font-semibold text-primary italic'>Register</Link>
            </h1>
            <div className='mt-20'>
                <h1 className='text-gray-400 font-secondary text-center'>@ Created by Markme 2023</h1>
            </div>
            
      </div>

{validation.title && 
<Modal {...validation} toggle={() => setValidation(prevState => ({...prevState, title: '', comment: ''}))}/>
}
        <div className='absolute z-[-2] inset-0 w-[20rem] h-[20rem] bg-secondary top-[-9rem] left-[-5rem] rounded-full'></div>
        <div className='absolute w-[20rem] h-[20rem] bg-primary bottom-[-13rem] right-[-14rem] md:right-[-5rem] rounded-full'></div>

    </div>
  )
}
