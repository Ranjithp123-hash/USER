import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem('user'));

    if (!localStorage.getItem('loggedIn')) {
        navigate('/login');
    }

    const handleLogout = () => {
        localStorage.removeItem('loggedIn');
        navigate('/login');
    };

    return (
        <div className="container mt-5 ">
            <div className='flex-col  flex-justify-center align-items-center'>

            <h2 className=' text-center '><span className='bi bi-person-fill'></span>Dashboard</h2>
            <div className='d-flex justify-content-center align-items-center '> 
            <div className="card h-50 w-75   ">
               
                <div className="card-body m-auto  ">
                    <h5 className="card-title text-center border ">User Information</h5>
                    <p className="card-text"><strong>First Name:</strong> {user.user_firstname}</p>
                    <p className="card-text"><strong>Email:</strong> {user.user_email}</p>
                    <p className="card-text"><strong>Phone:</strong> {user.user_phone}</p>
                    <p className="card-text"><strong>City:</strong> {user.user_city}</p>
                    <p className="card-text"><strong>Zipcode:</strong> {user.user_zipcode}</p>
                    <div className='text-center'>
                    <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
                    </div>
                  </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Dashboard;
