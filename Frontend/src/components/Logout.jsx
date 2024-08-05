import React from 'react';
import { useAuth } from '../context/Authprovide'; // Ensure correct import path
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

function Logout() {
    const [authUser, setAuthUser] = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        try {
            // Clear user data from local storage
            localStorage.removeItem("User");

            // Perform any additional cleanup if needed
            setAuthUser(null);

            // Show success message
            toast.success("Logout successful");

            // Redirect to login page
            navigate('/login');
        } catch (error) {
            // Show error message
            toast.error(`Error during logout: ${error.message}`);
        }
    };

    return (
        <div>
            <button
                className='px-3 py-2 bg-red text-white rounded-md cursor-pointer'
                onClick={handleLogout}
            >
                Hello
            </button>
        </div>
    );
}

export default Logout;
