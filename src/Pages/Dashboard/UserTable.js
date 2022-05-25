import React from 'react';

const UserTable = ({ user, index }) => {
    const { email } = user;
    return (
        <>

            <tr>
                <td>{index + 1}</td>
                <td> {email}</td>
                <td><button class="btn btn-info"> Make Admin</button> </td>
                <td><button class="btn btn-error">Remove User</button></td>
            </tr>
        </>
    );
};

export default UserTable;