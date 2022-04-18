import React from 'react'
import img1 from '../../images/categories/programming.png'
import {
    TipsCard, 
    TipsContainer, 
    TipsH1,
    TipsH2, 
    TipsH6,
    TipsWrapper
} from './TipsElement'

const Tips = () => {
   const tab = [
        {id:1,
        title:"8 infos à ne pas mettre dans son CV ",
        description:"Sorem spsum dolor sit amsectetur adipisclit, seddo eiusmod tempor incididunt ut laborea.   ",
        image:img1},
        {id:2,
        title:"8 infos à ne pas mettre dans son CV ",
        description:"Sorem spsum dolor sit amsectetur adipisclit, seddo eiusmod tempor incididunt ut laborea.   ",
        image:img1},
        {id:3,
        title:"8 infos à ne pas mettre dans son CV ",
        description:"Sorem spsum dolor sit amsectetur adipisclit, seddo eiusmod tempor incididunt ut laborea.   ",
        image:img1},
       
    ]
  return (
    <TipsContainer id="tips">
        <TipsH1>Tips and advices </TipsH1>
        <TipsWrapper>
            {tab.map(i =>  <TipsCard key={i.id} >
                <TipsH2>{i.title}</TipsH2>
                <TipsH6>
                    {i.description} 
                    <a href='##' style={{color: '#131A79'}}>Lire la suite</a>
                </TipsH6>
            </TipsCard>)}
        </TipsWrapper>
    </TipsContainer>
  )
}

export default Tips