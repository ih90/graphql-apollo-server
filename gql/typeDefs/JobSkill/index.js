const { gql } = require('apollo-server-express');

const jobSkill = gql`
    type JobSkill {
        id: Int!
        skill: Skill
        job: Job
        rating: Int
        createdAt: Int!
        updatedAt: Int!
    }
    extend type Query {
        jobSkill(id: Int!): JobSkill!
        jobSkills: [JobSkill]
    }
    extend type Mutation {
        createJobSkill(
            skillId: Int!
            jobId: Int!
            rating: Int
        ): JobSkill!
        updateJobSkill(
            id: Int!
            skillId: Int
            jobId: Int
            rating: Int
        ): JobSkill!
        deleteJobSkill(id: Int!): Boolean
        deleteJobSkills(ids: [Int!]!): Boolean
    }
`;

export default jobSkill;
