import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Heading from 'components/atoms/Heading/Heading';
import Button from 'components/atoms/Button/Button';
import LinkIcon from 'assets/icons/link.svg';

const StyledWrapper = styled.div`
    min-height: 380px;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 10px 30px -10px hsla(0, 0%, 0%, 0.1);
    display: grid;
    grid-template-rows: 0.25fr 1fr;
`;

const InnerWrapper = styled.div`
    padding: 15px 30px;
    background-color: ${({ activeColor, theme }) =>
        activeColor ? theme[activeColor] : '#fff'};
    position: relative;

    :first-of-type {
        z-index: 2;
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
    margin: 0 0 10px;
`;

const StyledHeading = styled(Heading)`
    margin: 10px 0 0;
`;

const StyledAvatar = styled.img`
    width: 100px;
    height: 100px;
    position: absolute;
    right: 25px;
    top: 20px;
    border: 5px solid ${({ theme }) => theme.twitter};
    border-radius: 50%;
`;

const StyledLinkButton = styled.a`
    display: block;
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
`;

const Card = ({ cardType }) => (
    <StyledWrapper>
        <InnerWrapper activeColor={cardType}>
            <StyledHeading>Heading one</StyledHeading>
            <DateInfo>3 days</DateInfo>
            {cardType === 'twitter' && (
                <StyledAvatar src="https://source.unsplash.com/random/100x100" />
            )}
            {cardType === 'article' && (
                <StyledLinkButton href="https://google.com/" />
            )}
        </InnerWrapper>
        <InnerWrapper flex>
            <Paragraph>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Adipisci veniam itaque, deserunt a debitis numquam hic rem cum
                soluta ex beatae ad dolore rerum veritatis aliquid. Iure
                deleniti a dolor!
            </Paragraph>
            <Button secondary>Remove</Button>
        </InnerWrapper>
    </StyledWrapper>
);

Card.propTypes = {
    cardType: PropTypes.oneOf(['note', 'twitter', 'article']),
};

Card.defaultProps = {
    cardType: 'note',
};

export default Card;
