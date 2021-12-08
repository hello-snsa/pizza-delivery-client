import React from 'react';
import { NavLink } from 'react-router-dom';


export default function UserRegister() {

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Login success")
    }

    return (
        <div className="userRegisterMainDiv flex justify-center ">

            {/* Tailwind css */}

            <div className="loginFormDiv min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 ">
                <div className="max-w-md w-full space-y-8">
                    <div>
                        <img
                            className="mx-auto h-20  w-auto"
                            src="./images/avtar.png"
                            alt="Workflow"
                        />
                        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Create your new account </h2>

                        {/* <p className="mt-2 text-center text-sm text-gray-600">
                            Or{' '}
                            <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                                start your 14-day free trial
                            </a>
                        </p> */}

                    </div>
                    <form className="mt-8 space-y-6" onSubmit={handleSubmit} method="POST">
                        <input type="hidden" name="remember" defaultValue="true" />

                        <div className="rounded-md shadow-sm -space-y-px">


                            <div>
                                <label htmlFor="email-address" className="sr-only">
                                    Name
                                </label>
                                <input
                                    id="email-address"
                                    name="uname"
                                    type="text"

                                    required
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="Name"
                                />
                            </div>



                            <div>
                                <label htmlFor="email-address" className="sr-only">
                                    Email address
                                </label>
                                <input
                                    id="email-address"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="Email address"
                                />
                            </div>

                            <div>
                                <label htmlFor="password" className="sr-only">
                                    Password
                                </label>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="Password"
                                />
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                {/* <input
                                    id="remember-me"
                                    name="remember-me"
                                    type="checkbox"
                                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                                /> */}
                                {/* <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                                    Remember me
                                </label> */}
                            </div>

                            {/* <div className="text-sm forgetPass">
                                <a href="#" className="font-medium  ">
                                    Forgot your password?
                                </a>
                            </div> */}
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="registerBtn rounded-full group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                    {/* <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" /> */}
                                </span>
                                Sign up
                            </button>


                            <div className="text-sm forgetPass text-right mt-4 ">
                                <NavLink className="font-medium  font-bold text-lg" to="/login">
                                    Already have account? Login
                                </NavLink>
                            </div>


                        </div>
                    </form>
                </div>
            </div>


            {/* end Tailwind */}
        </div>
    )
}



