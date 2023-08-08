import React from 'react'
import { Button } from '../ButtonElement';
import {
    LocationBg, 
    LocationContainer,
    LocationWrapper,
    LocationTextWrapper,
    LocationH1,
    LocationH3,
    LocationP,
    LocationItems,
    LocationRec,
    LocationtextContainer
} from './LocationElements';
const Location = () => {
    return (
       <LocationContainer>
           <LocationBg/>
            <LocationWrapper>
                <LocationTextWrapper>
                <LocationH1>
                    Ubicación
                    <LocationRec/>
                </LocationH1>
                    <LocationP>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum a dictum orci. Sed sed ultrices mauris, non rhoncus
                ligula. Cras tincidunt eget leo vitae fringilla.
                    </LocationP>
                    <Button fullwidth style={{height: 50, alignSelf: 'center'}}>
                        Contactactanos
                    </Button>
                </LocationTextWrapper>
                <LocationTextWrapper>
                   <LocationItems>
                   <LocationH3>
                        Tijuana
                    </LocationH3>
                    <LocationH3>
                        Rosarito
                    </LocationH3>
                    <LocationH3>
                        Mexicali
                    </LocationH3>
                    <LocationH3>
                        Ensenada
                    </LocationH3>
                   </LocationItems>
                </LocationTextWrapper>
            </LocationWrapper>
           
        </LocationContainer>
    )
}

export default Location
