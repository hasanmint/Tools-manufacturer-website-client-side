import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading';
import ProfileTable from './Profile/ProfileTable';

const MyProfile = () => {
    const { data: profiles, isLoading, refetch } = useQuery('profiles', () => fetch('https://secret-fjord-61926.herokuapp.com/profile', {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(Response => Response.json()));
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <>
            <div>
                My Profile {profiles.length}
            </div>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th>SL</th>
                            <th>Avada</th>
                            <th>Your Email</th>
                            <th>Phone</th>
                            <th>Facebook URL</th>
                            <th>Address</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            profiles.map((profile, index) =>
                                <ProfileTable
                                    key={profile._id}
                                    profile={profile}
                                    index={index}
                                    refetch={refetch}
                                ></ProfileTable>)
                        }

                    </tbody>
                </table>
            </div>
        </>
    );
};

export default MyProfile;