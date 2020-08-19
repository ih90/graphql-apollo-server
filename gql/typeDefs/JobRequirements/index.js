const { gql } = require('apollo-server-express');

const jobRequirements = gql`
    type JobRequirement {
        id: Int!
        name: String
        job: Job
        createdAt: Int!
        updatedAt: Int!
    }
    extend type Query {
        jobRequirement(id: Int!): JobRequirement!
        jobRequirements: [JobRequirement]
    }
    extend type Mutation {
        createJobRequirement(
            name: String!
            jobId: Int!
        ): JobRequirement!
        updateJobRequirement(
            id: Int!
            name: String
            jobId: Int
        ): JobRequirement!
        deleteJobRequirement(id: Int!): Boolean
        deleteJobRequirements(ids: [Int!]!): Boolean
    }
`;

export default jobRequirements;
