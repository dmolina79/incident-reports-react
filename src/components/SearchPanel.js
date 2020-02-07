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



class SearchPanel extends Component {
    render () {
        const { handleClick } = this.props;
        return (
            <div>
                <form>
                    ENTER INCIDENT NO.
                    <StyleInput type="text" id="incident" name="incident" />
                    <Button onClick={handleClick}>SEARCH</Button>
                </form>
            </div>
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