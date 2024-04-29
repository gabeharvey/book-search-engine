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

// This Executes Save Book Mutation
export const SAVE_BOOK = gql`
    mutation saveBook($book: SaveBookInput!) {
        saveBook(book: $book) {
            _id
            username
            bookCount
            savedBooks {
                bookId
                title
                authors
                description
                image
                link
            }
        }
    }
`;

// This Executes Remove Book Mutation
export const REMOVE_BOOK = gql`
    mutation removeBook($bookId: String!) {
        removeBook(bookId: $bookId) {
            _id
            username
            bookCount
            savedBooks {
                bookId
                title
                authors
                description
                image
                link
            }
        }
    }
`;