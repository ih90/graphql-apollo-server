const { gql } = require('apollo-server-express');

const userSkill = gql`
    type UserSkill {
        id: Int!
        user: User
        skill: Skill
        rating: Int
    }
    extend type Query {
        userSkill(id: Int!): UserSkill!
        userSkills: [UserSkill]
    }
    extend type Mutation {
        createUserSkill(
            userId: Int!
            skillId: Int!
            rating: Int!
        ): UserSkill!
        updateUserSkill(
            id: Int!
            userId: Int
            skillId: Int
            rating: Int
        ): UserSkill!
        deleteUserSkill(
            id: [Int!]!
        ): Boolean
        deleteUserSkills(
            ids: [Int!]!
        ): Boolean
    }
`;

export default userSkill;
