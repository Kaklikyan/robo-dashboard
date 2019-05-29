import React, { PureComponent } from 'react';
import styled from 'styled-components';

import { IMAGES_PATH } from '../config';

export default class NavMenu extends PureComponent {

    render() {    
        return (
            <Container>
                <NavItem>
                    <ItemImg src={`${IMAGES_PATH}dashboard.png`} />
                    <span style={{color: 'white'}}>Dashboard</span>
                </NavItem>
                <NavItem>
                    <ItemImg src={`${IMAGES_PATH}megabot.png`} /> 
                    Megabot
                </NavItem>
                <NavItem>
                    <ItemImg src={`${IMAGES_PATH}botmarket.png`} /> 
                    Bot market
                </NavItem>
                <NavItem>
                    <ItemImg src={`${IMAGES_PATH}coinprices.png`} /> 
                    Coin prices
                </NavItem>
                <NavItem>
                    <ItemImg src={`${IMAGES_PATH}profile.png`} /> 
                    Profile
                    <Tooltip>3</ Tooltip>
                </NavItem>
            </Container>
        )
    }
}

const Container = styled.div`
    display: flex;
    align-items: baseline;
    justify-content: space-around;
    padding: 10px 0;
    background: #18283c;
`;

const ItemImg = styled.img`
    width: 28px;
    display: block;
    margin: 0 auto 5px;
`;

const NavItem = styled.div`
    position: relative;
    font-weight: normal;
`;  

const Tooltip = styled.div`
    position: absolute;
    top: -12px;
    right: -3px;
    border-radius: 12px;
    background: #fb9818;
    color: white;
    width: 22px;
    display: flex;
    justify-content: center;
    height: 22px;
    align-items: center;
`;