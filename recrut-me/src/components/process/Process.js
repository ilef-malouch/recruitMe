import React from 'react'
import Icon1 from '../../images/process/1.jpg';
import Icon2 from '../../images/process/2.jpg';
import Icon3 from '../../images/process/3.jpg';
import {
    ProcessCard, 
    ProcessContainer, 
    ProcessH1,
    ProcessH2, 
    ProcessIcon,
    ProcessH6,
    ProcessWrapper
} from './ProcessElement'

const Process = () => {
   const tab = [
        {id:1,
        title:"1. Search a job",
        description:"When you're searching for jobs, use advanced search options to find jobs by using keywords that match your interests, the type of job you're looking for, and the location where you want to work.",
        icon:Icon1},
        {id:2,
        title:"2. Apply for a job",
        description:"After having chosen the position that best suits your skills, all that remains is to apply and show the recruiter your motivation as well as your desire to land this position.",
        icon:Icon2},
        {id:3,
        title:"3. Get a job",
        description:"Congratulations!! You impressed the recruiter and you got the job thanks to your skills and your passion. It's time to start work and earn money.",
        icon:Icon3},
       
    ]
  return (
    <ProcessContainer id="process">
        <ProcessH1>How it works </ProcessH1>
        <ProcessH6 style={{textDecorationLine:'underline', color: '#69111E'}}>APPLY PROCESS</ProcessH6>
        <ProcessWrapper>
            {tab.map(i =>  <ProcessCard key={i.id}>
                <ProcessIcon src={i.icon} />
                <ProcessH2>{i.title}</ProcessH2>
                <ProcessH6>{i.description}</ProcessH6>
            </ProcessCard>)}
        </ProcessWrapper>
    </ProcessContainer>
  )
}

export default Process