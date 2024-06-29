const dotenv=require('dotenv');
dotenv.config();

module.exports = {
  PORT: process.env.PORT,
  REDIS_HOST: process.env.REDIS_HOST || "127.0.0.1",
  REDIS_PORT: process.env.REDIS_PORT || ":6379"
};