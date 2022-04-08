import styled from 'styled-components';

export const TipsContainer = styled.div`
    height: 500px ;
    display: flex ;
    flex-direction: column ;
    justify-content: center ;
    align-items: center ;
    //background: #010606 ;

    @media screen and (max-width: 768px){
        height: 1100px;
    }

    @media screen and (max-width: 500px){
        height: 1300px;
    }
`
export const TipsWrapper = styled.div`
    max-width:1000px;
    margin: 0 auto ;
    display: grid ;
    grid-template-columns: 1fr 1fr 1fr ;
    align-items: center ;
    grid-gap: 25px ;
    padding: 0 50px ;

    @media screen and (max-width: 1000px){
        grid-template-columns: 1fr 1fr ;
    }

    @media screen and (max-width: 760px){
        grid-template-columns: 1fr ;
        padding: 0 20px ;
    }
`

export const TipsCard = styled.div`

    border: 0.1rem solid #B0C4DE;
    display: flex ;
    flex-direction: column ;
    flex-direction: flex-start ;
    align-items: center ;
    border-radius: 10px ;
    max-height: 300px;
    padding: 20px ;
    transition: all 0.2s ease-in-out ;
    box-shadow: 0 2px 3px #00000026 ;
    &:hover {
        transform: scale(1.05) ;
        transition: all 0.5s ease-in-out ;
        cursor: pointer ;    
    }

`

export const TipsH1 = styled.h1`
    font-family: Arial ;
    font-size:2.5rem;
    color: #131A79 ;
    margin-bottom: 64px;

    @media screen and (max-width:480px){
        font-size: 2rem ;
        font-family: Arial ;
    }
    `
export const TipsH2 = styled.h2`
    font-family:Arial ;
    font-weight: bold ;
    font-size: 1.3rem;
    margin-bottom: 10px;
    color:#69111E;
`

export const TipsP = styled.p`
    font-family:Arial ;
    font-size:1.2rem;
    text-align: center;
    
`