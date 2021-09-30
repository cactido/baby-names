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
    query getUser($id: ID!) {
        getUser(id: $id) {
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

const CREATE_USER = gql`
    mutation createUser($email: String!, $password: String!, $displayName: String!) {
        createUser(email: $email, password: $password, display_name: $displayName) {
            token
        }
    }
`

const GET_AUTH = gql`
    mutation getAuth($email: String!, $password: String!) {
        getAuth(email: $email, password: $password) {
            token
        }
    }
`

export { GET_ALL_USERS, GET_USER, CREATE_USER, GET_AUTH };