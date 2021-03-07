const { gql } = require('apollo-server-express');

const UserSearch = gql`
    input UserSearch {
        id: IntSearch
        username: TextSearch
        firstName: TextSearch
        lastName: TextSearch
        userRole: IntSearch
        and: [UserSearch]
        or: [UserSearch]
        not: UserSearch
    }
`;

export default UserSearch;
