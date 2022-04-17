import React from 'react'
import Icon1 from './icons/cv.png';
import Icon2 from './icons/networking.png';
import Icon3 from './icons/job-interview.png';
import Icon4 from './icons/linkedin.png';


import {
    CategoriesCard, 
    CategoriesContainer, 
    CategoriesH1,
    CategoriesH2, 
    CategoriesIcon,
    CategoriesP,
    CategoriesWrapper
} from "../../categories/CategoryElement"

const TipsCategories = () => {
   const tab = [
        {id:1,
        title:"cv tricks",
        offersNumber:120,
        icon:Icon1,
        },
        {id:2,
        title:"Networking",
        offersNumber:"56",
        icon:Icon2,
        },
        {id:3,
        title:"Interview Tricks",
        offersNumber:"120",
        icon:Icon3,
        },
        {id:4,
        title:"Linkedin use",
        offersNumber:"120",
        icon:Icon4,
        }
    ]
  return (
    <CategoriesContainer id="categories">
        <CategoriesH1>Browse Top Tricks </CategoriesH1>
        <CategoriesP style={{textDecorationLine: 'underline'}}>FEATURED TOURS PACKAGES</CategoriesP>
        <CategoriesWrapper>
            {tab.map(i =>  <CategoriesCard>
                <CategoriesIcon src={i.icon} />
                <CategoriesH2 style={{ fontWeight:"bold"}}>{i.title}</CategoriesH2>
                <CategoriesP>{i.offersNumber}</CategoriesP>
            </CategoriesCard>)}
        </CategoriesWrapper>
    </CategoriesContainer>
  )
}

export default TipsCategories