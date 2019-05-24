import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { removeItem as removeItemAction } from 'actions';
import styled, { css } from 'styled-components';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Heading from 'components/atoms/Heading/Heading';
import Button from 'components/atoms/Button/Button';
import LinkIcon from 'assets/icons/link.svg';
import withContext from 'hoc/withContext';

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
        twitterName: '',
    };

    componentDidMount() {
        const { title } = this.props;
        this.setState({
            twitterName: title,
        });
    }

    handleCardClick = () => this.setState({ redirect: true });

    render() {
        const { redirect, twitterName } = this.state;
        const {
            id,
            pageContext,
            title,
            created,
            content,
            removeItem,
        } = this.props;

        if (redirect) {
            return <Redirect to={`${pageContext}/${id}`} />;
        }

        return (
            <StyledWrapper>
                <InnerWrapper
                    activeColor={pageContext}
                    onClick={this.handleCardClick}
                >
                    <StyledHeading as="h2">
                        {pageContext === 'twitters' ? `@${title}` : title}
                    </StyledHeading>
                    <DateInfo>{created}</DateInfo>
                    {pageContext === 'articles' && <StyledLinkCircle />}
                </InnerWrapper>
                {pageContext === 'twitters' && (
                    <StyledAvatar
                        src={`https://avatars.io/twitter/${twitterName}`}
                    />
                )}
                <InnerWrapper flex>
                    <Paragraph>{content}</Paragraph>
                    <StyledButton
                        secondary
                        onClick={() => removeItem(pageContext, id)}
                    >
                        Remove
                    </StyledButton>
                </InnerWrapper>
            </StyledWrapper>
        );
    }
}

Card.propTypes = {
    pageContext: PropTypes.oneOf(['notes', 'twitters', 'articles']),
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    created: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    removeItem: PropTypes.func.isRequired,
};

Card.defaultProps = {
    pageContext: 'notes',
};

const mapDispatchToProps = dispatch => ({
    removeItem: (itemType, id) => dispatch(removeItemAction(itemType, id)),
});

export default connect(
    null,
    mapDispatchToProps,
)(withContext(Card));
