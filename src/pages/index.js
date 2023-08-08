import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import LandingSection from '../components/LandingSection';
import Technology from '../components/Technology';
import Services from '../components/Services';


import { osName } from 'react-device-detect';
import bg from '../img/bg/bg1.jpg';
import Team from '../components/Team';
import Location from '../components/Location';
import Footer from '../components/Footer';

const Home = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [isLandscape, setisLandscape] = useState(false);
    const [fixLandscape, setfixLandscape] = useState(false)
    const [Screen, setScreen] = useState();
    const toggle = () => {
        setIsOpen(!isOpen);
    }


    useEffect(() => {
        let isSubscribed = true;
        if (isSubscribed) {
            window.addEventListener("orientationchange", function() {
                // `this` is now pointing to `window`, not the component. So use `self`.
                setScreenOrientation(this.screen.height, this.screen.width);
                
            }, false);
        }
        return () => isSubscribed = false;
    }, [])


    const setScreenOrientation = (height, width) => {
        if(width > height){
            setfixLandscape(true);
            
            if(width > 767){
                setisLandscape(true);
            }else{
                setisLandscape(false);
            }
        }else{
            setisLandscape(false);
            setfixLandscape(false);

        }

        setScreen({height: height, width: width});
                console.log(Screen);
        console.log(height);
        console.log(width);
      }
    

    return (
        <>
        <div style={styles.cover}>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <LandingSection isLandscape={isLandscape} fixLandscape={fixLandscape}/>
            <Technology/>
            <Services/>
            <Team/>
            <Location/>
            <Footer/>
        </div>
        </>
    
    )
}



const styles = {
    cover: {
        width: '100%',
    }
}
export default Home
