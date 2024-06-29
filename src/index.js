const fastify = require("fastify")({ logger: true });
const app = require("./app");
const connectToDB = require("./config/dbConfig");
const { PORT } = require("./config/serverConfig");


fastify.register(app);

fastify.listen({ port: PORT }, async(err) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  await connectToDB();
  
  console.log(`Server started at port: ${PORT}`);
});
