import React from 'react';
import { gql, useQuery } from '@apollo/client';

const Result = () => {
    /*
    const GET_ALL_USERS = gql`
        query getAllUsers {
            getAllUsers {
                id
                display_name
                provided_names {
                    name
                    rating
                    user_id
                }
            }
        }
    `;
    */

    const GET_USER = gql`
                query getUser($userId: ID!) {
                    getUser(id: $userId) {
                    provided_names {
                        name
                    }
                    selected_names {
                        name
                    }
                }
            }
        `;
    // const { data: user1Data } = useQuery(GET_USER, { variables: { userId: '6150c05b7afa685d78a9d919' } } );
    // const { data: user2Data } = useQuery(GET_USER, { variables: { userId: '6153b9c8d58bd6ec1fe2340b' } } );
    // const user1Names = user1Data && user1Data.getUser.provided_names;
    
    const user1Names = [
        {
            name: 'Sara',
            rating: 5
        },
        {
            name: 'Sasha',
            rating: 1
        },
        {
            name: 'Louise',
            rating: 2
        },
        {
            name: 'Tina',
            rating: 4
        },
        {
            name: 'Linda',
            rating: 4
        },
        {
            name: 'Janice',
            rating: 1
        },
        {
            name: 'Willow',
            rating: 1
        },
        {
            name: 'Marge',
            rating: 1
        },
        {
            name: 'Rebecca',
            rating: 3
        },
        {
            name: 'Nancy',
            rating: 5
        }
    ];

    const user2Names = [
        {
            name: 'Sara',
            rating: 2
        },
        {
            name: 'Sasha',
            rating: 4
        },
        {
            name: 'Louise',
            rating: 2
        },
        {
            name: 'Tina',
            rating: 1
        },
        {
            name: 'Linda',
            rating: 4
        },
        {
            name: 'Alina',
            rating: 1
        },
        {
            name: 'Willow',
            rating: 3
        },
        {
            name: 'Bethany',
            rating: 1
        },
        {
            name: 'Rebecca',
            rating: 3
        },
        {
            name: 'Elizabeth',
            rating: 5
        }
    ];

    let results = [];
    let user2NamesOnly = [];
    let avg;

    user2Names.forEach(name => {
        user2NamesOnly.push(name.name)
    })

    user1Names.forEach(nameObject => {
        if (user2NamesOnly.includes(nameObject.name)) {
            avg = (nameObject.rating + user2Names[user2NamesOnly.indexOf(nameObject.name)].rating) / 2;
            results.push({ name: nameObject.name, rating: avg });
        }
    });

    results.sort((a, b) => { return b.rating - a.rating });

    console.log(results);

    return (
        <div>

        </div>
    )
}

export default Result;