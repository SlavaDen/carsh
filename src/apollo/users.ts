import { gql } from '@apollo/client';

const ALL_USERS = gql`
  query allUsers {
    users: allUsers {
      id
      ip
      lastName
    }
  }
`;

export { ALL_USERS };
