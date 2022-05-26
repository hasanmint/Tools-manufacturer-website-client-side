import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth)
    const [admin] = useAdmin(user)

    return (
        <div className="drawer drawer-mobile mt-16">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content m-5">
                <h2 className="text-2xl text-secondary">Dashbord</h2>
                <Outlet></Outlet>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 mt-6 overflow-y-auto mt-14 w-60 bg-base-200 text-base-content">

                    {/* <!-- Sidebar content here --> */}
                    {!admin &&
                        <>
                            <li><Link to='/dashboard'>My Orders</Link></li>
                            <li><Link to='/dashboard/myreview'>My Review</Link></li>
                            <li><Link to='/dashboard/addReview'>Add Review</Link></li>
                        </>
                    }
                    <li><Link to='/dashboard/myprofile'>My Profile</Link></li>
                    <li><Link to='/dashboard/updateProfile'>Update Profile</Link></li>
                    {admin &&
                        <>
                            <li><Link to='/dashboard/users'>All Users</Link></li>
                            <li><Link to='/dashboard/addProduct'>Add Product</Link></li>
                            <li><Link to='/dashboard/manageProduct'>Manage Product</Link></li>

                        </>
                    }

                </ul>

            </div>
        </div>
    );
};

export default Dashboard;