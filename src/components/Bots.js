import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { IMAGES_PATH } from '../config';

export default class Bots extends PureComponent {
    static propTypes = {
        bots: PropTypes.array,
        range: PropTypes.string,
        selectedBot: PropTypes.string,
    }

    static defaultProps = {
        bots: [],
        selectedBot: null,
    }

    handleOnBotClick = name => {
        this.props.handleBotSelect(name)
    }

    splitBotsToRows = (arr, rowSize) => {
        const { range, selectedBot } = this.props;
        console.log('range', range)
        const tempArray = [];
        for (let index = 0; index < arr.length; index += rowSize) {
            const slicedArr = arr.slice(index, index + rowSize);
            const group = slicedArr.map((bot, i) => (
                <BotBlock key={bot.name} selectedBot={selectedBot === bot.name} onClick={() => this.handleOnBotClick(bot.name)}>
                    <Img src={`${IMAGES_PATH}${bot.name}.png`} />
                    <BotPercentage val={bot[range]}>{`${bot[range]}%`}</BotPercentage>
                </BotBlock>
            ));
            tempArray.push(<Container key={index}>{group}</Container>);
        }
    
        return tempArray;
    }

    render() {
        const { bots } = this.props;
        const botsGroups = this.splitBotsToRows(bots, 3);
        return (
            <Wrapper>
                {[...botsGroups]}
            </Wrapper>
        )
    }
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const Container = styled.div`
    display: flex;
`;

const BotBlock = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: center;
    align-items: center;
    padding: 16px 0px;
    background: #252d40;
    border-radius: 5px; 
    border: 1px solid #1d2637;
    background-image: ${({selectedBot}) => selectedBot && 'radial-gradient(#1b293e 60%, #1a3450)'}
`;

const Img = styled.img`
    width: 50%;
`;

const BotPercentage = styled.div`
    margin-top: 10px;
    color: ${props => props.val > 0 ? '#5ea853' : '#e8417b'};
`;  