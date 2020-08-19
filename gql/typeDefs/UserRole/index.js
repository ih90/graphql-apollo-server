const { gql } = require('apollo-server-express');

const UserRole = gql`
    type UserRole {
        id: Int!
        name: String
        createdAt: Int!
        updatedAt: Int!
    }
    extend type Query {
        userRole(id: Int!): UserRole!
        userRoles: [UserRole]
    }
`;

export default UserRole;
