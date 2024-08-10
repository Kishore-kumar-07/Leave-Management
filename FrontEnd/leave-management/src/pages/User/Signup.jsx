import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

const Signup = () => {
    const navigate = useNavigate();
    
    
    const [username, setUsername] = useState('');
   
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSignup = async (e) => {
        e.preventDefault();
        
        try {
            const res = await axios.post(
                `http://localhost:5000/users/signup`,
                {  
                    username,
                    password,
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );
            console.log(res);
            if (res.status === 200) {
                navigate('/login');
            }
        } catch (err) {
            console.log(err.message);
            setError('User Already Exists.');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-lg shadow-lg flex items-center justify-center p-6 w-full max-w-md">
                <div className="w-full">
                    <h2 className="text-black mb-6 text-2xl font-medium text-center sm:text-3xl">
                        Signup
                    </h2>
                    {error && <p className='error text-red-500 text-center'>{error}</p>}
                    <form onSubmit={handleSignup} className='space-y-6'>
                        
                        <div>
                            <label className="block text-gray-700 text-sm sm:text-base">
                                Username
                            </label>
                            <input
                                type="text"
                                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                                placeholder="Username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                        </div>
                        
                        <div>
                            <label className="block text-gray-700 text-sm sm:text-base">
                                Password
                            </label>
                            <input
                                type="password"
                                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                                placeholder="********"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-600"
                        >
                            SignUp
                        </button>
                        <div className="text-center">
                            <p className="text-gray-700 text-sm">
                                Already have an account?{' '}
                                <span
                                    className="text-blue-500 cursor-pointer"
                                    onClick={() => navigate('/login')}
                                >
                                    Login
                                </span>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signup;
