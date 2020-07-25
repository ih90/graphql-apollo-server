'use strict';
const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const sequelizeConfig = require('./config/sequelize');
import typeDefs from '../gql/typeDefs/';
import resolvers from '../gql/models/resolvers';


const app = express();
const path = '/gql';

const ENV = process.env.NODE_ENV || 'development';

const config = require('./config/global')[ENV];
const dbConfig = require('../database/config')[ENV];
config.mysql = dbConfig;

app.set('config', config);
app.set('root', __dirname);
app.set('env', ENV);

const server = new ApolloServer({ typeDefs, resolvers });

sequelizeConfig.init(app);
server.applyMiddleware({ app, path });

// This `listen` method launches a web-server.  Existing apps
// can utilize middleware options, which we'll discuss later.
app.listen({ port: 4001 }, () =>
    console.log(`🚀 Server ready at http://localhost:4001/gql`)
)