const { gql } = require('apollo-server-express');

const country = gql`
    type Country {
        id: Int!
        name: String
    }
    extend type Query {
        country(id: Int!): Country!
        counties: [Country]
    }
`;

export default country;
