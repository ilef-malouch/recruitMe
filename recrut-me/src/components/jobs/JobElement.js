import styled from 'styled-components';

export const JobsContainer = styled.div`
    display: flex ;
    flex-direction: column ;
    justify-content: center ;
    align-items: center ;
    margin-bottom: 40px ;

    @media screen and (max-width: 768px){
        height: 1100px;
    }

    @media screen and (max-width: 480px){
        height: 1300px;
    }
`
export const JobsWrapper = styled.div`
    max-width:1000px;
    margin: 0 auto ;
    display: grid ;
    grid-template-columns: 1fr 1fr 1fr 1fr ;
    align-items: center ;
    grid-gap: 25px ;
    padding-left: 0 50px ;

    @media screen and (max-width: 1000px){
        grid-template-columns: 1fr 1fr ;
    }

    @media screen and (max-width: 760px){
        grid-template-columns: 1fr ;
        padding: 0 20px ;
    }
`

export const JobsCard = styled.div`
    display: flex ;
    border: 0.1rem solid #80808045;
    flex-direction: column ;
    flex-direction: flex-start ;
    align-items: center ;
    height: 250px;
    width:300px ;
    padding-left: 60px ;
    padding-right:60px ;
    padding-top:30px ;
    margin-left: 20px;
    transition: all 0.2s ease-in-out ;
    box-shadow: 0 2px 3px #00000026 ;
    border-radius: 5px ;

    &:hover {
        transform: scale(1.05) ;
        transition: all 0.5s ease-in-out ;
        cursor: pointer ;    
    }

`

export const JobsIcon = styled.img`
    height: 70px ;
    width:70px ;
    margin-bottom:20px ;
`

export const JobsH1 = styled.h1`
    font-family: sans-serif;
    font-size:3rem;
    color: '#474748' ;
    margin-bottom: 1px;
    margin-top:50px ;

@media screen and (max-width:480px){
    font-size: 1.5rem ;
    font-family: sans-serif;
}
`
export const JobsH2 = styled.h2`
    font-family: sans-serif;
    font-size: 1.2rem;
    margin-bottom: 5px;
    font-weight: bold;
    text-align: center;
`

export const JobsH6 = styled.h6`
    font-family: sans-serif;
    font-size:1.25rem;
    text-align: center;
    color:black ;
    margin-bottom: 50px;
    
`