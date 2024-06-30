// const testService = require("../services/testService");

async function pingRequest(req, res) {
  console.log(this.testService);
  const response = await this.testService.pingCheck();
  return res.send({ data: response});
}

async function createSubmission(req,res)
{
  console.log(req.body);
  const response = await this.submissionService.addSubmission(req.body);
  return res.status(201).send({
    error:{},
    data:response,
    success:true,
    message:'Created submission successfully'
  })

}

module.exports = { pingRequest, createSubmission };
