import gql from 'graphql-tag';

export const GetPostDetailQuery = gql `
     query GetPostDetailQuery($id: ID!) {
        post(id: $id) {
            id
            title

        }
    }
`;

export const GetPostsQuery = gql `
  query Posts {
    posts {
        id
        title

    }
  }
`;
