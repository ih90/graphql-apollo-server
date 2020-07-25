const { gql } = require('apollo-server-express');

const skill = gql`
    type Skill {
        id: Int!
        name: String
    }
    extend type Query {
        skill(id: Int!): Skill!
        skills: [Skill]
    }
    extend type Mutation {
        updateSkill(
            id: Int!,
            name: String!
        ): Skill!
        createSkill(
            name: String!
        ): Skill!
        deleteSkill(id: Int!): Boolean
        deleteSkills(ids: [Int!]!): Boolean
    }
`;

export default skill;
