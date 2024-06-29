const submissionQueue=require("../queues/SampleQueue");

module.exports= async function(payload)
{
    await submissionQueue.add("SubmissionJob", payload);
    console.log("Added the job successfully");
    
}