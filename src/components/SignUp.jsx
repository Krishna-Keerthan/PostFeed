import React, { useState } from "react";
import {useNavigate , Link} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {useForm} from 'react-hook-form'
import {login as authLogin} from '../store/authSlice'
import authService from '../../appwrite/auth'
import {Button ,  Input , Logo} from './index'


function SignUp(){

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {register , handleSubmit} = useForm();
    const [error, setError] = useState("");

    const create = async (data)=>{
        setError('');
        try {
            const session =  await authService.createAccount(data);
            if(session){
                const userData = await authService.getCurrentUser();
                if(userData){
                    dispatch(authLogin(userData));
                }
                navigate('/');
            }
        } catch (error) {
            setError(error.message);
        }
        
    };

    return (
        <div className='min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
            <div className="mx-auto w-full max-w-md">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-blue-200 p-8 transform transition-all duration-300 hover:shadow-2xl">
                    {/* Logo Section */}
                    <div className="mb-8 flex justify-center">
                        <div className="relative group">
                            <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-xl group-hover:bg-blue-500/30 transition-all duration-300"></div>
                            <span className="relative inline-block w-full max-w-[100px] transform transition-transform duration-300 group-hover:scale-105">
                                <Logo width="100%"></Logo>
                            </span>
                        </div>
                    </div>

                    {/* Header */}
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold text-blue-900 mb-2">Join Us Today</h2>
                        <p className="text-blue-600/80">Create your account to get started</p>
                    </div>

                    {/* Sign In Link */}
                    <div className="text-center mb-6">
                        <p className="text-sm text-blue-700/70">
                            Already have an account?{' '}
                            <Link
                                to="/login"
                                className="font-medium text-blue-600 hover:text-blue-700 transition-colors duration-200 relative group"
                            >
                                Sign In
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                            </Link>
                        </p>
                    </div>

                    {/* Error Message */}
                    {error && (
                        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl">
                            <p className="text-red-600 text-sm text-center font-medium">{error}</p>
                        </div>
                    )}

                    {/* Sign Up Form */}
                    <form onSubmit={handleSubmit(create)} className="space-y-6">
                        <div className="space-y-4">
                            <div className="relative">
                                <Input
                                    label="Full Name"
                                    placeholder="Enter your full name"
                                    type="text"
                                    {...register("name", {
                                        required: true
                                    })}
                                />
                            </div>

                            <div className="relative">
                                <Input
                                    label="Email"
                                    placeholder="Enter your email"
                                    type="email"
                                    {...register("email", {
                                        required: true,
                                        pattern: {
                                            value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                                            message: "Email address must be a valid address"
                                        }
                                    })}
                                />
                            </div>

                            <div className="relative">
                                <Input
                                    label="Password"
                                    placeholder="Create a strong password"
                                    type="password"
                                    {...register("password", {
                                        required: true
                                    })}
                                />
                            </div>
                        </div>

                        <div className="pt-4">
                            <Button 
                                type="submit"
                                className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl focus:ring-4 focus:ring-blue-500/20"
                            >
                                Create Account
                            </Button>
                        </div>
                    </form>

                    {/* Additional Info */}
                    <div className="mt-6 text-center">
                        <p className="text-xs text-blue-600/60">
                            Password should be at least 8 characters long
                        </p>
                    </div>
                </div>

                {/* Footer */}
                <div className="mt-8 text-center">
                    <p className="text-xs text-blue-600/60">
                        By creating an account, you agree to our Terms of Service and Privacy Policy
                    </p>
                </div>
            </div>
        </div>
    )
}

export default SignUp;