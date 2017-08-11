import gql from 'graphql-tag';

export const RemoveAgentMutation = gql `
    mutation removeAgent($id: ID!) {
        removeAgent(id: $id) {
            id
            title
        }
    }
`;

export const UpdateAgentMutation = gql `
    mutation updateAgent($id: ID!, $data: AgentInput) {
        updateAgent(id: $id, data: $data) {
            id
            title
            content
        }
    }
`;

export const AddAgentMutation = gql `
    mutation addAgent($data: AgentInput!) {
    addAgent(data: $data)
    }
`;