import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'
import { useForm } from 'react-hook-form';

function Signup() {
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
        <div className='flex h-screen  items-center justify-center '>
            <div className="w-[600px] flex justify-center">
                <div className="modal-box dark:bg-slate-900 dark:text-white">
                    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>

                        <h3 className="font-bold text-lg">Signup</h3>
                        <div className='mt-4 space-y-2'>
                            <span>Name:</span><br />
                            <input type="text" placeholder='Enter Your FullName' className='w-80 px-3 py-1 border rounded-md outline-none dark:bg-slate-900 dark:text-white'  {...register('name', { required: 'Email is required' })} />
                            <br />
                            {errors.name && <span className="text-red-500">{errors.name.message}</span>}
                        </div>
                        <div className='mt-4 space-y-2'>
                            <span>Email:</span><br />
                            <input type="email" placeholder='Enter Your Email' className='w-80 px-3 py-1 border rounded-md outline-none dark:bg-slate-900 dark:text-white'  {...register('email', { required: 'Email is required' })} />
                            <br />
                            {errors.email && <span className="text-red-500">{errors.email.message}</span>}
                        </div>
                        <div className='mt-4 space-y-2'>
                            <span>Password:</span><br />
                            <input type="password" placeholder='Enter Your Password' className='w-80 px-3 py-1 border rounded-md outline-none dark:bg-slate-900 dark:text-white'  {...register('password', { required: 'Email is required' })} />
                            <br />
                            {errors.password && <span className="text-red-500">{errors.password.message}</span>}
                        </div>
                        <div className='flex justify-between items-center mt-4'>
                            <button className='mt-4 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700'>Signup</button>
                            <p className='mt-9'>Have Account? <button className='underline text-blue-500 cursor-pointer text-md' onClick={() =>
                                document.getElementById('my_modal_3').showModal()
                            }>
                                Login
                            </button>
                                <Login />
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signup