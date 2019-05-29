import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export default class TimeRange extends PureComponent {
    static propTypes = {
        handleTimeRangeChange: PropTypes.func.isRequired,
        range: PropTypes.string,
    }

    static defaultProps = {
        range: 'all_time',
    }

    handleChange = rangeVal => {
        const { range, handleTimeRangeChange } = this.props;
        rangeVal !== range && handleTimeRangeChange(rangeVal);
    }

    render() {
        const { range } = this.props;
        return (
            <Container>
                <div>Time Range:</div>
                <RangeOption 
                    range={range === '24h'} 
                    onClick={() => this.handleChange('24h')}
                >
                    24h
                </RangeOption>
                <RangeOption 
                    range={range === '7d'}
                    onClick={() => this.handleChange('7d')}
                >
                    7 days
                </RangeOption>
                <RangeOption 
                    range={range === '30d'}
                    onClick={() => this.handleChange('30d')}
                >
                    30 days
                </RangeOption>
                <RangeOption 
                    range={range === 'all_time'}
                    onClick={() => this.handleChange('all_time')}
                >
                    All time
                </RangeOption>
            </Container>
        )
    }
}

const Container = styled.div`
    display: flex;
    align-items: baseline;  
    justify-content: space-between;
    margin: 20px 0;
`;

const RangeOption = styled.div`
    border: 1px solid #192b41;
    border-radius: 25px;
    padding: 5px 10px;
    font-size: 14px;
    color: ${({range}) => range && '#FFFFFF' }
    border-color: ${({range}) => range && '#FFFFFF' }
`;