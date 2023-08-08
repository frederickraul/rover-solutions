import styled from 'styled-components';
import theme from '../../const/theme';


export const TechContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #FFFFFF;

    @media screen and (max-width: 480px){
        height: 600px;
    }
`

export const TechWrapper = styled.div`
    margin-top: -80px;
    max-width: 1050px;
    width: 100%;
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #FFFFFF;
    z-index: 2;


    @media screen and (max-width: 768px){
        justify-content: center;
        margin-top: 0px;

    }

`

export const TechRec = styled.div`
    margin-top: -80px;
    height: 160px;
    width: 5px;
    background-color: ${theme.COLORS.PRIMARY};
    z-index: 200;
    
    @media screen and (max-width: 768px){
        margin-top: -150px;
        width: 8px;
        position: relative;
        height: 250px;
        z-index: 200;
        
    }
`

export const TechTextWrapper = styled.div`
    padding: 40px;
   
    @media screen and (max-width: 480px){
        &:first-child{
        display: none;
        }

    }
`

export const TechP = styled.p`
    margin-top: 20px;
    font-size: 16px;
    font-weight: 450;
    letter-spacing: .1em;
    text-align: center;
    color: #444444;
    
    
    @media screen and (max-width: 480px){
        &:first-child{
        display: none;
        }

    }
`
export const TechH1 = styled.h1`
    font-size: 2.5rem;
    color: #fff;
    margin-bottom: 64px;

    @media screen and (max-width: 480px){
        font-size: 2rem;
    }
`


export const TechIconsContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 100px;

    @media screen and (max-width: 991px){
        flex-wrap: wrap;
        padding: 20px;
    }
`
export const TechIcon = styled.img`
    width: 160px;
    margin: 20px;

    @media screen and (max-width: 768px){
        width: 40%;
        margin: 0 20px;
    }
    @media screen and (max-width: 480px){
        width: 30%;
        margin: 0 20px;
    }
`

