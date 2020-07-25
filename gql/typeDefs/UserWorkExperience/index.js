const { gql } = require('apollo-server-express');

const userWorkExperience = gql`
    type UserWorkExperience {
        id: Int!
        institution: String
        description: String
        user: User
        startDate: String
        endDate: String
    }
    extend type Query {
        userWorkExperience(id: Int!): UserWorkExperience!
        userWorkExperiences: [UserWorkExperience]
    }
    extend type Mutation {
        createUserWorkExperience(
            institution: String
            description: String
            userId: Int!
            startDate: String
            endDate: String
        ): UserWorkExperience!
        updateUserWorkExperience(
            id: Int!
            institution: String
            description: String
            userId: Int
            startDate: String
            endDate: String
        ): UserWorkExperience!
        deleteUserWorkExperience(
            id: [Int!]!
        ): Boolean
        deleteUserWorkExperiences(
            ids: [Int!]!
        ): Boolean
    }
`;

export default userWorkExperience;
