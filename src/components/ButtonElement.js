import styled from 'styled-components';
import { Link } from 'react-scroll';
import theme from '../const/theme';

export const Button = styled(Link)`
    border: 0.3rem solid ${({ primary }) => (primary ? '#111111' : theme.COLORS.PRIMARY)};
    text-transform: uppercase;
    white-space: nowrap;
    padding: ${({ big }) => (big ? '7px 10px' : '5px 10px')};
    color: ${({ dark }) => (dark ? theme.COLORS.PRIMARY : '#FFFFFF')};
    font-family: 'Barlow Condensed', sans-serif; 
    font-size: ${({ big }) => (big ? '1.15em' : '1em')};
    font-weight: 500;
    outline: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
    &:hover{
        transition: all 0.2s ease-in-out;
        background-color: ${({ primary }) => (primary ? 'rgba(0,0,0,0.7)' : theme.COLORS.PRIMARY)};
        color: white;
        
    }

    @media screen and (max-width: 360px){
        padding: ${({ big }) => (big ? '14px 48px' : '10px 20px')};
        color: ${({ dark }) => (dark ? '#010606' : '#fff')};
        font-size: ${({ big }) => (big ? '16px' : '12px')};
    }
    @media screen and (max-width: 480px){
        width: ${({ fullwidth }) => (fullwidth ? '100%' : 'auto')};

    }
` 