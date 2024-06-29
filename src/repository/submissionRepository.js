const Submission=require('../models/submissionModel');

class SubmissionRepository{
    constructor(){
        this.submissionModel=Submission; //instance variable
    }

    async createSubmission()
    {
        const response=this.submissionModel.create(submission);
        return response;
    }
}

module.exports=SubmissionRepository;