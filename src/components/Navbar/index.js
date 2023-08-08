import React, { useState, useEffect } from 'react';
import { FaBars, FaFacebookF, FaWhatsapp } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';
import { IoIosClock, IoIosCall, IoIosMail } from 'react-icons/io'
import { HiOutlineGlobe, HiOutlineClock, HiOutlineMail, HiOutlinePhone, HiPhone} from 'react-icons/hi';

import logo from '../../img/logo.png';
import {
    Nav,
    NavH3,
    NavLogo,
    Logo,
    MobileIcon,
    NavMenuContainer,
    NavMenu,
    NavMenuCode,
    NavItem,
    NavItemCode,
    NavLinks,
    NavLinksCode,
    NavbarHeader,
    HeaderContainer,
    Container,
    NavbarItem,
    NavbarP,
    NavbarMenu,
    MenuContainer,
    ArrowRight,
    NavBtn
} from './NavbarElements';

import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { Button } from '../ButtonElement';

const Navbar = ({ toggle }) => {
    const [hover, setHover] = useState(false);
    const [scrollNav, setScrollNav] = useState(false);

    const onHover = () => {
        setHover(!hover);
    }


    const changeNav = () => {
        if (window.scrollY > 110) {
            setScrollNav(true);
        } if (window.scrollY < 90) {
            setScrollNav(false);
        }
    }
    useEffect(() => {
        let isSubscribed = true;
        if (isSubscribed) {
            window.addEventListener('scroll', changeNav)
        }
        return () => isSubscribed = false;
    }, [])

    const toggleHome = () => {
        scroll.scrollToTop()
    }
    return (
        <>
            <IconContext.Provider value={{size:'1.2em' }}>
                <Nav>
                    <NavbarHeader scrollNav={scrollNav}>
                        <HeaderContainer>
                        <NavbarItem>
                            <HiOutlinePhone />
                            <NavbarP>
                            664 123 4567
                            </NavbarP>
                        </NavbarItem>
                        <NavbarItem>
                            <HiOutlineMail />
                            <NavbarP>
                            contacto@roversolutions.tech
                            </NavbarP>
                        </NavbarItem>
                       
                        </HeaderContainer>
                    </NavbarHeader>

                    <NavbarMenu scrollNav={scrollNav}>
                        <MenuContainer>
                        <Container>
                        <NavLogo to='/' onClick={toggleHome}>
                        <Logo src={ logo}/>
                            <NavH3>Rover Solutions</NavH3>
                            
                        </NavLogo>

                        </Container>
                        <MobileIcon onClick={toggle}>
                            <FaBars />
                        </MobileIcon>

                        <NavMenuContainer>

                        <NavMenu>
                            <NavItem> 
                                <NavLinks
                                    to="home"
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact="true"
                                    offset={-10}
                                    activeClass="active">HOME</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks
                                    to="team"
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact="true"
                                    offset={-100}
                                    activeClass="active">Sobre nosotros</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks
                                    to="services"
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact="true"
                                    offset={-120}
                                    activeClass="active">Servicios</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks
                                    to="technology"
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact="true"
                                    offset={-140}
                                    activeClass="active">Tecnologias</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks
                                    to="contact"
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact="true"
                                    activeClass="active"
                                    >Contactanos</NavLinks>
                            </NavItem>
                            
                        </NavMenu>
                        <NavMenuCode>
                            <NavItemCode> 
                                <NavLinksCode>1101100010101001010010001010011010010100100100101010100100111000011010</NavLinksCode>
                            </NavItemCode>
                            <NavItemCode>
                                <NavLinksCode>1101100010101001010010001010011010010100100100101010100100111000011010</NavLinksCode>
                            </NavItemCode>
                            <NavItemCode>
                                <NavLinksCode>1101100010101001010010001010011010010100100100101010100100111000011010</NavLinksCode>
                            </NavItemCode>
                            <NavItemCode>
                                <NavLinksCode>1101100010101001010010001010011010010100100100101010100100111000011010</NavLinksCode>
                            </NavItemCode>
                            <NavItemCode>
                                <NavLinksCode>1101100010101001010010001010011010010100100100101010100100111000011010</NavLinksCode>
                            </NavItemCode>
                            
                        </NavMenuCode>
                                    </NavMenuContainer>
                        <NavBtn>
                        <Button to="team"
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact="true"
                                    offset={-140}
                                    activeClass="active" 
                                    onMouseEnter={onHover} 
                                    onMouseLeave={onHover}
                                    big="true"
                        >
                        Comenzar con Rover Solutions
                    </Button>
                    </NavBtn>
                    </MenuContainer>
                </NavbarMenu>
                </Nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar
