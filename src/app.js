const fastifyPlugin = require("fastify-plugin");
const servicePlugin = require("./services/servicePlugin");
const repositoryPlugin = require("./repository/repositoryPlugin");

async function app(fastify, options) {
  fastify.register(require("@fastify/cors"));
  fastify.register(require("./Routes/testRoutes"), { prefix: "/test" });
  fastify.register (repositoryPlugin);
  fastify.register(servicePlugin);
}

module.exports = fastifyPlugin(app);
