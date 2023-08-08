import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import {HiOutlinePhone, } from 'react-icons/hi';


import {
    FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinkItems,
    FooterLogo,
    FooterH3,
    SmallLogo,
    Logo,
    FooterCallContainer,
    FooterCall,
    FooterLinkTitle,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    WebsiteRights,
} from './FooterElements'

import logo from '../../img/logo2.png';
import theme from '../../const/theme';


const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop()
    }

    return (
        <>
            <FooterContainer id="contact">
                <FooterWrap>
                    <FooterLinksContainer>
                            <FooterLinkItems>
                                <FooterLinkTitle>
                                    Sobre <SmallLogo src={ logo}/> Rovert Solutions

                                </FooterLinkTitle>
                                   <FooterLink>
                                       Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Vestibulum a dictum orci. Sed sed ultrices mauris, non rhoncus
                                        ligula. Cras tincidunt eget leo vitae fringilla.
                                        </FooterLink> 
                                   
                            </FooterLinkItems>

                            <FooterLinkItems>
                                <FooterLinkTitle>Process</FooterLinkTitle>
                                   <FooterLink to="/">Solución ágil</FooterLink> 
                                   <FooterLink to="/">Desarrollo ágil</FooterLink> 
                                   <FooterLink to="/">Implementación ágil</FooterLink> 
                                   <FooterLink to="/">Capacitación ágil</FooterLink> 
                            </FooterLinkItems>
                            <FooterLinkItems>
                                <FooterLinkTitle>Technology</FooterLinkTitle>
                                   <FooterLink to="/">AWS Services</FooterLink> 
                                   <FooterLink to="/">Firestore Services</FooterLink> 
                                   <FooterLink to="/">DevOps</FooterLink> 
                            </FooterLinkItems>

                            <FooterLinkItems>
                                <FooterLinkTitle>Capacitacion</FooterLinkTitle>
                                   <FooterLink to="/">Capacitación pública</FooterLink> 
                                   <FooterLink to="/">Capacitación privada</FooterLink> 
                                   <FooterLink to="/">Capacitación ágil</FooterLink> 
                                   <FooterLink to="/">Capacitación en linea</FooterLink> 
                            </FooterLinkItems>
                    </FooterLinksContainer>
                    <SocialMedia>
                        <SocialMediaWrap>
                        <FooterLogo>
                        <Logo src={logo}/>

                        <FooterH3>
                            Rover Solutions
                        </FooterH3>
                        </FooterLogo>
                        <FooterCallContainer>
                        <div style={styles.arrowLeft}/>                        
                        <FooterCall>
                            <HiOutlinePhone style={{marginLeft: 0, marginRight: 10}}/>
                            (664) 123 - 4568
                        </FooterCall>

                        </FooterCallContainer>
                        </SocialMediaWrap>
                        <WebsiteRights> &copy; {new Date().getFullYear()} All rights reserved.</WebsiteRights>
                    </SocialMedia> 
                </FooterWrap>
            </FooterContainer>
        </>
    )
}

export default Footer

const styles = {
    arrowLeft: {
        width: 0,
        height: 0,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderTopWidth: 7,
        borderRightWidth: 7,
        borderBottomWidth: 7,
        borderLeftWidth: 0,
        borderTopColor: 'transparent',
        borderRightColor: theme.COLORS.PRIMARY,
        borderBottomColor: 'transparent',
        borderLeftColor:'transparent',
        marginLeft:20,
    },
}