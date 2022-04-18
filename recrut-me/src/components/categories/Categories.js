import React from 'react'
import Icon1 from '../../images/categories/programming.png';
import Icon2 from '../../images/categories/medical.png';
import Icon3 from '../../images/categories/business.png';
import Icon4 from '../../images/categories/banking.png';
import Icon5 from '../../images/categories/archi.png';
import Icon6 from '../../images/categories/education.png';
import {
    CategoriesCard, 
    CategoriesContainer, 
    CategoriesH1,
    CategoriesH2, 
    CategoriesIcon,
    CategoriesH6,
    CategoriesWrapper
} from './CategoryElement'

const Categories = () => {
   const tab = [
        {id:1,
        title:"Developpement",
        offersNumber:120,
        icon:Icon1},
        {id:2,
        title:"Medical",
        offersNumber:"56",
        icon:Icon2},
        {id:3,
        title:"Business",
        offersNumber:"120",
        icon:Icon3},
        {id:4,
        title:"Banking",
        offersNumber:"120",
        icon:Icon4},
        {id:5,
        title:"Architecture",
        offersNumber:"120",
        icon:Icon5},
        {id:6,
        title:"Education",
        offersNumber:"120",
        icon:Icon6}
    ]
  return (
    <CategoriesContainer id="categories">
        <CategoriesH1>Browse Top Categories </CategoriesH1>
        <CategoriesH6 style={{textDecorationLine: 'underline'}}>FEATURED TOURS PACKAGES</CategoriesH6>
        <CategoriesWrapper>
            {tab.map(i =>  <CategoriesCard key={i.id}>
                <CategoriesIcon src={i.icon} />
                <CategoriesH2>{i.title}</CategoriesH2>
                <CategoriesH6>{i.offersNumber}</CategoriesH6>
            </CategoriesCard>)}
        </CategoriesWrapper>
    </CategoriesContainer>
  )
}

export default Categories