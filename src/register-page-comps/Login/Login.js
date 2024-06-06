import React from 'react'
import { ArrowRight } from 'lucide-react'
import './Login.css'

// import images 
import bg from "../../assets/login-bg.svg"; 

function Login() {
    return (
        <div className='login-wrapper'>
            <section style={{height: '100vh'}}>
                <div className="login-container">
                    <div className="login-form-container">
                        <div className="login-form-wrapper">
                            <h2 className="login-title">Welcome Back</h2>
                            <p>Enter your Credentials to access your account</p>
                            <div style={{height: '50px'}}></div>
                            {/* <p className="login-subtitle">
                                Don't have an account?{' '}
                                <a href="#" className="login-create-account-link">Create a free account</a>
                            </p> */}
                            <form action="#" method="POST" className="login-form">
                                <div className="login-form-group">
                                    <div>
                                        <label htmlFor="email" className="login-label">Email address</label>
                                        <div className="login-input-wrapper">
                                            <input
                                                id="email"
                                                className="login-input"
                                                type="email"
                                                placeholder="Email"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="login-label-wrapper">
                                            <label htmlFor="password" className="login-label">Password</label>
                                            <a href="#" className="login-forgot-password-link">Forgot password?</a>
                                        </div>
                                        <div className="login-input-wrapper">
                                            <input
                                                id="password"
                                                className="login-input"
                                                type="password"
                                                placeholder="Password"
                                            />
                                        </div>
                                    </div>
                                    <div className='login-remember-me'>
                                        <input type='checkbox' /> Remember me
                                    </div>
                                    <div>
                                        <button type="button" className="login-submit-button">
                                            login
                                        </button>
                                    </div>
                                </div>
                            </form>


                            <div>
                                <div></div>
                                <div>

                                    
                                </div>
                            </div>
                            <div className="login-social-login">
                                <button type="button" className="login-google-button">
                                    <span className="login-icon-wrapper">
                                        <svg className="login-google-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"></path>
                                        </svg>
                                    </span>
                                    Sign in with Google
                                </button>
                                <button type="button" className="login-facebook-button">
                                    <span className="login-icon-wrapper">
                                        <svg className="login-facebook-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path>
                                        </svg>
                                    </span>
                                    Sign in with Facebook
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="login-image-container">
                        <img
                            className="login-image"
                            src={bg}
                             alt=""
                        />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Login