import { gql } from '@apollo/client';

const ALL_USERS = gql`
  query allUsers {
    users: allUsers {
      id
      surname: firstName
      name: lastName
      patronymic: maidenName
      age
      gender
      email
      phone
      birthDate
      image
      height
      weight
      address
      company
    }
  }
`;

export { ALL_USERS };
