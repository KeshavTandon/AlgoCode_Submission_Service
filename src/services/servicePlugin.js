
const fastifyPlugin =require('fastify-plugin');
const SubmissionService = require('./submissionService');

async function servicePlugin(fastify,options)
{
    fastify.decorate('submissionService',new SubmissionService(fastify.submissionRepository));
    // console.log(fastify);
}
module.exports=fastifyPlugin(servicePlugin);
