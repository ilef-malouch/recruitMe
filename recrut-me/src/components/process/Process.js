import React from 'react'
import Icon1 from '../../images/categories/coding.png'
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
        icon:Icon1},
        {id:3,
        title:"3. Get a job",
        description:"Sorem spsum dolor sit amsectetur adipisclit, seddo eiusmod tempor incididunt ut laborea.",
        icon:Icon1},
       
    ]
  return (
    <ProcessContainer id="process">
        <ProcessH1>Browse Top Categories </ProcessH1>
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