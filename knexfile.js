import 'dotenv/config';

export const development = {
  client: process.env.DB_TYPE,
  connection: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
  pool: { min: 0, max: 7 },
};

export const production = {
  client: 'postgres',
  connection: {
    host: '',
    port: 5432,
    database: '',
    user: '',
    password: '',
    ssl: { rejectUnauthorized: false },
  },
  pool: {
    min: 2,
    max: 10
  }
};
