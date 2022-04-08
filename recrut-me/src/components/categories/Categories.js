import React from 'react'
import Icon1 from '../../images/categories/coding.png'
import {
    CategoriesCard, 
    CategoriesContainer, 
    CategoriesH1,
    CategoriesH2, 
    CategoriesIcon,
    CategoriesP,
    CategoriesWrapper
} from './CategoryElement'

const Categories = () => {
   const tab = [
        {id:1,
        title:"Technology",
        offersNumber:120,
        icon:Icon1},
        {id:2,
        title:"Medical",
        offersNumber:"56",
        icon:Icon1},
        {id:3,
        title:"Education",
        offersNumber:"120",
        icon:Icon1},
        {id:4,
        title:"Technology",
        offersNumber:"120",
        icon:Icon1},
        {id:5,
        title:"Technology",
        offersNumber:"120",
        icon:Icon1}
    ]
  return (
    <CategoriesContainer id="categories">
        <CategoriesH1>Browse Top Categories </CategoriesH1>
        <CategoriesWrapper>
            {tab.map(i =>  <CategoriesCard>
                <CategoriesIcon src={i.icon} />
                <CategoriesH2>{i.title}</CategoriesH2>
                <CategoriesP>{i.offersNumber}</CategoriesP>
            </CategoriesCard>)}
        </CategoriesWrapper>
    </CategoriesContainer>
  )
}

export default Categories