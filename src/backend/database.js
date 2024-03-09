import knex from 'knex'
import 'dotenv/config';
import * as config from '../../knexfile.js';

// create connection
const myKnex = knex(config[process.env.NODE_ENV]);

// Check that the connection works
myKnex.raw("SELECT VERSION()").then(() => {
  console.log(`connection to db successful!`);
});

export default myKnex;
