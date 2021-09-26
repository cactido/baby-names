const { gql } = require('apollo-server-express');

const typeDefs = gql`
    # schema types
    type User {
        id: ID!
        email: String!
        password: String!
        display_name: String
        partner: String
        provided_names: [ProvidedName]
        selected_names: [SelectedName]
    }
    type ProvidedName {
        name: String!
        rating: Int!
        user_id: ID!
    }
    type SelectedName {
        name: String!
        rating: Int!
    }
    # queries
    type Query {
        getAllUsers: [User]
        getUser(id: ID!): User
        getProvidedNames(id: ID!): [ProvidedName]
        getSelectedNames(id: ID!): [SelectedName]
        getTotalResponses(id: ID!): Int
    }
    # mutations
    type Mutation {
        createUser(
            email: String!
            password: String!
            display_name: String!
            partner: String    
        ): User
        deleteUser(id: ID!): String
        updateDisplayName(id: ID!, display_name: String!): User
        addProvidedName(name: String!, rating: Int!, user_id: ID!): User
        addSelectedName(name: String!, rating: Int!, user_id: ID!): User
    }
`;

module.exports = typeDefs;