import React, {useState, useEffect} from 'react'
import { useNavigate,Link } from 'react-router-dom'
import { Modal } from '../mini-components/Modal'
import axios from 'axios'
export const Register = ({title}) => {

    const [credentials, setCredentials] = useState({
        username: "",
        fullname: "",
        email: "",
        password: "",
        confirmPassword: "",
    })

    const [validations, setValidations] = useState({
        title: '',
        comment: '',
    })

    const handleCredentials = (e) => {
        const {name, value} = e.target;
        setCredentials(prevState => ({
            ...prevState, 
            [name] : value
        }))
    }

    const submitFunction = async (e) => {
        e.preventDefault();

        let error = {
            title: '',
            commet: '',
        };

        for(const field in credentials){
            if(credentials[field].trim() === ''){
                error = {
                    title: 'Login Error', 
                    comment: 'Please fill up all the fields'
                };
                break;
            }

            if(credentials.confirmPassword != credentials.password){
                error = {
                    title: 'Credentials',
                    comment: 'Password does not match'
                }
            }
        }
        setValidations(error);

        if(error.title){
            return;
        }

        const response = await axios.post('http://localhost:5000/register', credentials);
        if(response.status === 200){
            error = {
                title: 'Login Successful',
                comment: 'Your account has been registered proceed to login page.'
            }
            console.log(response);
        }   
        else{
            error = {
                title: 'Unable to create account',
                comment: response.message
            }
            console.log(response);
        }
        setValidations(error);
        // if(error.title){
        //     return;
        // }
    }

    useEffect(() => {

        document.title = title;

    },[title])

return (
    <div className='relative flex justify-center w-full h-screen overflow-hidden py-[4rem] p-[2rem]'>
    <div className='mt-2 min-w-[23rem] max-w-[40rem] flex flex-col'>
        <h1 className='font-secondary font-bold text-3xl text-primary text-center py-5'>Create your account</h1>
        <form>
            <div className="mt-5 flex items-center">
                <div className="border-t border-gray-500 flex-grow"></div>
                    <p className="mx-2 font-secondary">Full Name</p>
                <div className="border-t border-gray-500 flex-grow"></div>
            </div>

            <div className='flex items-center justify-center'>
                <input 
                    type="text"
                    name="fullname"
                    value={credentials.fullname}
                    onChange={handleCredentials} 
                    required
                    className='border-2 border-primary w-full py-2 rounded-xl px-5 font-optional'/>
            </div>

            <div className="mt-5 flex items-center">
                <div className="border-t border-gray-500 flex-grow"></div>
                    <p className="mx-2 font-secondary">Username</p>
                <div className="border-t border-gray-500 flex-grow"></div>
            </div>

            <div className='flex items-center justify-center'>
                <input 
                    type="text"
                    name="username"
                    value={credentials.username}
                    onChange={handleCredentials} 
                    required
                    className='border-2 border-primary w-full py-2 rounded-xl px-5 font-optional'/>
            </div>

            {validations.username && (
                <p className='text-red-500 font-secondary'>{validations.username}</p>    
            )}

            <div className="mt-5 flex items-center">
                <div className="border-t border-gray-500 flex-grow"></div>
                    <p className="mx-2 font-secondary">Email</p>
                <div className="border-t border-gray-500 flex-grow"></div>
            </div>

            <div className='flex items-center justify-center'>
                <input 
                    type="email"
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

            <div className="mt-5 flex items-center">
                <div className="border-t border-gray-500 flex-grow"></div>
                    <p className="mx-2 font-secondary">Confirm Password</p>
                <div className="border-t border-gray-500 flex-grow"></div>
            </div>

            <div className='flex items-center justify-center'>
                <input
                    type="password" 
                    name="confirmPassword"
                    value={credentials.confirmPassword}
                    onChange={handleCredentials}
                    required
                    className='border-2 border-primary w-full py-2 rounded-xl px-5 font-optional'/>
            </div>

            <button 
                onClick={submitFunction}
                className='p-2 mt-5 rounded-xl transition-all delay-100 ease-in-out text-secondary font-secondary
                bg-primary hover:bg-secondary hover:text-primary focus:outline-none focus:ring ring-primary w-[100%]'>
            Sign In
            </button>
            </form>
            <h1 className='font-secondary'>You already have an account? 
                <Link to={'/login'} className='font-secondary font-semibold text-primary italic'>Sign in</Link>
            </h1>
            <div className='mt-10'>
                <h1 className='text-gray-400 font-secondary text-center'>@ Created by Markme 2023</h1>
            </div>
    </div>

    {validations.title && (
        <Modal 
        {...validations}
        toggle={() => setValidations(prevState => ({...prevState, title:'', comment: ''}))}
        />
        )}

        <div className='absolute z-[-2] inset-0 w-[20rem] h-[20rem] bg-secondary top-[-9rem] left-[-5rem] rounded-full'></div>
        <div className='absolute w-[20rem] h-[20rem] bg-primary bottom-[-13rem] right-[-14rem] md:right-[-5rem] rounded-full'></div>

</div>
)
}
