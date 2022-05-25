import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading';
import UserTable from './UserTable';

const Users = () => {
    const { data: users, isLoading } = useQuery('users', () => fetch('http://localhost:5000/user', {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(Response => Response.json()))


    if (isLoading) {
        return <Loading></Loading>
    }
    return (

        <>
            <div>
                All Users:{users.length}
            </div>
            <div>

                <div class="overflow-x-auto w-full">
                    <table class="table w-full">
                        {/* <!-- head --> */}
                        <thead>
                            <tr>
                                <th>SL</th>
                                <th>Email</th>
                                <th>Action</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user, index) =>
                                    <UserTable
                                        key={user._id}
                                        user={user}
                                        index={index}
                                    ></UserTable>)
                            }

                        </tbody>

                    </table>
                </div>

            </div>
        </>

    );
};

export default Users;