import styled from 'styled-components';
import theme from '../../const/theme';
import bg from '../../img/bg/group.jpg';


export const TeamContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 550px;
    position: relative;
    z-index: 1;

    :before{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(
            180deg, 
            rgba(255, 255, 255, 1) 0%, 
            rgba(255, 255, 255, 0.1) 100%
            ), 
            linear-gradient(180deg, rgba(255, 255, 255, 0.2) 0%, transparent 100%);
        z-index: 1;
    }

     @media screen and (max-width: 768px){
        height: 550px;
        background: linear-gradient(
            0deg, 
            rgba(255, 255, 255, 0) 0%, 
            rgba(0, 0, 0, 0.4) 100%
            ), 
            linear-gradient(180deg, rgba(255, 255, 255, 0.2) 0%, transparent 100%);
        z-index: 2;
    }

    @media screen and (max-width: 480px){
        padding: 0px;
    }
` 

export const TeamBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-image: url(${bg});
    background-size: cover;
    background-position-y: 20%;
`

export const TeamWrapper = styled.div`
    max-width: 1050px;
    width: 100%;
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (max-width: 480px){
        padding: 40px;    }

`

export const TechTextWrapper = styled.div`
    padding: 40px 100px;
`


export const TeamH1 = styled.h1`
    margin-top: -80px;
    padding: 35px 100px;
    font-size: 65px;
    text-transform: uppercase;
    color: #333333;
    text-align: center;
    font-weight: 400;
    letter-spacing: .1em;

    border-bottom: 10px solid red;


    @media screen and (max-width: 768px){
        font-size: 40px;
    }
    @media screen and (max-width: 480px){
        padding: 35px;
        font-size: 35px;
    }
    @media screen and (max-width: 360px){
        font-size: 30px;
    }

`



export const TeamRectContainer = styled.div`
margin-top: 20px;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    margin-bottom: -45px;
    margin-right: -90px;
    @media screen and (max-width: 480px){
        margin-right: 0px;

    }
`

export const TeamRec = styled.div`
    height: 10px;
    margin-left: 10px;
    width: ${({width}) => (width ? width : '10px')};
    background: white;
`

export const TeamItemsContainer = styled.div`
    margin-top: 150px;
    display: flex;
    justify-content: space-between;
    margin-bottom: -170px;
    max-width: 1000px;
    width: 100%;
    padding: 40px 30px;
    height: 320px;
    background-color: ${theme.COLORS.PRIMARY};
    z-index: 5;

    @media screen and (max-width: 768px){
       flex-direction: column;
       justify-content: left;
       height: auto;
    }

    @media screen and (max-width: 480px){
       flex-direction: column;
       justify-content: left;
       margin-top: 0px;
       height: auto;
       padding: 20px 10px;
    }
`
export const TeamItem = styled.div`
display: flex;
flex-direction: column;
border-left: 4px solid ${theme.COLORS.PRIMARY};
padding: 15px 20px;
height: 75px;
max-width: 30%;

@media screen and (max-width: 768px){
    max-width: 100%;
    height: auto;

`

export const TeamH3 = styled.h3`
    margin-top: -5px;
    font-size: 1.7rem;
    font-weight: 500;
    letter-spacing: .1em;    
    color: #DDD;
    text-transform: uppercase;
    @media screen and (max-width: 380px){
        font-size: .5rem;
    }
`

export const TeamText = styled.p`
    margin-top: 20px;
    font-size: 16px;
    font-weight: 450;
    letter-spacing: .1em;
    text-align: center;
    color: #444444;
    padding-left: 10px;

    @media screen and (max-width: 480px){
        display: none;
        }
`
export const TeamP = styled.p`
    margin-top: 20px;
    font-size: 15px;
    font-weight: 450;
    letter-spacing: .1em;
    text-align: left;
    color: #DDD;
`