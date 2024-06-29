const redisConnection = require("../config/redisConfig");

const { Queue } = require("bullmq");

module.exports= new Queue("SubmissionQueue", { connection: redisConnection });
