const { gql } = require('apollo-server-express');

const jobBenefit = gql`
    type JobBenefit {
        id: Int!
        name: String
        job: Job
        createdAt: Int!
        updatedAt: Int!
    }
    extend type Query {
        jobBenefit(id: Int!): JobBenefit!
        jobBenefits: [JobBenefit]
    }
    extend type Mutation {
        createJobBenefit(
            name: String!
            jobId: Int!
        ): JobBenefit!
        updateJobBenefit(
            id: Int!
            name: String!
            jobId: Int!
        ): JobBenefit!
        deleteJobBenefit(id: Int!): Boolean
        deleteJobBenefits(ids: [Int!]!): Boolean
    }
`;

export default jobBenefit;
