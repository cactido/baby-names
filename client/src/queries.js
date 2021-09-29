import { gql } from '@apollo/client';

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


const GET_USER = gql`
    query getUser($userId: ID!) {
        getUser(id: $userId) {
            provided_names {
                name
                rating
            }
            selected_names {
                name
                rating
            }
        }
    }
`;

export { GET_ALL_USERS, GET_USER };