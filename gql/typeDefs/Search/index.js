const { gql } = require('apollo-server-express');

const TextSearch = gql`
  input TextSearch {
    contains: String,
    beginsWith: String,
    endsWith: String,
    doesNotContain: String,
    doesNotBeginWith: String,
    doesNotEndWith: String,
    in: [String],
    notIn: [String],
    eq: String,
    neq: String,
  }
`;

const IntSearch = gql`
  input IntSearch {
    in: [Int],
    notIn: [Int],
    eq: Int,
    neq: Int,
    lt: Int,
    gt: Int,
    lte: Int,
    gte: Int,
  }
`;

export default [TextSearch, IntSearch];
