import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../firebase.init';

const Navbar = () => {
    const [user, loading, error] = useAuthState(auth);
    const logout = () => {
        signOut(auth);
    };
    const menuITems = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/products'>Products</Link></li>
        <li><Link to='/reviews'>Reviews</Link></li>
        <li><Link to='/blog'>Blogs</Link></li>
        <li><Link to='/dashboard'>Dashboard</Link></li>
        <li>
            {user ? <button className='btn btn-outline rounded-lg' onClick={logout} >Log Out</button> : <Link to='/login'>Login</Link>}
        </li>
    </>
    return (
        <>
            <div className="navbar bg-base-100 top-0 ">
                <div className="navbar">
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuITems}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl center">Manufacturer</a>


                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0 gap-x-2">
                        {menuITems}
                    </ul>
                </div>

            </div>
        </>
    );
};

export default Navbar;