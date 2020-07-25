const { gql } = require('apollo-server-express');

const ContactInfo = gql`
    type ContactInfo {
        id: Int!
        email: String
        phone: String
        city: String
        country: Country
        website: String
        avatarUrl: String
        about: String
    }
    extend type Query {
        contactInfo(id: Int!): ContactInfo!
        contactInfos: [ContactInfo]
    }
    extend type Mutation {
        createContactInfo(
            email: String!
            phone: String!
            city: String!
            countryId: Int!
            website: String
            avatarUrl: String
            about: String
        ): ContactInfo!
        updateContactInfo(
            id: Int!
            email: String
            phone: String
            city: String
            countryId: Int
            website: String
            avatarUrl: String
            about: String
        ): ContactInfo!
        deleteContactInfo(id: Int!): Boolean
        deleteContactInfos(ids: [Int!]!): Boolean
    }
`;

export default ContactInfo;
