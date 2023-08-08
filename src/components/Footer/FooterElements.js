import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom';

import theme from '../../const/theme'


export const FooterContainer = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #FFFFFF;

    @media screen and (max-width: 480px){
        height: 600px;
    }

    @media screen and (max-width: 380px){
        height: auto;
    }
`

export const FooterWrap = styled.div`
    max-width: 1050px;
    width: 100%;
    z-index: 1;
    display: flex;
    flex-direction: column;

`
export const FooterLinksContainer = styled.div`
    display: flex; 
    flex-direction: row;
    justify-content: space-between;
    padding: 75px 0;
    border-bottom: 1px solid #333;
    flex-wrap: wrap;

    @media screen and ( max-width: 480px){
        padding: 30px 20px;
        flex-direction: column;
    }
`

export const FooterLinksWrapper = styled.div`
    display: flex;

    @media screen and ( max-width: 820px){
        flex-direction: column;
    }
`

export const FooterLinkItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
    box-sizing: border-box;
    color: #333;
    padding: 0 60px 0 0;

    &:first-child {
    width: 40%;
    }

    @media screen and (max-width: 768px){
        padding: 0 30px 30px 30px;

        &:first-child {
        width: 100%;
        }
    }

    @media screen and (max-width: 480px){
        font-size: 1rem;
        width: 100%;
    }

    @media screen and (max-width: 380px){
        height: auto;
        font-size: 1rem;
        width: 100%;
    }

`

export const FooterLinkTitle = styled.h1`
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 16px;
    text-transform: uppercase;
`

export const SmallLogo = styled.img`
    width: 1rem;
    height: 1rem;
    margin-left: .5rem;
   
   
    @media screen and (max-width: 480px){
        width: 1.2rem;
        height: 1.2rem;
    }
`

export const FooterLink = styled(LinkR)`
    color: #333;
    text-decoration: none;
    margin-bottom: 0.5rem;
    font-size: 18px;

    &:hover{
        color: ${theme.COLORS.PRIMARY};
        transition: 0.3 ease-out;
    }
`
export const SocialMedia = styled.section`
    max-width: 1000px;
    width: 100%;
`
export const SocialMediaWrap = styled.div`
    display: flex;
    justify-content: left;
    align-items: center;
    max-width: 1100px;
    margin: 30px 0 50px 0;

    @media screen and ( max-width: 820px){
        flex-direction: column;
    }

`

export const SocialLogo = styled(LinkR)`
    color: #fff;
    justify-self: start;
    cursor: pointer;
    text-decoration: none;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    font-weight: bold;
`
export const WebsiteRights = styled.small`
   color: #333;
   margin-bottom: 16px;
   width: 100%;
   display: flex;
   justify-content: center;   
`

export const SocialIcons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 240px;
`

export const SocialIconLink = styled.a`
    color: #fff;
    font-size: 24px;
`

export const FooterLogo = styled(LinkR)`
    justify-self: flex-start;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    cursor: pointer;
    display: flex;
    text-decoration: none;
    

`

export const Logo = styled.img`
    width: 3.5rem;
    height: 3.5rem;
    margin-right: .5rem;
   
   
    @media screen and (max-width: 768px){
        width: 3rem;
        height: 3rem;
    }
    
`

export const FooterH3 = styled.h3`
margin-top: -5px;
    font-size: 1.5rem;
    font-family: 'Exo 2', sans-serif;
    color: #333;
    text-transform: uppercase;
    @media screen and (max-width: 380px){
        font-size: 1.5rem;
    }
`
export const FooterCallContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
`
export const FooterCall = styled.p`
    display: flex;
    font-size: 1.1rem;
    font-weight: 600;
    font-family: 'Exo 2', sans-serif;
    color: #FFF;
    text-transform: uppercase;
    background-color: ${theme.COLORS.PRIMARY};
    padding: 5px 10px;
    border: transparent;
    align-items: center;
    @media screen and (max-width: 380px){
        font-size: .8rem;
    }
`