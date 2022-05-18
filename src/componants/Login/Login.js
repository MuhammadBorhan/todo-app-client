import React from 'react';
import { useAuthState, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Login = () => {
    const [user] = useAuthState(auth);
    const [signInWithEmailAndPassword, signUser, signLoading, signError] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";

    if (user) {
        navigate(from, { replace: true });
    }

    const handleSignin = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

        signInWithEmailAndPassword(email, password)

    }
    return (
        <div className=''>
            <form onSubmit={handleSignin} className='w-1/4 p-3 mx-auto text-center border-2'>
                <input type="text" name="email" placeholder="Email" className="input input-bordered mb-4 w-full max-w-xs" /> <br />
                <input type="password" name="password" placeholder="Password" className="input input-bordered mb-4 w-full max-w-xs" /> <br />
                <p className='text-center text-red-500 fw-bold'>{signError?.message}</p>
                <p>
                    {
                        signLoading && <button class="btn btn-square loading mb-2"></button>
                    }
                </p>
                <button class="btn btn-primary">Login</button>
                <p className='text-center mt-3 fw-bold'>New User? <Link to='/register' className='text-primary font-bold'>Register</Link> </p>
            </form>
        </div>
    );
};

export default Login;