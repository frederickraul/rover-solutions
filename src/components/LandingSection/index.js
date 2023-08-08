import React, { useState } from 'react'
//import video from '../../video/Code27920.mp4'
//import video from '../../video/Line46957.mp4'
import video from '../../video/bg1Med.mp4'

import bg from '../../img/bg/group.jpg';

//import logo from '../../img/logo/logo1.svg';
import { osName } from 'react-device-detect';


import {
    LandingContainer,
    LandingBg,
    VideoBg,
    LandingContent,
    LandingContentWrapper,
    LandingH1,
    LandingP
   
} from './LandingElements'

const HeroSection = ({isLandscape,fixLandscape}) => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    }

    return (
        <LandingContainer id="home" isLandscape={isLandscape} fixLandscape={fixLandscape}>
            <LandingBg>
                <VideoBg playsInline autoPlay loop muted src={video} type="video/mp4"/>
            </LandingBg>
            <LandingContent>
                <LandingContentWrapper>
                    <LandingH1>
                    SOFTWARE DEVELOPMENT SOLUTIONS
                    </LandingH1>
                    <LandingP>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras porta egestas ligula id ultrices. Proin dictum sem id dolor ornare, eleifend placerat arcu scelerisque. Nulla porttitor pharetra sem, vitae euismod arcu ultrices vel.
                    </LandingP>
                </LandingContentWrapper>
            </LandingContent>
        </LandingContainer>
    )
}

export default HeroSection  
