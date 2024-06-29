const submissionRoutes = require("./submissionRoutes");

async function v1Plugin(fastify,options)
{
    fastify.register(submissionRoutes,{prefix:'/submissions'});
}

module.exports=v1Plugin;