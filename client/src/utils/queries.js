import { gql } from '@apollo/client';

const GET_ME = gql`
    {
        me {
            _id
            display_name
            provided_names {
                name
                rating
                gender
            }
            selected_names {
                name
                rating
                gender
            }
        }
    }
`


const GET_ALL_USERS = gql`
    query getAllUsers {
        getAllUsers {
            _id
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
                gender
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

const ADD_PROVIDED_NAME = gql`
    mutation addProvidedName($name: String!, $rating: Int!, $user_id: ID!, $gender: String!) {
    addProvidedName(name: $name, rating: $rating, user_id: $user_id, gender: $gender) {
        provided_names {
            name
            rating
            gender
        }
    }
}
`

const REMOVE_PROVIDED_NAME = gql`
    mutation removeProvidedName($name: String!) {
        removeProvidedName(name: $name) {
            provided_names {
                name
                rating
                gender
            }
        }
    }
`;

const ADD_SELECTED_NAME = gql`
    mutation addSelectedName($name: String!, $rating: Int!, $user_id: ID!, $gender: String!) {
    addSelectedName(name: $name, rating: $rating, user_id: $user_id, gender: $gender) {
        selected_names {
            name
            rating
            gender
        }
    }
}
`

export { GET_ALL_USERS, GET_USER, CREATE_USER, GET_AUTH, GET_ME, ADD_PROVIDED_NAME, REMOVE_PROVIDED_NAME, ADD_SELECTED_NAME };
