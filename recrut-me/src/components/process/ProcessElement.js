import styled from 'styled-components';

export const ProcessContainer = styled.div`
    
    display: flex ;
    flex-direction: column ;
    justify-content: center ;
    align-items: center ;
    margin-bottom: 40px ;
    margin-top:50px ;
    font-family: sans-serif;

    @media screen and (max-width: 768px){
        height: 1800px;
        margin-top:50px ;
    }

    @media screen and (max-width: 480px){
        height: 1800px;
        margin-top:50px ;
    }
`
export const ProcessWrapper = styled.div`
    max-width:1500px;
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

export const ProcessH1 = styled.h1`
    font-family: sans-serif;
    font-size:3rem;
    margin-bottom: 1px;
    margin-top:50px ;
    color: '#474748' ;

    @media screen and (max-width:480px){
        font-size: 1.5rem ;
        font-family: sans-serif;
    }
`


export const ProcessH6 = styled.h6`
    margin-bottom: 50px;
    font-family: sans-serif;
    font-size:1.5rem;
    text-align: center;
    color:black ;
`