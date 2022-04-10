import React from 'react'
import logo1 from '../../images/jobs/1.jpg'
import {
    JobsCard, 
    JobsContainer, 
    JobsH1,
    JobsH2, 
    JobsIcon,
    JobsP,
    JobsWrapper
} from './JobElement'

const Jobs = () => {
   const tab = [
        {id:1,
        title:"Digital Marketer",
        place:"Tunis",
        name:"ziggo",
        logo:logo1},
        {id:2,
         title:"Digital Marketer",
         place:"Tunis",
         name:"ziggo",
         logo:logo1},
        {id:3,
        title:"Digital Marketer",
        place:"Tunis",
        name:"ziggo",
        logo:logo1}
    ]
  return (
    <JobsContainer id="categories">
        <JobsH1>Featured Jobs </JobsH1>
        <JobsP style={{textDecorationLine:'underline', color: '#69111E' }}>RECENT JOB</JobsP>
        <JobsWrapper>
            {tab.map(i =>  <JobsCard>
                <JobsIcon src={i.logo} />
                <JobsH2>{i.title}</JobsH2>
                <JobsP>{i.name} , {i.place}</JobsP>
                
            </JobsCard>)}
        </JobsWrapper>
    </JobsContainer>
  )
}

export default Jobs