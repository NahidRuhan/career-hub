const getJobApplication = () => {

    const storedJobApplication= localStorage.getItem('job');
    if(storedJobApplication){
        return JSON.parse(storedJobApplication)
    }
    else return [];

}


const savedJobApplication = id => {

    const storedJobApplications = getJobApplication();
    const doesExist = storedJobApplications.find(jobId => jobId === id);
    if(!doesExist){
        storedJobApplications.push(id);
        localStorage.setItem('job',JSON.stringify(storedJobApplications));
    }



}

export {savedJobApplication,getJobApplication}