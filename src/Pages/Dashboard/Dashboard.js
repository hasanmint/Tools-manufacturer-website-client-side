import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className="drawer drawer-mobile mt-16">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content m-5">
                <h2 className="text-2xl text-secondary">Dashbord</h2>
                <Outlet></Outlet>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-60 bg-base-100 text-base-content">

                    {/* <!-- Sidebar content here --> */}
                    <li><Link to='/dashboard'>My Orders</Link></li>
                    <li><Link to='/dashboard/review'>My Review</Link></li>
                    <li><Link to='/dashboard/profile'>My Profile</Link></li>
                    <li><Link to='/dashboard/users'>All Users</Link></li>

                </ul>

            </div>
        </div>
    );
};

export default Dashboard;