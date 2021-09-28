import React from 'react';
import { gql, useQuery } from '@apollo/client';

const Result = () => {
    const ALL_USERS = gql`
        query {
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
    
    const { loading, error, data } = useQuery(ALL_USERS);
    if (!loading) { console.log(data.getAllUsers[0]); }
    if (error) { console.log(error); }
    return (
        <div>

        </div>
    )
}

export default Result;