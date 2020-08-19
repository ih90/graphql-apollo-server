const { gql } = require('apollo-server-express');

const userJobApplications = gql`
    type UserJobApplication {
        id: Int!
        job: Job
        user: User
        isAccepted: Boolean
        createdAt: Int!
        updatedAt: Int!
    }
    extend type Query {
        userJobApplication(id: Int!): UserJobApplication!
        userJobApplications: [UserJobApplication]
    }
    extend type Mutation {
        createUserJobApplication(
            userId: Int!
            jobId: Int!
        ): UserJobApplication!
        updateUserJobApplication(
            id: Int!
            userId: Int
            jobId: Int
            isAccepted: Boolean
        ): UserJobApplication!
        deleteUserJobApplication(
            id: [Int!]!
        ): Boolean
        deleteUserJobApplications(
            ids: [Int!]!
        ): Boolean
    }
`;

export default userJobApplications;
