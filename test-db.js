require('dotenv').config();
const { Client } = require('pg');

(async () => {
  try {
    const client = new Client({ connectionString: process.env.DATABASE_URL });
    await client.connect();
    const r = await client.query('SELECT 1 AS ok');
    console.log('DB OK ->', r.rows);
    await client.end();
    process.exit(0);
  } catch (e) {
    console.error('DB ERROR ->', e.message);
    process.exit(1);
  }
})();
