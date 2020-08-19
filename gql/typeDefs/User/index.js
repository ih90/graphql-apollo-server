const { gql } = require('apollo-server-express');

const User = gql`
    type User {
        id: Int!
        username: String
        firstName: String
        lastName: String
        password: String
        userRole: UserRole
        contactInfo: ContactInfo
        userEducations: [UserEducation]
        userWorkExperiences: [UserWorkExperience]
        userSkills: [UserSkill]
        createdAt: Int!
        updatedAt: Int!
    }
    extend type Query {
        user(id: Int!): User!
        users: [User]
    }
    extend type Mutation {
        createUser(
            username: String!
            firstName: String!
            lastName: String!
            password: String!
            userRoleId: Int!
            contactInfoId: Int
        ): User!
        updateUser(
            id: Int!
            username: String
            firstName: String
            lastName: String
            password: String
            userRoleId: Int
            contactInfoId: Int
        ): User!
        deleteUser(
            id: [Int!]!
        ): Boolean
        deleteUsers(
            ids: [Int!]!
        ): Boolean
    }
`;

export default User;
