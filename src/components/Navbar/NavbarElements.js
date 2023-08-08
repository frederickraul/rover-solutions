import styled, { keyframes } from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';
import { MdKeyboardArrowRight, MdArrowForward } from 'react-icons/md';
import theme from '../../const/theme';

const anim4 = keyframes`
    from{
        margin-top: -100%
    }
    to{
        margin-top: 0%;
    }
`
const anim1 = keyframes`
     from {
         margin-left:0;
         opacity: 1;
         display: block;
         }
    to {
        margin-left:-50px;
        opacity: 0;
        display: none;
        }
`
const anim2 = keyframes`
     from {
         opacity: 0;
         }
    to {
        opacity: 1;
        }
`
const blinker = keyframes`
     50% {
      opacity: 0;
    }
`
const blur = keyframes` 
0% { -webkit-filter: blur(0px);}
4% { -webkit-filter: blur(1px);}
5% { -webkit-filter: blur(0px);}
10% { -webkit-filter: blur(3px);}
15% { -webkit-filter: blur(1px);}
16% { -webkit-filter: blur(0px);}
20% { -webkit-filter: blur(0px);}
20% { -webkit-filter: blur(0px);}
`
const blur2 = keyframes` 
23% { -webkit-filter: blur(0px);}
24% { -webkit-filter: blur(1px);}
25% { -webkit-filter: blur(0px);}
26% { -webkit-filter: blur(5px);}
27% { -webkit-filter: blur(0px);}
28% { -webkit-filter: blur(1px);}
35% { -webkit-filter: blur(0px);}
80% { -webkit-filter: blur(0px);}
81% { -webkit-filter: blur(5px);}
87% { -webkit-filter: blur(0px);}
88% { -webkit-filter: blur(5px);}
89% { -webkit-filter: blur(0px);}
`

export const Nav = styled.nav`
    margin-top: -140px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-size: 1rem;
    position: sticky;
    top: 0%;
    z-index: 10;

    @media screen and (max-width: 960px){
        transition: 0.8s all ease;
    }

    @media screen and (max-width: 768px){
        height:60px;
    }
`
export const NavbarHeader = styled.div`
    display: ${({scrollNav}) => (scrollNav ? 'none' : 'flex')};
    justify-content: center;
    //background-color: rgba(0,0,0,0.8);
    height: 50px;
    z-index: 1;
    width: 100%;
    padding: 10px;
    transition: .5s ease-in-out 0s;
    @media screen and (max-width: 768px){
        display: none;

    }
`

export const HeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    width:100%;
    max-width: 1000px;
    padding-right: 50px;
    margin-top: -100%;
    animation: ${anim4} 2s forwards 1s;

    @media screen and (max-width: 768px){
        display: none;
    }
`
export const Container = styled.div`
    display: flex;
    flex-direction: row;
`

export const NavbarItem = styled.div`
    font-size: 1rem;
    color: #fff;
    padding: 0 .6rem;
    font-family: 'Barlow Condensed', sans-serif;     

    display: flex;
    flex-direction: row;
    &.active{
        border-bottom: 3px solid #01bf71;
    }



`
export const NavbarP = styled.p`
   margin-left: 5px;
   font-family: 'Ubuntu-Regular';
`

export const NavbarMenu = styled.div`
    background-color: ${({scrollNav}) => (scrollNav ? '#000000' : 'transparent')};
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 24px;
    z-index: 1;
    


    @media screen and (max-width: 768px){
        padding: 20px 10px;

    }
    

`
export const MenuContainer = styled.div`
    height: 2.5em;
    display: flex;
    justify-content: space-between;
    width:100%;
    max-width: 1200px;
    background: ${({ scrollNav }) => (scrollNav ? theme.COLORS.PRIMARY : 'transparent')};

`

export const NavLogo = styled(LinkR)`
    justify-self: flex-start;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    cursor: pointer;
    display: flex;
    text-decoration: none;
    margin-top: -100%;
    animation: ${anim4} 2s forwards 1s;


`

export const Logo = styled.img`
    width: 3.5rem;
    height: 3.5rem;
    margin-right: .5rem;
   
   
    @media screen and (max-width: 768px){
        width: 2.5rem;
        height: 2.5rem;
    }

    @media screen and (max-width: 380px){
        width: 3rem;
        height: 3rem;
    }
`

export const NavH3 = styled.h3`
margin-top: -5px;
    font-size: 1.5rem;
    font-family: 'Exo 2', sans-serif;
    color: #fff;
    text-transform: uppercase;
    @media screen and (max-width: 380px){
        font-size: 1rem;
    }
`

export const Img = styled.img`
    height:50px;
    margin: 0 0 10px 0;
    padding-right: 0;
`
export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px){
        display: block;
        color: ${theme.COLORS.PRIMARY};
        position: absolute;
        top: 0px;
        right: 0; 
        transform: translate(-100%, 60%); 
        font-size: 1.8rem;
        cursor: pointer;
    }
    @media screen and (max-width: 380px){
        top: 15px;
        font-size: 1rem;
    }

`
export const NavMenuContainer =styled.div`
     display: flex;
     flex-direction: column;
`

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;
    margin-top: -100%;
    animation: ${anim4} 2s forwards 1s;
    z-index: 1;
    @media screen and (max-width: 768px){
        display: none;
    }
`

export const NavMenuCode = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;
    margin-top: -30px;
    z-index: 0;
    @media screen and (max-width: 768px){
        display: none;
    }
`
export const NavItem = styled.li`
    height:30px;
    animation: ${({noeffect}) => (noeffect ? `` : blur)} 10s infinite; 
`
export const NavItemCode = styled.li`
    height: 30px;
    width: 120px;
    overflow: hidden;

    `

export const NavLinks = styled(LinkS)`
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 0 0 1.5rem;
    height: 100%;
    cursor: pointer;
    font-family: 'Barlow Condensed', sans-serif; 
    letter-spacing: .05em;
    font-weight: 500;
    font-size: 1.1rem;
    text-transform: uppercase;
    transition: .3s ease-in-out 0s;
    color: #dddddd;
    animation-delay: 4s;
    -webkit-animation:${anim2} 6s ;  /* Chrome, Safari, Opera */
    animation: ${anim2} 6s;
    -webkit-animation-timing-function: linear;  /* Chrome, Safari, Opera */
    animation-timing-function: linear;
    border-bottom: ${({whiteline}) => (whiteline ? '3px solid white' : 'none')}; 
    &.active{
        border-bottom: 3px solid ${theme.COLORS.PRIMARY};
    }
    &:hover{
        color: ${theme.COLORS.PRIMARY};
    }
`
export const NavLinksCode = styled(LinkS)`
opacity: 0;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 0 0 1.5rem;
    height: 100%;
    cursor: pointer;
    font-family: 'Barlow Condensed', sans-serif; 
    letter-spacing: .05em;
    font-weight: 500;
    font-size: 1.1rem;
    text-transform: uppercase;
    transition: .3s ease-in-out 0s;
    color: #dddddd;
    animation-delay: 2s;
    -webkit-animation:${anim1} 4s ;  /* Chrome, Safari, Opera */
    animation: ${anim1} 4s;
    -webkit-animation-timing-function: linear;  /* Chrome, Safari, Opera */
    animation-timing-function: linear;
`

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    margin-top: -100%;
    animation: ${anim4} 2s forwards 1s;

    @media screen and (max-width: 768px){
        display: none;
    }
`

export const NavBtnLink = styled(LinkR)`
    border-radius: 5px;
    background-color: #01f471;
    white-space: nowrap;
    color: #010606;
    outline: none;
    border: none;
    padding: .5rem 1rem;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover{
        transition: all 0.2s ease-in-out;
        background-color: #010606;
        color: #01f471;
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