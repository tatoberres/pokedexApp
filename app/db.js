const { Client } = require(`pg`);
const client = new Client();
client.connect();
console.log(`✅ DB client connected`);

module.exports = client;