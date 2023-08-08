import styled from 'styled-components';
import theme from '../../const/theme';


export const ServiceContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #FFFFFF;
    margin-top: 100px;
    height: 600px;

    @media screen and (max-width: 768px){
        height: 850px;
    }

    @media screen and (max-width: 480px){
        height: 700px;
        margin-bottom: 200px;
        
    }
`

export const ServiceWrapper = styled.div`
    max-width: 1050px;
    width: 100%;
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #FFFFFF;

`



export const TechTextWrapper = styled.div`
    padding: 40px 100px;

    @media screen and (max-width: 480px){
        padding: 40px;    
    }
`

export const TechP = styled.p`
    margin-top: 20px;
    font-size: 16px;
    font-weight: 450;
    letter-spacing: .1em;
    text-align: center;
    color: #444444;
`
export const ServiceH1 = styled.h1`
    margin-top: -80px;
    padding: 35px 100px;
    font-size: 65px;
    text-transform: uppercase;
    color: #333333;
    text-align: center;
    font-weight: 400;
    letter-spacing: .1em;

    border-bottom: 10px solid red;


    @media screen and (max-width: 768px){
        font-size: 40px;
    }
    @media screen and (max-width: 480px){
        padding: 35px;
        font-size: 35px;
    }
    @media screen and (max-width: 360px){
        font-size: 30px;
    }

`



export const ServiceRectContainer = styled.div`
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    margin-bottom: -45px;
    margin-right: -90px;
    @media screen and (max-width: 480px){
        margin-right: 0px;

    }
`

export const ServiceRec = styled.div`
    height: 10px;
    margin-left: 10px;
    width: ${({width}) => (width ? width : '10px')};
    background: white;
`

export const ServiceItemsContainer = styled.div`
    display: flex;

    justify-content: space-between;
    margin-bottom: 100px;
    max-width: 1000px;
    width: 100%;
    padding: 40px 0;

    @media screen and (max-width: 768px){
         flex-direction: column;
         justify-content: left;
         padding: 0 40px;
     }
`
export const ServiceItem = styled.div`
display: flex;
border-left: 4px solid ${theme.COLORS.PRIMARY};
padding: 15px 20px;
height: 75px;

@media screen and (max-width: 768px){
        margin-bottom: 10px;
        margin-left: 40px;
}

@media screen and (max-width: 768px){
        margin-bottom: 10px;
        margin-left: 0px;
}

`

export const ServiceH3 = styled.h3`
margin-top: -5px;
    font-size: 1.5rem;
    font-weight: 500;
    letter-spacing: .1em;    
    color: #333;
    text-transform: uppercase;
    @media screen and (max-width: 380px){
        font-size: 1rem;
    }
`

