const { gql } = require('apollo-server-express');

const Company = gql`
    type Company {
        id: Int!
        name: String
        user: User
        contactInfo: ContactInfo
        createdAt: Int!
        updatedAt: Int!
    }
    extend type Query {
        company(id: Int!): Company!
        companies: [Company]
    }
    extend type Mutation {
        createCompany(
            name: String!
            userId: Int!
            contactInfoId: Int!
        ): Company!
        updateCompany(
            id: Int!
            name: String
            userId: Int
            contactInfoId: Int
        ): Company!
        deleteCompany(id: Int!): Boolean
        deleteCompanies(ids: [Int!]!): Boolean
    }
`;

export default Company;
