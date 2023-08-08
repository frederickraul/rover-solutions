import styled,{ keyframes } from 'styled-components';
import { MdKeyboardArrowRight, MdArrowForward } from 'react-icons/md';

const anim2 = keyframes`
    from{
            left: -100%;
        }
        to{
            left:0%;
        }
`;

export const LandingContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 100vh;
    position: relative;
    z-index: 1;

    :before{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        
        z-index: 2;

    }

     @media screen and (max-width: 991px){
        width: ${({isLandscape}) => (isLandscape ? '132vw' : '100%')};
        height: ${({fixLandscape}) => (fixLandscape ? '100vw;' : '100vh')};
     }
     
     @media screen and (max-width: 768px){
        background: linear-gradient(
            0deg, 
            rgba(255, 255, 255, 0) 0%, 
            rgba(0, 0, 0, 0.4) 100%
            ), 
            linear-gradient(180deg, rgba(255, 255, 255, 0.2) 0%, transparent 100%);
        z-index: 2;
    }

    @media screen and (max-width: 480px){
            height: 105vh;
    }
` 

export const LandingBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;

`

export const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
`

export const LandingContent = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: rgba(0,0,0,0.8);

`
export const LandingContentWrapper = styled.div`
    z-index: 3;
    max-width: 700px;
    width: 100%;
    position: relative;
    padding: 0;
    flex-direction: column;
    align-items: center;
    left: -100%;
    animation: ${anim2} 2s forwards 0s;
`

export const LandingLogo = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`


export const LandingH1 = styled.h1`
    margin-top: -80px;
    padding: 35px 0;
    font-size: 65px;
    
    color: #DDDDDD;
    text-align: center;
    font-weight: 400;
    letter-spacing: .1em;


    @media screen and (max-width: 768px){
        font-size: 65px;
    }
    @media screen and (max-width: 480px){
        margin-top: 0px;
        font-size: 50px;
    }
    @media screen and (max-width: 360px){
        font-size: 30px;
    }
`


export const LandingP = styled.p`
    margin-top: 15px;
    font-size: 16px;
    max-width: 700px;
    font-weight: 450;
    letter-spacing: .1em;
    color: #DDDDDD;
    text-align: center;

    @media screen and (max-width: 480px){
        display: none;
    }
    
`

export const LandingP2 = styled.p`
    display: none;
    margin-top: 15px;
    color: #fff;
    font-size: 24px;
    max-width: 600px;
    text-shadow: 1px 1px 1px #000;


    @media screen and (max-width: 768px){
        text-align: center;
        display: flex;
        font-size: 24px;
    }
    @media screen and (max-width: 480px){
        font-size: 18px;
    }
`

export const LandingBtnWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 0px;
    padding-left: 145px;
    @media screen and (max-width: 768px){
        margin-top: 50px;
        padding-left: 0;
        justify-content: center;
    }
`

export const ArrowFoward = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 20px;
`

export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size: 20px;
`