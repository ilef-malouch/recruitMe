import React from 'react'
import Icon1 from '../../images/process/firmbee-com-gcsNOsPEXfs-unsplash.jpg';
import Icon2 from '../../images/process/kobu-agency-7okkFhxrxNw-unsplash.jpg';
import Icon3 from '../../images/process/alexander-mils-lCPhGxs7pww-unsplash.jpg';
import { 
    ProcessContainer, 
    ProcessH1,
    ProcessH6,
    ProcessWrapper
} from './ProcessElement'
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn } from 'mdb-react-ui-kit';

const Process = () => {
   const tab = [
        {id:1,
        title:"1. Search a job",
        description:"When you're searching for jobs, use advanced search options to find jobs by using keywords that match your interests and the type of job you're looking for.",
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
    <ProcessContainer id="process" style={{backroungImage:"url('https://i.stack.imgur.com/pvXgA.png)"}}>
        <ProcessH1>How it works </ProcessH1>
        <ProcessH6 style={{textDecorationLine:'underline', color: '#28a755'}}>APPLY PROCESS</ProcessH6>
        <ProcessWrapper>
            {tab.map(i =>   
            <MDBCard style={{ maxWidth: '22rem' }}>
                <MDBCardImage src={i.icon} position='top' alt='...' />
                <MDBCardBody>
                    <MDBCardTitle style={{color:'#28a755'}}>{i.title}</MDBCardTitle>
                    <MDBCardText>
                    {i.description}
                    </MDBCardText>
                </MDBCardBody>
            </MDBCard>)}
        </ProcessWrapper>
    </ProcessContainer>
  )
}

export default Process