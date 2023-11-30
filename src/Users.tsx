import React from 'react';

type UsersType = {
    name: string
    age: number
    address: Array<AddressType>
}

type AddressType = {
    country: string
    city: string
}

let users = [
    {
        name: 'Ben',
        age: 15,
        address: {
            country: 'Spain',
            city: 'Barselona'
        }
    },
    {
        name: 'Miranda',
        age: 24,
        address: {
            country: 'Belarus',
            city: 'Brest'
        }
    }
]
export const Users = () => {
    return (
        <div>
            {users[1].address.city}
        </div>
    );
};




