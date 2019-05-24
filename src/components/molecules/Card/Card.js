import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import styled, { css } from 'styled-components';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Heading from 'components/atoms/Heading/Heading';
import Button from 'components/atoms/Button/Button';
import LinkIcon from 'assets/icons/link.svg';

const StyledWrapper = styled.div`
    border-radius: 5px;
    overflow: hidden;
    box-shadow: 0 10px 30px -10px hsla(0, 0%, 0%, 0.1);
    display: grid;
    grid-template-rows: 100px 1fr;
    position: relative;
`;

const InnerWrapper = styled.div`
    padding: 15px 30px 25px;
    background-color: ${({ activeColor, theme }) =>
        activeColor ? theme[activeColor] : '#fff'};
    position: relative;
    overflow: hidden;

    :first-of-type {
        z-index: 2;
        cursor: pointer;

        ::after {
            content: '';
            position: absolute;
            top: 0;
            right: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(
                to left,
                ${({ activeColor, theme }) =>
                        activeColor ? theme[activeColor] : '#fff'}
                    ${({ activeColor, theme }) =>
                        activeColor && theme[`${activeColor}CardHeading`].from},
                transparent
                    ${({ activeColor, theme }) =>
                        activeColor && theme[`${activeColor}CardHeading`].to}
            );
            pointer-events: none;
        }
    }

    ${({ flex }) =>
        flex &&
        css`
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        `}
`;

const DateInfo = styled(Paragraph)`
    font-weight: ${({ theme }) => theme.bold};
    font-size: ${({ theme }) => theme.fontSize.xs};
    margin: 0;
`;

const StyledHeading = styled(Heading)`
    margin: 10px 0 0;
    white-space: nowrap;
`;

const StyledAvatar = styled.img`
    width: 100px;
    height: 100px;
    background-color: hsl(0, 0%, 100%);
    position: absolute;
    right: 25px;
    top: 20px;
    border: 5px solid ${({ theme }) => theme.twitters};
    border-radius: 50%;
    z-index: 2;
`;

const StyledLinkCircle = styled.div`
    width: 50px;
    height: 50px;
    position: absolute;
    right: 30px;
    top: 50%;
    transform: translateY(-50%);
    background: #fff url(${() => LinkIcon});
    background-size: 50%;
    background-position: 50%;
    background-repeat: no-repeat;
    border-radius: 50%;
    z-index: 2;
`;

const StyledButton = styled(Button)`
    align-self: flex-end;
    margin-top: 30px;
`;

class Card extends Component {
    state = {
        redirect: false,
    };

    handleCardClick = () => this.setState({ redirect: true });

    render() {
        const { redirect } = this.state;
        const {
            id,
            cardType,
            title,
            created,
            twitterName,
            content,
        } = this.props;

        if (redirect) {
            return <Redirect to={`${cardType}/${id}`} />;
        }

        return (
            <StyledWrapper>
                <InnerWrapper
                    activeColor={cardType}
                    onClick={this.handleCardClick}
                >
                    <StyledHeading as="h2">{title}</StyledHeading>
                    <DateInfo>{created}</DateInfo>
                    {cardType === 'articles' && <StyledLinkCircle />}
                </InnerWrapper>
                {cardType === 'twitters' && (
                    <StyledAvatar
                        src={`https://avatars.io/twitter/${twitterName}`}
                    />
                )}
                <InnerWrapper flex>
                    <Paragraph>{content}</Paragraph>
                    <StyledButton secondary>Remove</StyledButton>
                </InnerWrapper>
            </StyledWrapper>
        );
    }
}

Card.propTypes = {
    id: PropTypes.number.isRequired,
    cardType: PropTypes.oneOf(['notes', 'twitters', 'articles']),
    title: PropTypes.string.isRequired,
    created: PropTypes.string.isRequired,
    twitterName: PropTypes.string,
    content: PropTypes.string.isRequired,
};

Card.defaultProps = {
    cardType: 'notes',
    twitterName: null,
};

export default Card;
