import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import './login.css'
const Login = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        user_email: '',
        user_password: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const storedUser = JSON.parse(localStorage.getItem('user'));

        if (formData.user_email === '' && formData.user_password === ''){
            toast.warning("Please fill the details")

        }else if (formData.user_email === '' ){
            toast.warning('Please fill the Email')
        } 
        else if (formData.user_email !== storedUser.user_email){
            toast.warning("Please Enter the Correct Email")
        } 
        else if (formData.user_password === "") {
            toast.warning('Please fill the Password')
        }
         
        else if (formData.user_password !== storedUser.user_password) {
            toast.warning("Please Enter the Correct Password")
        }

        else if (storedUser && storedUser.user_email === formData.user_email && storedUser.user_password === formData.user_password) {
            localStorage.setItem('loggedIn', true);
            toast.success("Login Successful!");
            navigate('/dashboard');
        } else {
            toast.error("Invalid Credentials!");
        }
    };

    return (
        <div className='bg-login d-flex justify-content-center align-items-center'>
        <div  className="container w-50 inner-container p-3 text-white">
            <h2 className='text-center'>Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Email</label>
                    <input
                        type="email"
                        name="user_email"
                        className="form-control"
                        onChange={handleChange}
                        
                    />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input
                        type="password"
                        name="user_password"
                        className="form-control"
                        onChange={handleChange}
                        
                    />
                </div>
                <div className='d-flex justify-content-between mt-4'>
                <button type="submit" className="btn btn-primary  ">Login</button>
                <p className='mt-2 ps-2'>If you Don't have account? <a href='/signup' className='text-primary'>Register</a> </p>
                </div>
            </form>
            </div>
        </div>
       
    );
};

export default Login;
