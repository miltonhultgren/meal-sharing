import knex from 'knex'
import 'dotenv/config';
import * as config from '../../knexfile.js';

// create connection
const myKnex = knex(config[process.env.NODE_ENV  ?? 'development']);

// Check that the connection works
myKnex.raw("SELECT VERSION()").then(() => {
  console.log(`Connection to database successful`);
});

export default myKnex;
