import gql from 'graphql-tag';
export const GET_USER = gql`
  query getUser {
    Users {
      createDate
      deactivate
      mainEmail
      name
      oauth {
        provider
        token
      }

      package
      password
      role
      updateDate
      zone
      email
    }
  }
`;
