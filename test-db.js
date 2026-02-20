const { Client } = require('pg');
const fs = require('fs');
const path = require('path');

// Manually parse .env
const envPath = path.join(__dirname, '.env');
const envContent = fs.readFileSync(envPath, 'utf8');
const envConfig = {};
envContent.split('\n').forEach(line => {
    const [key, value] = line.split('=');
    if (key && value) {
        envConfig[key.trim()] = value.trim();
    }
});

const connectionString = envConfig.DATABASE_URI;

if (!connectionString) {
    console.error('DATABASE_URI not found in .env');
    process.exit(1);
}

console.log('Testing connection to:', connectionString.replace(/:[^:@]*@/, ':****@'));

const client = new Client({
    connectionString: connectionString,
});

async function testConnection() {
    try {
        await client.connect();
        console.log('Successfully connected to the database!');
        const res = await client.query('SELECT NOW()');
        console.log('Current Database Time from DB:', res.rows[0].now);
        await client.end();
    } catch (err) {
        console.error('Connection failed:', err);
        process.exit(1);
    }
}

testConnection();
