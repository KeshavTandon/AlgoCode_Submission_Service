const SubmissionProducer=require('../producers/submissionQueueProducer');
class SubmissionService{
  constructor(submissionRepository)
  {
    this.submissionRepository = submissionRepository;
  }
  async pingCheck()
  {
    return 'pong'
  }

  async addSubmission(submissionPayload)
  {
    const submission = await this.submissionRepository.createSubmission(
      submissionPayload
    );
    if(!submission)
      {
        throw {message:"Not able to create submission"};
      }
      console.log(submission);
    const response=await SubmissionProducer(submission);
    return {queueResponse:response,submission};
  }
}

module.exports = SubmissionService;
