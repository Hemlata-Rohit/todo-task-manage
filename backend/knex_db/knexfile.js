const knexConfig = {

  development: {
    client: 'pg',
    connection: {
      host: 'localhost',
      user: 'postgres',
      password: '1234',
      database: 'Todo',
    },
    migrations: {
      directory: './migrations',
    },
    seeds: {
      directory: './seeds',
    },
  },
  // ... other environments
};
  export default knexConfig
