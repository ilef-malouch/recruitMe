import React from 'react'
import img1 from '../../images/categories/coding.png'
import {
    TipsCard, 
    TipsContainer, 
    TipsH1,
    TipsH2, 
    TipsP,
    TipsWrapper
} from './TipsElement'

const Tips = () => {
   const tab = [
        {id:1,
        title:"8 infos à ne pas mettre dans son CV ",
        description:"Sorem spsum dolor sit amsectetur adipisclit, seddo eiusmod tempor incididunt ut laborea.",
        image:img1},
        {id:2,
        title:"8 infos à ne pas mettre dans son CV ",
        description:"Sorem spsum dolor sit amsectetur adipisclit, seddo eiusmod tempor incididunt ut laborea.",
        image:img1},
        {id:3,
        title:"8 infos à ne pas mettre dans son CV ",
        description:"Sorem spsum dolor sit amsectetur adipisclit, seddo eiusmod tempor incididunt ut laborea.",
        image:img1},
       
    ]
  return (
    <TipsContainer id="tips">
        <TipsH1>Tips and advices </TipsH1>
        <TipsWrapper>
            {tab.map(i =>  <TipsCard>
                <TipsH2>{i.title}</TipsH2>
                <TipsP>
                    {i.description} 
                    <a href='##'>Lire la suite</a>
                </TipsP>
            </TipsCard>)}
        </TipsWrapper>
    </TipsContainer>
  )
}

export default Tips