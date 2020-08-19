const { gql } = require('apollo-server-express');

const job = gql`
    type Job {
        id: Int!
        name: String
        description: String
        isAvailable: Boolean,
        company: Company
        jobSkills: [JobSkill]
        jobRequirements: [JobRequirement]
        jobBenefits: [JobBenefit]
        createdAt: Int!
        updatedAt: Int!
    }
    extend type Query {
        job(id: Int!): Job!
        jobs: [Job]
    }
    extend type Mutation {
        createJob(
            name: String!
            description: String
            isAvailable: Boolean,
            companyId: Int!
        ): Job!
        updateJob(
            id: Int!
            name: String
            description: String
            isAvailable: Boolean,
            companyId: Int
        ): Job!
        deleteJob(id: Int!): Boolean
        deleteJobs(ids: [Int!]!): Boolean
    }
`;

export default job;
