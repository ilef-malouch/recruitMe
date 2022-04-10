import styled from 'styled-components';

export const ProcessContainer = styled.div`
    
    display: flex ;
    flex-direction: column ;
    justify-content: center ;
    align-items: center ;
    margin-bottom: 100px ;

    @media screen and (max-width: 768px){
        height: 1100px;
    }

    @media screen and (max-width: 480px){
        height: 1300px;
    }
`
export const ProcessWrapper = styled.div`
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

export const ProcessCard = styled.div`
    border: 0.1rem solid #11101080;
    display: flex ;
    flex-direction: column ;
    flex-direction: flex-start ;
    align-items: center ;
    max-height: 340px;
    padding: 50px ;
    padding-bottom: 10px;
    transition: all 0.2s ease-in-out ;
    box-shadow: 0 2px 3px #00000026 ;


    &:hover {
        transform: rotateY(360deg) ;
        transition: all 1s ease-in-out ;
        cursor: pointer ;    
    }

`

export const ProcessIcon = styled.img`
    height: 90px ;
    width:90px ;
    margin-bottom:5px ;
    background-color: #263068 ;
    border-radius: 50px;
    border: 0.1rem solid #263068;
`

export const ProcessH1 = styled.h1`
    font-family: 'Anek Bangla', sans-serif;
    font-size:2.5rem;
    margin-bottom: 1px;
    margin-top:50px ;
    color: #131A79 ;
    

    @media screen and (max-width:480px){
        font-size: 2rem ;
        font-family: 'Anek Bangla', sans-serif;
    }
`
export const ProcessH2 = styled.h2`
    font-family: 'Anek Bangla', sans-serif;
    font-size: 1.3rem;
    margin-bottom: 5px;
    margin-top: 30px ;
    color:#69111E;
`

export const ProcessP = styled.p`
    margin-bottom: 50px;
    font-family: 'Anek Bangla', sans-serif;
    font-size:1.2rem;
    text-align: center;
    color:black ;
`