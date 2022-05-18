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
        <div className="navbar bg-base-100 px-12">
            <div className="flex-1">
                <Link to='/' className="btn btn-ghost normal-case text-xl">ToDo App</Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal p-0">
                    <li><Link to='/home'>Home</Link></li>
                    <li><Link to='/About'>About</Link></li>
                    {
                        user ? <li><Link onClick={handleSignout} to=''>Logout</Link></li> : <li><Link to='/login'>Login</Link></li>
                    }
                </ul>
            </div>
        </div>
    );
};

export default Header;