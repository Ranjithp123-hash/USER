import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import './login.css'
const SignUp = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        user_firstname: '',
        user_email: '',
        user_password: '',
        user_phone: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            ...formData,
            user_lastname: 'Doe',
            user_city: 'Hyderabad',
            user_zipcode: '500072'
        };

        if (formData.user_email ==='' && formData.user_firstname === '' && formData.user_password === "" && formData.user_phone === '') {
            toast.warning("Please fill the Details")

        }else if (formData.user_firstname === '') {
            toast.warning('Please Enter the First Name');
        }  else if (formData.user_email === ''){
            toast.warning("Please Enter the Email");
        } else if (formData.user_phone === ''){
            toast.warning("Please Enter the Phone Number");
        } else if (formData.user_password === ''){
            toast.warning("Please Enter the Mobile Number");
        } else {


        try {
            await axios.post('https://syoft.dev/Api/user_registeration/api/user_registeration', payload);
            localStorage.setItem('user', JSON.stringify(payload));
            toast.success("Registration Successful!");
            navigate('/');
        } catch (error) {
            toast.error("Registration Failed!");
        }
    }
    };

    return (
        <div className='bg-login d-flex justify-content-center align-items-center'>

        
        <div className="container w-50 inner-container p-3 text-white">
            {/* <div> */}
            <h2 className='text-center'>Sign Up</h2>
            <form  onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>First Name</label>
                    <input
                        type="text"
                        name="user_firstname"
                        className="form-control"
                        onChange={handleChange}
                        
                    />
                </div>
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
                    <label>Phone</label>
                    <input
                        type="text"
                        name="user_phone"
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
                <div className='d-flex justify-content-between '>
                <button type="submit" className="btn btn-primary mt-3">Register</button>
                <p className="mt-3 ps-2">Already Registered please! <a className='text-primary' href="./">Login</a></p>

                </div>
               
            </form>
            </div>
            </div>
        // </div>
    );
};

export default SignUp;
