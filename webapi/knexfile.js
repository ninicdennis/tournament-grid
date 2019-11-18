
module.exports = {

   development: {
    client: 'pg',
    version: '7.2',
    connection: {
      host : '127.0.0.1',
      port : '32777',
      user : 'docker',
      password : 'docker',
      database : 'docker'
    },
    pool: {
      min: 2,
      max:10,
    },
    migrations: {
      directory: './migrations',
      tableName: 'testing_migration'
    }
   },
 
 };