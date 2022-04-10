import React from 'react'
import Icon1 from '../../images/process/1b.png';
import Icon2 from '../../images/process/2b.png';
import Icon3 from '../../images/process/3b.png';
import {
    ProcessCard, 
    ProcessContainer, 
    ProcessH1,
    ProcessH2, 
    ProcessIcon,
    ProcessP,
    ProcessWrapper
} from './ProcessElement'

const Process = () => {
   const tab = [
        {id:1,
        title:"1. Search a job",
        description:"Sorem spsum dolor sit amsectetur adipisclit, seddo eiusmod tempor incididunt ut laborea.",
        icon:Icon1},
        {id:2,
        title:"2. Apply for a job",
        description:"Sorem spsum dolor sit amsectetur adipisclit, seddo eiusmod tempor incididunt ut laborea.",
        icon:Icon2},
        {id:3,
        title:"3. Get a job",
        description:"Sorem spsum dolor sit amsectetur adipisclit, seddo eiusmod tempor incididunt ut laborea.",
        icon:Icon3},
       
    ]
  return (
    <ProcessContainer id="process">
        <ProcessH1>How it works </ProcessH1>
        <ProcessP style={{textDecorationLine:'underline', color: '#69111E'}}>APPLY PROCESS</ProcessP>
        <ProcessWrapper>
            {tab.map(i =>  <ProcessCard>
                <ProcessIcon src={i.icon} />
                <ProcessH2>{i.title}</ProcessH2>
                <ProcessP>{i.description}</ProcessP>
            </ProcessCard>)}
        </ProcessWrapper>
    </ProcessContainer>
  )
}

export default Process