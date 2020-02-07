import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ThemeToggle from 'react-switch';

const StyleInput = styled.input`
    display: block;
    width: 83%;
    border-style: solid;
    border-color: ${props => (props.isDark ? null : '#DBDDFF')};
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
    background: ${props => (props.isDark ? null : '#DBDDFF')};
    border-image: ${props =>
        props.isDark ? 'linear-gradient(45deg, #7c85ff, #fff170) 2' : null};
    @media only screen and (max-width: 600px) {
        width: 300px;
    }
`;
const Module = styled.div`
    background: transparent;
    color: ${props => (props.isDark ? '#fff' : '#000688')};
    margin-top: 15px;
    font-weight: bolder;
    font-size: 18px;
`;
const Button = styled.button`
    display: block;
    width: 90%;
    background: ${props => (props.isDark ? '#7c85ff' : '#000688')};
    color: ${props => (props.isDark ? '#070b3f' : '#fff')};
    border-color: ${props => (props.isDark ? '#7c85ff' : '#000688')};
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
    background-image: ${props =>
        props.isDark
            ? 'linear-gradient(to bottom right, #000330, #000f5e,#00bbc7)'
            : '#fff'};
    min-height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
`;
const StyledToggle = styled(ThemeToggle)`
    margin-right: 24px;
`;
const EmojiToggle = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    font-family: Arial sans-serif;
`;



class SearchPanel extends Component {
    constructor (props) {
        super(props)
        this.state = { isDark: true };
    }

    changeTheme = () => {
        this.setState(state => ({
            isDark: !state.isDark
        }));
    }
    
    render () {
        const { handleClick } = this.props;
        const { isDark } = this.state;
        return (
            <Header isDark={isDark}>
            <BorderWrap isDark={isDark}>
                <form isDark={isDark}>
                    <Module class="module" isDark={isDark}>
                        ENTER INCIDENT NO.
                    </Module>
                    <StyleInput type="text" id="incident" name="incident" />
                    <Button 
                        isDark={isDark}
                        onClick={handleClick}
                    >SEARCH</Button>
                </form>
            </BorderWrap>
            <StyledToggle
                onChange={this.changeTheme}
                checked={isDark}
                onColor="#EDEDED"
                offColor="#000"
                uncheckedIcon={
                    <EmojiToggle role="img" aria-label="moon">
                        {/* eslint-disable-line jsx-a11y/accessible-emoji */}
                        🌙
                    </EmojiToggle>
                }
                checkedIcon={
                    <EmojiToggle role="img" aria-label="sun">
                        {/* eslint-disable-line jsx-a11y/accessible-emoji */}
                        {'☀️'}
                    </EmojiToggle>
                }
            />
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