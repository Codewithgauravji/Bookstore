import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        // Add logic to handle login, like sending data to an API
    };

    return (
        <div>
            {/* Modal Container */}
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box dark:bg-slate-900 dark:text-white">
                    {/* Close Button */}
                    <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                        ✕
                    </Link>
                    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                        {/* Title */}
                        <h3 className="font-bold text-lg">Login</h3>

                        {/* Email Input */}
                        <div className="mt-4 space-y-2">
                            <label>Email:</label>
                            <br />
                            <input
                                type="email"
                                placeholder="Enter Your Email"
                                className="w-80 px-3 py-1 border rounded-md outline-none dark:bg-slate-900 dark:text-white"
                                {...register('email', { required: 'Email is required' })}
                            />
                            {errors.email && <span className="text-red-500">{errors.email.message}</span>}
                        </div>

                        {/* Password Input */}
                        <div className="mt-4 space-y-2">
                            <label>Password:</label>
                            <br />
                            <input
                                type="password"
                                placeholder="Enter Your Password"
                                className="w-80 px-3 py-1 border rounded-md outline-none dark:bg-slate-900 dark:text-white"
                                {...register('password', { required: 'Password is required' })}
                            />
                            {errors.password && <span className="text-red-500">{errors.password.message}</span>}
                        </div>

                        {/* Buttons */}
                        <div className="flex justify-between items-center mt-4">
                            <button type="submit" className="mt-4 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700">
                                Login
                            </button>
                            <p className="mt-9">
                                Not Registered?{' '}
                                <Link to="/signup" className="underline text-blue-500 cursor-pointer">
                                    Signup
                                </Link>
                            </p>
                        </div>
                    </form>
                </div>
            </dialog>
        </div>
    );
}

export default Login;
