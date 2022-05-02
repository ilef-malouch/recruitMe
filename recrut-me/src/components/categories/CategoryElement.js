import styled from 'styled-components';

export const CategoriesContainer = styled.div`
    display: flex ;
    flex-direction: column ;
    justify-content: center ;
    align-items: center ;
    padding: 20px;
    margin-bottom: 40px ;
    margin-top:50px ;

    @media screen and (max-width: 768px){
        height: 1800px;
        margin-top:50px ;
    }

    @media screen and (max-width: 480px){
        height: 1800px;
        margin-top:50px ;
    }
`
export const CategoriesWrapper = styled.div`
    max-width:1000px;
    margin: 0 auto ;
    display: grid ;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    align-items: center ;
    grid-gap: 16px;

    @media screen and (max-width: 1000px){
        grid-template-columns: 1fr 1fr ;
    }

    @media screen and (max-width: 768px){
        grid-template-columns: 1fr ;
        padding: 0 20px ;
    }
`

export const CategoriesCard = styled.div`
    border: 0.1rem solid #80808045;
    display: flex ;
    flex-direction: column ;
    flex-direction: flex-start ;
    align-items: center ;
    height: 250px;
    width: 250px;
    padding-left: 80px ;
    padding-right: 80px ;
    padding-top:30px ;
    margin-top:20px ;
    transition: all 0.2s ease-in-out ;
    box-shadow: 0 2px 3px #00000026 ;
    border-radius: 5px ;
    background-color: #f1f1f1b8;

    &:hover {
        transform: rotateY(360deg) ;
        transition: all 1s ease-in-out ;
        cursor: pointer ;    
    }

`

export const CategoriesIcon = styled.img`
    height: 70px ;
    width: 70px ;
    margin-bottom:20px ;
    margin-top: 1px ;
`

export const CategoriesH1 = styled.h1`
    font-family: sans-serif;
    font-size:3rem;
    margin-bottom: 1px;
    color: #474748 ;

    @media screen and (max-width:480px){
        font-size: 1.5rem ;
        font-family:sans-serif ;
    }
`
export const CategoriesH2 = styled.h2`
    font-family: sans-serif;
    font-size: 1.2rem;
    margin-bottom: 5px;
    text-align: center ;
    color:black
`

export const CategoriesH6 = styled.h6`
    margin-bottom: 50px;
    font-family: sans-serif;
    font-size:1.25rem;
    text-align: center;
    color:#28a755 ;
`