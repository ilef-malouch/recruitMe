import styled from 'styled-components';

export const TipsContainer = styled.div`
    
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
export const TipsWrapper = styled.div`
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

export const TipsCard = styled.div`
    border: 0.1rem solid #11101080;
    display: flex ;
    flex-direction: column ;
    flex-direction: flex-start ;
    align-items: center ;
    height: 250px;
    width: 300px;
    padding: 30px ;
    transition: all 0.2s ease-in-out ;
    box-shadow: 0 2px 3px #00000026 ;
    background-image: url("https://images.prismic.io/keljob-fcms/6a4417c8ad49e88050bdc11aac31bef810c435fd_8-infos-a-ne-pas-mettre-dans-son-cv-p.jpg?auto=compress,format");
    background-repeat: no-repeat ;
    background-position: center;


    &:hover {
        transform: scale(1.05) ;
        transition: all 0.5s ease-in-out ;
        cursor: pointer ;    
    }

`

export const TipsH1 = styled.h1`
    font-family: 'Anek Bangla', sans-serif;
    font-size:4rem;
    color: #131A79 ;
    margin-bottom: 30px;
    margin-top:50px ;

    @media screen and (max-width:480px){
        font-size: 2rem ;
        font-family: 'Anek Bangla', sans-serif;
    }
    `
export const TipsH2 = styled.h2`
    font-family: 'Anek Bangla', sans-serif;
    font-weight: bold ;
    font-size: 2rem;
    margin-bottom: 10px;
    color:#69111E;
    text-align: center ;
`

export const TipsP = styled.p`
    font-family: 'Anek Bangla', sans-serif;
    font-size:2rem;
    text-align: center;
    font-weight: bold;
  color: #000000;
    
`