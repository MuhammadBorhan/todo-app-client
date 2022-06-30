import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignout = () => {
        signOut(auth)
    }
    return (
        <div className="navbar bg-gray-300 px-12">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to='/About' className='text-xl font-bold'>Task</Link></li>
                        <li><Link to='/todo' className='text-xl font-bold'>To-Do</Link></li>
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-2xl font-bold text-blue-600">To-Do App</Link>
            </div>
            <div class="navbar-end hidden lg:flex">
                <ul class="menu menu-horizontal p-0">
                    <li><Link to='/About' className='text-xl font-bold'>Task</Link></li>
                    <li><Link to='/todo' className='text-xl font-bold'>To-Do</Link></li>
                    <li><Link to='/calendar' className='text-xl font-bold'>Calendar</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Header;


{/* <li><Link className='text-xl font-bold' to='/login'>Login</Link></li> */ }