import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading';
import UserTable from './UserTable';

const Users = () => {
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('https://secret-fjord-61926.herokuapp.com/user', {
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

                <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        {/* <!-- head --> */}
                        <thead>
                            <tr>
                                <th>SL</th>
                                <th>Email</th>
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
                                        refetch={refetch}
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