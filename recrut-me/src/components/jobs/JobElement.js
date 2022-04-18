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
    border: 0.1rem solid #11101080;
    flex-direction: column ;
    flex-direction: flex-start ;
    align-items: center ;
    height: 250px;
    width:300px ;
    padding-left: 80px ;
    padding-right:80px ;
    padding-top:20px ;
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
    font-family: 'Anek Bangla', sans-serif;
    font-size:4rem;
    color: #131A79 ;
    margin-bottom: 1px;
    margin-top:50px ;
    font-weight: bold;

@media screen and (max-width:480px){
    font-size: 2rem ;
    font-family: 'Anek Bangla', sans-serif;
}
`
export const JobsH2 = styled.h2`
    font-family: 'Anek Bangla', sans-serif;
    font-size: 2rem;
    margin-bottom: 5px;
    font-weight: bold;
`

export const JobsH6 = styled.h6`
    font-family: 'Anek Bangla', sans-serif;
    font-size:2rem;
    text-align: center;
    color:black ;
    margin-bottom: 50px;font-weight: bold;
`