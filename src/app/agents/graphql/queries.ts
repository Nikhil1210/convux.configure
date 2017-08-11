import gql from 'graphql-tag';

export const GetAgentDetailQuery = gql `
     query GetAgentDetailQuery($id: ID!) {
        agent(id: $id) {
            id
            title
        }
    }
`;

export const GetAgentsQuery = gql `
  query Agents {
    agents {
        id
        title
    }
  }
`;
