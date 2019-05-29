import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { IMAGES_PATH } from '../config';

export default class Header extends PureComponent {
    static propTypes = {
        tradingCapital: PropTypes.number,
        tradingCurrency: PropTypes.string,
        balance: PropTypes.number,
        onHold: PropTypes.number,
    }

    static defaultProps = {
        tradingCapital: 0,
        tradingCurrency: '',
        balance: 0,
        onHold: 0,
    }

    render() {
        const { 
            tradingCapital,
            tradingCurrency,
            balance,
            onHold,
        } = this.props;

        return (
            <>
                <TitleBlock>
                    <Img src={`${IMAGES_PATH}menu-icon.png`} /> 
                    <Title>Dashboard</Title>
                    <Img src={`${IMAGES_PATH}refresh.png`} /> 
                </TitleBlock>
                <div>TRADING CAPITAL</div>
                <StatisticsBlock>
                    <Main>
                        {tradingCapital} {tradingCurrency}
                    </Main>
                    <Additional>
                        <ValueContainer style={{marginBottom: '3px'}}>
                            BALANCE: 
                            <ValueWrapper>
                                <Value>{balance}</Value>
                                <ImgSmall src={`${IMAGES_PATH}h-icon.png`} /> 
                            </ValueWrapper>
                        </ValueContainer>
                        <ValueContainer>
                            ON HOLD:
                            <ValueWrapper>
                                <Value>{onHold}</Value>
                                <ImgSmall    src={`${IMAGES_PATH}h-icon.png`} /> 
                            </ValueWrapper>
                        </ValueContainer>
                    </Additional>
                </StatisticsBlock>
            </>
        )
    }
}

const StatisticsBlock = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
`;

const ValueContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;  

const ValueWrapper = styled.div`
    display: flex;
    align-items: center;
`;

const Value = styled.span`
    color: #FFFFFF;
    margin: 0 8px;
`;

const Main = styled.div`
    font-size: 38px;
    text-transform: uppercase;
    color: #FFFFFF;
`;

const Additional = styled.div`
    dispaly: flex;
    justify-content: space-around;
`;

const TitleBlock = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 10px 0 20px;
`;

const Title = styled.div`
    font-size: 24px;
`;

const Img = styled.img`
    display: block;
    width: 28px;
    height: 28px;
`;

const ImgSmall = styled.img`
    display: block;
    width: 18px;
    height: 18px;
`;