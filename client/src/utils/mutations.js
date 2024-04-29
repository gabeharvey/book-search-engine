// This Imports GQL Function from Apollo Client
import {gql} from '@apollo/client';

// This Executes Login User Mutation to Verify User
export const LOGIN_USER = gql`
    mutation loginUser($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }
`;

// This Executes Add User Mutation to Create a New User
export const ADD_USER = gql`
    mutation addUser($username: String!, $email: String!, $password: String!) {
        addUser(username: $username, email: $email, password:$password) {
            token
            user {
                _id
                username
                email
            }
        }
    }
`;