import React, { useState } from 'react';
import { useAuthState, useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Login = () => {
    const [user] = useAuthState(auth);
    const [error, setError] = useState('');
    const [createUserWithEmailAndPassword, emailUser, emailLoading, emailError] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const navigate = useNavigate();

    if (user) {
        navigate('/about')
    }

    const handleCreateUser = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        const confirmPass = event.target.confirmpass.value;

        if (password.length < 6) {
            setError('Password not longer than 6 character')
            return;
        } else if (password !== confirmPass) {
            setError('Password did not mathced');
            return;
        } else {
            createUserWithEmailAndPassword(email, password)
        }

    }
    return (
        <div className='mt-4'>
            <form onSubmit={handleCreateUser} className='w-1/4 p-3 mx-auto text-center border-2'>
                <input type="text" name="email" placeholder="Email" className="input input-bordered mb-4 w-full max-w-xs" required /> <br />
                <input type="password" name="password" placeholder="Password" className="input input-bordered mb-4 w-full max-w-xs" required /> <br />
                <input type="password" name="confirmpass" placeholder="Confirm Password" className="input input-bordered mb-4 w-full max-w-xs" required /> <br />
                <p className='text-center text-red-500 fw-bold'>{error}</p>
                {
                    emailError && <p className='text-center text-danger text-red-400  font-bold'>Already User</p>
                }
                <p>
                    {
                        emailLoading && <button class="btn btn-square loading mb-2"></button>
                    }
                </p>
                <button class="btn btn-primary">Register</button>
                <p className='mt-3'>Already User? <Link to='/login' className='text-primary font-bold p-3'>Login</Link></p>
            </form>
        </div >
    );
};

export default Login;