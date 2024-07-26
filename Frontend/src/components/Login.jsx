import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import '../styles/contact.css'



const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [loginData, setLoginData] = useState(null);

  const onSubmit = data => {
    setLoginData(data);
    console.log(data);
    // Handle login logic here
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="custom-bg p-8 rounded-lg shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6">Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
        
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border rounded-md outline-none focus:ring focus:ring-blue-200"
              placeholder="Enter your email"
              {...register('email', { required: 'Email is required' })}
            />
            {errors.email && <span className="text-sm text-red-500">{errors.email.message}</span>}
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 border rounded-md outline-none focus:ring focus:ring-blue-200"
              placeholder="Enter your password"
              {...register('password', { required: 'Password is required' })}
            />
            {errors.password && <span className="text-sm text-red-500">{errors.password.message}</span>}
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200">
            Login
          </button>
        </form>
        <div className="mt-4 text-center">
          <p>
            Not registered? <Link to="/Signup" className="text-blue-500 underline">Signup</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
