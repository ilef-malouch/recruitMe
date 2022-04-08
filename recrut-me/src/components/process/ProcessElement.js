import styled from 'styled-components';

export const ProcessContainer = styled.div`
    height: 600px ;
    display: flex ;
    flex-direction: column ;
    justify-content: center ;
    align-items: center ;
    background-image: url('https://www.airswift.com/hubfs/How%20to%20conduct%20an%20effective%20job%20search-1.jpg');
    background-repeat: no-repeat;
    background-size: cover;

    @media screen and (max-width: 600px){
        height: 1100px;
    }

    @media screen and (max-width: 500px){
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
background: white ;
//border: 0.1rem solid black;
display: flex ;
flex-direction: column ;
flex-direction: flex-start ;
align-items: center ;
border-radius: 10px ;
max-height: 340px;
padding: 50px ;
box-shadow: 0 1px 3px rgba(0,0,0,0,2) ;
transition: all 0.2s ease-in-out ;
box-shadow: 0 2px 3px #00000026 ;

  
  

&:hover {
    transform: rotateY(360deg) ;
    transition: all 1s ease-in-out ;
    cursor: pointer ;    
}

`

export const ProcessIcon = styled.img`
height: 70px ;
width:70px ;
margin-bottom:10px ;
color: black ;

`

export const ProcessH1 = styled.h1`
font-family: Arial ;
font-size:2.5rem;
color: black ;
margin-bottom: 64px;

@media screen and (max-width:480px){
    font-size: 2rem ;
    font-family:Arial ;
}
`
export const ProcessH2 = styled.h2`
font-family:Arial ;
font-size: 1.3rem;
margin-bottom: 10px;
color:black;
`

export const ProcessP = styled.p`
font-family:Arial ;
font-size:1.2rem;
text-align: center;
color:black ;
`