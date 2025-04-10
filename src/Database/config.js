async function connect() {
  if (global.connection) return global.connection.connect();

  const { Pool } = require("pg");
  const pool = new Pool({
    connectionString: process.env.CONNECTION_STRING,
  });

  const client = await pool.connect();
  console.log("Connected with database"); // test connection

  client.release();

  global.connection = pool;
  return pool.connect();
}

module.exports = {
  connect,
};
