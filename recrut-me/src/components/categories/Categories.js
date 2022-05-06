import React from 'react'
import Icon1 from '../../images/categories/icons1.png';
import Icon2 from '../../images/categories/icons2.png';
import Icon3 from '../../images/categories/icons3.png';
import Icon4 from '../../images/categories/icons4.png';
import Icon5 from '../../images/categories/icons5.png';
import Icon6 from '../../images/categories/icons6.png';
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
        title:"Santé",
        offersNumber:"56",
        icon:Icon2},
        {id:3,
        title:"Design, Art & Multimedia",
        offersNumber:"120",
        icon:Icon3},
        {id:4,
        title:"Comptabilité / Finance",
        offersNumber:"120",
        icon:Icon4},
        {id:5,
        title:"Construction / Installation",
        offersNumber:"120",
        icon:Icon5},
        {id:6,
        title:"Restauration / Services d'allimentation",
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