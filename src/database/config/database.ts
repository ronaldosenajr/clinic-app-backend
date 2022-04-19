require('dotenv').config();

module.exports = {
    username: process.env.DB_USER || 'ronaldojr',
    password: process.env.DB_PASS || '32133831',
    database: process.env.DB_NAME || 'CLINIC_APP',
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || '3306',
    dialect: 'mysql',
    dialectOptions: {
      timezone: 'Z',
    },
    logging: false,
};
