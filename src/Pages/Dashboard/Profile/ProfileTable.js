import React from 'react';

const ProfileTable = ({ profile, index }) => {
    const { name, email, address, fburl, phone, image } = profile;
    return (
        <>
            <tr>
                <td>{index + 1}</td>
                <td>
                    <div class="flex items-center space-x-3">
                        <div class="avatar">
                            <div class="mask mask-squircle w-12 h-12">
                                <img src={image} alt="Avatar Tailwind CSS Component" />
                            </div>
                        </div>

                    </div>
                </td>
                <td>{name}</td>
                <td>{phone}</td>
                <td>{fburl}</td>
                <td>{address}</td>
            </tr>
        </>
    );
};

export default ProfileTable;