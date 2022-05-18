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
            <div className="flex-1">
                <Link to='/' className="btn btn-ghost normal-case text-2xl font-bold text-blue-600">ToDo App</Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal p-0">
                    <li><Link to='/About' className='text-xl font-bold'>Task</Link></li>
                    {
                        user ? <li><Link onClick={handleSignout} className='text-xl font-bold' to=''>Logout</Link></li> : <li><Link className='text-xl font-bold' to='/login'>Login</Link></li>
                    }
                </ul>
            </div>
        </div>
    );
};

export default Header;