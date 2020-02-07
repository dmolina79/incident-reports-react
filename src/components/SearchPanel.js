import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyleInput = styled.input`
    display: block;
    width: 83%;
    border-style: solid;
    border-color: '#DBDDFF';
    padding: 13px;
    margin: 20px;
    border-radius: 25px;
    text-align: center;
    @media only screen and (max-width: 768px) {
        width: 76%;
    }
    @media only screen and (min-width: 769px) and (max-width: 1000px) {
        width: 81%;
    }
`;

const BorderWrap = styled.div`
    display: block;
    width: 40%;
    margin-bottom: 10px;
    border: 2px solid;
    border-image: 'linear-gradient(45deg, #7c85ff, #fff170) 2';
    @media only screen and (max-width: 600px) {
        width: 300px;
    }
`;
const Module = styled.div`
    background: transparent;
    color: #fff;
    margin-top: 15px;
    font-weight: bolder;
    font-size: 18px;
`;

const Button = styled.button`
    display: block;
    width: 90%;
    background: '#7c85ff';
    color: '#070b3f';
    border-color: '#7c85ff';
    border-radius: 25px;
    padding: 10px;
    margin: 20px;
    font-weight: bolder;
    font-size: 18px;
    :hover {
        background-color: #ff6c6c;
        border-color: #ff6c6c;
    }
`;

const Header = styled.div`
    background-image: 'linear-gradient(to bottom right, #000330, #000f5e,#00bbc7)'
    min-height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
`;




class SearchPanel extends Component {
    constructor (props) {
        super(props)
        this.state = {}
    }
    
    render () {
        const { handleClick } = this.props;
        return (
            <Header>
                <BorderWrap>
                    <form>
                        ENTER INCIDENT NO.
                        <StyleInput type="text" id="incident" name="incident" />
                        <Button onClick={handleClick}>SEARCH</Button>
                    </form>
                </BorderWrap>
            </Header>
        )
    }
}

SearchPanel.defaultProps = {
    handleClick: () => console.log('search panel clicked!')
};

SearchPanel.propTypes = {
    handleClick: PropTypes.func.isRequired,
};

export default SearchPanel;