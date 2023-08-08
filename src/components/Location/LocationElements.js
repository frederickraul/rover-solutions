import styled, { keyframes } from "styled-components";
import theme from "../../const/theme";
import bg from '../../img/bg/pixelmap.png';

const blur = keyframes` 
0% { -webkit-filter: blur(0px);}
4% { -webkit-filter: blur(1px);}
5% { -webkit-filter: blur(0px);}
10% { -webkit-filter: blur(5px);}
15% { -webkit-filter: blur(1px);}
16% { -webkit-filter: blur(0px);}
20% { -webkit-filter: blur(1px);}
21% { -webkit-filter: blur(0px);}
30% { -webkit-filter: blur(5px);}
35% { -webkit-filter: blur(1px);}
40% { -webkit-filter: blur(0px);}
`



export const LocationContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 800px;
    position: relative;
    z-index: 0;

    :before{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(
            180deg, 
            rgba(0, 0, 0, 1) 0%, 
            rgba(0, 0, 0, .9) 100%
            ), 
            linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
        z-index: 1;
    }

     @media screen and (max-width: 768px){
        background: linear-gradient(
            0deg, 
            rgba(0, 0, 0, 0) 0%, 
            rgba(0, 0, 0, 0.4) 100%
            ), 
            linear-gradient(180deg, rgba(255, 255, 255, 0.2) 0%, transparent 100%);
        z-index: 1;
    }
` 

export const LocationBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin-top: 200px;
    width: 75%;
    height: 60%;
    overflow: hidden;
    background-image: url(${bg});
    background-size: cover;
    z-index: 2;
    animation: ${blur} 4s infinite;

    @media screen and (max-width: 480px){
    width: 100%;
    height: 60%;
    margin-top: 220px;


    }
`

export const LocationWrapper = styled.div`
    max-width: 1050px;
    width: 100%;
    z-index: 1;
    display: flex;
    flex-direction: column;
    z-index: 2;
    align-items: baseline;
    margin-top: 250px;
    padding: 20px;

    @media screen and (max-width: 480px){
       margin-top: 200px;
       padding: 0px;

    }
`

export const LocationtextContainer = styled.div`
    display: flex;
    flex-direction: row;

    @media screen and (max-width: 768px){
       flex-direction: column;
    }
   
`
export const LocationTextWrapper = styled.div`
margin: 0;
    padding: 0px 30px 75px 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    text-align: center;

    @media screen and (max-width: 768px){
        padding: 0px;
        flex-direction: column;
    }
`


export const LocationH1 = styled.h1`
    font-size: 65px;
    text-transform: uppercase;
    color: #DDD;
    font-weight: 400;
    letter-spacing: .1em;
    display: flex;
    flex-direction: row;
    align-items: baseline;

    @media screen and (max-width: 768px){
        font-size: 40px;
    }
    @media screen and (max-width: 480px){
        font-size: 35px;
    }
    @media screen and (max-width: 360px){
        font-size: 30px;
    }
`

export const LocationH3 = styled.h1`
    font-size: 25px;
    text-transform: uppercase;
    color: #DDD;
    font-weight: 400;
    letter-spacing: .1em;
    display: flex;
    flex-direction: row;
    align-items: baseline;
    margin-right: 40px;

    @media screen and (max-width: 768px){
        font-size: 20px;
    }
    @media screen and (max-width: 480px){
        font-size: 18px;
        margin-right: 20px;
        margin-bottom: 20px;
    }
    @media screen and (max-width: 360px){
        font-size: 15px;
    }
`

export const LocationP = styled.p`
  padding: 0px 40px;
    margin-top: 15px;
    font-size: 15px;
    font-weight: 450;
    letter-spacing: .1em;
    text-align: left;
    color: #DDD;
    @media screen and (max-width: 768px){
        padding: 0px;
        margin-top: 50px;
        margin-bottom: 50px;

    }
`

export const LocationItems = styled.div`
margin-left: 350px;
   max-width: 550px;
   width: 100%;

   display: flex;
   flex-direction: row;
   justify-content: space-between;
   float: right;

   @media screen and (max-width: 768px){
       margin-top: 50px;
    margin-left: 0;
    flex-wrap: wrap;
    }
   
`
export const LocationRec = styled.div`
    height: 10px;
    margin-left: 10px;
    width: ${({width}) => (width ? width : '10px')};
    background: ${theme.COLORS.PRIMARY};
`
