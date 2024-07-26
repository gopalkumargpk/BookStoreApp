import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    // Handle signup logic here
  };

  const handleLoginClick = () => {
    navigate('/login');
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="w-[600px]">
        <div className="modal-box relative">
          <div>
            {/* Close button for the modal */}
            <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              x
            </Link>
            <h3 className="font-bold text-lg">Signup</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* Name input */}
              <div className="mt-4 space-y-2">
                <label htmlFor="name" className="block">Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your full name"
                  className="w-full px-3 py-2 border rounded-md outline-none"
                  {...register("name", { required: true })}
                />
                <br />
                {errors.name && (
                  <span className='text-sm text-red-500'>
                    This field is required
                  </span>
                )}
              </div>
              {/* Email input */}
              <div className="mt-4 space-y-2">
                <label htmlFor="email" className="block">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="w-full px-3 py-2 border rounded-md outline-none"
                  {...register("email", { required: true })}
                />
                <br />
                {errors.email && (
                  <span className='text-sm text-red-500'>
                    This field is required
                  </span>
                )}
              </div>
              {/* Password input */}
              <div className="mt-4 space-y-2">
                <label htmlFor="password" className="block">Password</label>
                <input
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                  className="w-full px-3 py-2 border rounded-md outline-none"
                  {...register("password", { required: true })}
                />
                <br />
                {errors.password && (
                  <span className='text-sm text-red-500'>
                    This field is required
                  </span>
                )}
              </div>
              {/* Signup button */}
              <div className="flex justify-around mt-6 items-center">
                <button
                  type="submit"
                  className="bg-pink-500 text-white rounded-md px-3 py-2 hover:bg-pink-700 duration-200"
                >
                  Signup
                </button>
                <p className='text-xl'>
                  Have an account?{" "}
                  <span
                    className="underline text-blue-500 cursor-pointer"
                    onClick={handleLoginClick}
                  >
                    Login
                  </span>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
