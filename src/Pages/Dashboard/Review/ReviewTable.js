import React from 'react';

const ReviewTable = ({ review, index }) => {
    const { name, rating, description, image } = review;
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
                <td>{rating}</td>
                <td>{description}</td>
            </tr>
        </>
    );
};

export default ReviewTable;