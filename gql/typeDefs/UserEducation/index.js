const { gql } = require('apollo-server-express');

const userEducation = gql`
    type UserEducation {
        id: Int!
        institution: String
        description: String
        user: User
        startDate: String
        endDate: String
    }
    extend type Query {
        userEducation(id: Int!): UserEducation!
        userEducations: [UserEducation]
    }
    extend type Mutation {
        createUserEducation(
            institution: String
            description: String
            userId: Int!
            startDate: String
            endDate: String
        ): UserEducation!
        updateUserEducation(
            id: Int!
            institution: String
            description: String
            userId: Int
            startDate: String
            endDate: String
        ): UserEducation!
        deleteUserEducation(
            id: [Int!]!
        ): Boolean
        deleteUserEducations(
            ids: [Int!]!
        ): Boolean
    }
`;

export default userEducation;
