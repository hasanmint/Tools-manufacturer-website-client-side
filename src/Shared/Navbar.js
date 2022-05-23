import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const menuITems = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/products'>Products</Link></li>
        <li><Link to='/reviews'>Reviews</Link></li>
        <li><Link to='/blog'>Blogs</Link></li>
        <li><Link to='/dashboard'>Dashboard</Link></li>
        <li><Link to='/Login' className='btn btn-outline rounded-lg'>Login</Link></li>
    </>
    return (
        <>
            <div class="navbar bg-base-100 top-0 ">
                <div class="navbar">
                    <div class="dropdown">
                        <label tabindex="0" class="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuITems}
                        </ul>
                    </div>
                    <a class="btn btn-ghost normal-case text-xl center">Manufacturer</a>


                </div>
                <div class="navbar-center hidden lg:flex">
                    <ul class="menu menu-horizontal p-0 gap-x-2">
                        {menuITems}
                    </ul>
                </div>

            </div>
        </>
    );
};

export default Navbar;