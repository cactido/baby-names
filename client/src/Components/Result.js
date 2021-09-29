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
    const { data: user1Data, error: user1Error } = useQuery(GET_USER, { variables: { userId: '6150c05b7afa685d78a9d919' } });
    const { data: user2Data, error: user2Error } = useQuery(GET_USER, { variables: { userId: '6153b9c8d58bd6ec1fe2340b' } });
     
    if (user1Error && console.log(user1Error));
    if (user2Error && console.log(user2Error));
    
    let user1Names = [];
    let user2Names = [];

    if (user1Data) user1Names = user1Data.getUser.provided_names;
    if (user2Data) user2Names = user2Data.getUser.provided_names;

    console.log('user1Names: ',user1Names);
    console.log('user2Names: ',user2Names);

    return (
        <div>

        </div>
    )
}

export default Result;