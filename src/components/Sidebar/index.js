import React from 'react'
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
    SideBtnWrap,
    SidebarRoute
} from './sidebarElements'

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='home' onClick={toggle}>Principal</SidebarLink>
                    <SidebarLink to='team' exact="true" offset={-80} onClick={toggle}>Sobre nosotros</SidebarLink>
                    <SidebarLink to='services' exact="true" offset={-80} onClick={toggle}>Servicios</SidebarLink>
                    <SidebarLink to='technology' onClick={toggle}>Technology</SidebarLink>
                    <SidebarLink to='contact' exact="true" offset={-80} onClick={toggle}>Contáctanos</SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar