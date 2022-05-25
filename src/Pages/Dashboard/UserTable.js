import React from 'react';
import { toast } from 'react-toastify';

const UserTable = ({ user, index, refetch }) => {
    const { email, role } = user;
    const makeAdmin = () => {
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(Response => {
                if (Response.status === 403) {
                    toast.error('Admin Access Only')
                }
                return Response.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success('Successfully Made a Admin')
                }
            })
    }
    return (
        <>

            <tr>
                <td>{index + 1}</td>
                <td> {email}</td>
                <td>{role === 'admin' ? <button className="btn btn-success">Admin</button> : <button onClick={makeAdmin} className="btn btn-info"> Make Admin</button>} </td>
                <td><button className="btn btn-error">Remove User</button></td>
            </tr>
        </>
    );
};

export default UserTable;