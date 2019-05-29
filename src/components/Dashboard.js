import React, { PureComponent } from 'react';
import styled from 'styled-components';

import Header from './Header';
import Bots from './Bots';
import TimeRange from './TimeRange';
import NavMenu from './NavMenu';

import json from '../data';

export default class Dashboard extends PureComponent {
    handleTimeRangeChange = range => {
        localStorage.setItem('range', range);
        this.forceUpdate();
    }

    handleBotSelect = name => {
        localStorage.setItem('selectedBot', name);
        this.forceUpdate();
    }

    render() {
        const {
            balance,
            bots,
            on_hold,
            trading_capital,
            trading_capital_currency,
        } = json;

        const range = localStorage.getItem('range') || 'all_time';
        const selectedBot = localStorage.getItem('selectedBot');
    
        return (
            <Wrapper>
                <Container>
                    <Header 
                        tradingCapital={trading_capital}
                        tradingCurrency={trading_capital_currency}
                        balance={balance}
                        onHold={on_hold}
                    />
                    <Bots
                        bots={bots} 
                        range={range} 
                        selectedBot={selectedBot} 
                        handleBotSelect={this.handleBotSelect}
                    />
                    <TimeRange handleTimeRangeChange={this.handleTimeRangeChange} range={range} />
                </Container>
                <NavMenu />
            </Wrapper>
        )
    }
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    background: #112135;
    @media (max-width: 414px) {
        height: 100vh;
    }
`;

const Container = styled.div`
    padding: 20px;
    height: 100%;
`;