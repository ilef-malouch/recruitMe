import React from 'react'
import logo1 from '../../images/jobs/1.jpg'
import {
    JobsCard, 
    JobsContainer, 
    JobsH1,
    JobsH2, 
    JobsIcon,
    JobsH6,
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
        <JobsH6 style={{textDecorationLine:'underline', color: '#28a755' }}>RECENT JOB</JobsH6>
        <JobsWrapper>
            {tab.map(i =>  <JobsCard key={i.id}>
                <JobsIcon src={i.logo} />
                <JobsH2>{i.title}</JobsH2>
                <JobsH6>{i.name} , {i.place}</JobsH6>
                
            </JobsCard>)}
        </JobsWrapper>
    </JobsContainer>
  )
}

export default Jobs