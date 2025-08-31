import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { login as authLogin } from "../store/authSlice";
import authService from "../../appwrite/auth";
import { Button, Input, Logo } from "./index";

function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { register, handleSubmit } = useForm();
    const [error, setError] = useState("");

    const login = async (data) => {
        setError("");
        try {
            const session = await authService.login(data);
            if (session) {
                const userData = await authService.getCurrentUser();
                if (userData) {
                    dispatch(authLogin(userData));
                }
                navigate("/");
            }
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div className="min-h-screen bg-bg-dark flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="mx-auto w-full max-w-md">
                <div className="bg-bg-card/95 backdrop-blur-md rounded-2xl shadow-xl border border-border p-8 transition-all duration-300 hover:shadow-2xl">
                    {/* Logo Section */}
                    <div className="mb-8 flex justify-center">
                        <div className="relative group">
                            <div className="absolute inset-0 bg-accent/20 rounded-full blur-xl group-hover:bg-accent/30 transition-all duration-300"></div>
                            <span className="relative inline-block w-full max-w-[100px] transform transition-transform duration-300 group-hover:scale-105">
                                <Logo width="100%" />
                            </span>
                        </div>
                    </div>

                    {/* Header */}
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold text-text mb-2">Welcome Back</h2>
                        <p className="text-text-secondary">Sign in to your account</p>
                    </div>

                    {/* Sign Up Link */}
                    <div className="text-center mb-6">
                        <p className="text-sm text-text-secondary">
                            Don&apos;t have an account?{" "}
                            <Link
                                to="/sign-up"
                                className="font-medium text-accent hover:underline transition-colors duration-200"
                            >
                                Sign Up
                            </Link>
                        </p>
                    </div>

                    {/* Error Message */}
                    {error && (
                        <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-xl">
                            <p className="text-red-400 text-sm text-center font-medium">{error}</p>
                        </div>
                    )}

                    {/* Login Form */}
                    <form onSubmit={handleSubmit(login)} className="space-y-6">
                        <div className="space-y-4">
                            <Input
                                label="Email"
                                placeholder="Enter your email"
                                type="email"
                                {...register("email", {
                                    required: true,
                                    pattern: {
                                        value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                                        message: "Email address must be a valid address",
                                    },
                                })}
                            />

                            <Input
                                label="Password"
                                placeholder="Enter your password"
                                type="password"
                                {...register("password", {
                                    required: true,
                                })}
                            />
                        </div>

                        <div className="pt-4">
                            <Button
                                type="submit"
                                className="w-full py-3 px-4 bg-accent hover:bg-accent/80 text-white font-semibold rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-accent/30 focus:ring-4 focus:ring-accent/30"
                            >
                                Sign In
                            </Button>
                        </div>
                    </form>

                    {/* Additional Links */}
                    <div className="mt-6 text-center">
                        <Link
                            to="/forgot-password"
                            className="text-sm text-accent hover:underline transition-colors duration-200"
                        >
                            Forgot your password?
                        </Link>
                    </div>
                </div>

                {/* Footer */}
                <div className="mt-8 text-center">
                    <p className="text-xs text-text-secondary">
                        By signing in, you agree to our Terms of Service and Privacy Policy
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Login;
