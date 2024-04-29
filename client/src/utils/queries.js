// This Imports GQL Function from Apollo Client
import {gql} from '@apollo/client';

// This Defines GraphQL Operation Required for Application
export const GET_ME = gql`
    query {
        me {
            _id
            username
            email
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