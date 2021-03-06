import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Heading from 'components/atoms/Heading/Heading';
import Button from 'components/atoms/Button/Button';
import LinkIcon from 'assets/icons/link.svg';
import withContext from 'hoc/withContext';
import UserPageTemplate from './UserPageTemplate';

const StyledWrapper = styled.div`
    margin: 50px 150px 50px 70px;
    border-radius: 5px;
    overflow: hidden;
    box-shadow: 0 10px 30px -10px hsla(0, 0%, 0%, 0.1);
    display: grid;
    grid-template-rows: 0.25fr 1fr;
    position: relative;
`;

const InnerWrapper = styled.div`
    padding: 15px 30px 25px;
    background-color: ${({ activeColor, theme }) =>
        activeColor ? theme[activeColor] : '#fff'};
    position: relative;

    :first-of-type {
        z-index: 2;
        padding-right: ${({ activeColor }) =>
            activeColor === 'notes' ? '0' : '150px'};
    }

    ${({ flex }) =>
        flex &&
        css`
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: flex-start;
        `}
`;

const DateInfo = styled(Paragraph)`
    font-weight: ${({ theme }) => theme.bold};
    font-size: ${({ theme }) => theme.fontSize.s};
    margin: 10px 0 0;
`;

const StyledHeading = styled(Heading)`
    margin: 10px 0 0;
    line-height: 1.2;
`;

const StyledAvatar = styled.img`
    width: 100px;
    height: 100px;
    background-color: hsl(0, 0%, 100%);
    position: absolute;
    right: 25px;
    top: 50%;
    transform: translateY(-50%);
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

const StyledExtLink = styled.a`
    margin: 15px 0 0;
    text-decoration: underline;
    font-weight: ${({ theme }) => theme.bold};

    :link,
    :visited,
    :active {
        color: ${({ theme }) => theme.black};
    }
`;

const StyledButtonLink = styled(Link)`
    margin: 50px 0 0 0;
`;

const DetailsTemplate = ({
    pageContext,
    title,
    created,
    articleUrl,
    content,
}) => (
    <UserPageTemplate>
        <StyledWrapper>
            <InnerWrapper activeColor={pageContext}>
                <StyledHeading big>{title}</StyledHeading>
                <DateInfo>{created}</DateInfo>
                {pageContext === 'articles' && <StyledLinkCircle />}
                {pageContext === 'twitters' && (
                    <StyledAvatar src={`https://avatars.io/twitter/${title}`} />
                )}
            </InnerWrapper>
            <InnerWrapper flex>
                <Paragraph>{content}</Paragraph>
                {pageContext === 'articles' && (
                    <StyledExtLink
                        href={articleUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Go to the article
                    </StyledExtLink>
                )}
                {pageContext === 'twitters' && (
                    <StyledExtLink
                        href={`https://twitter.com/${title}`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Go to the profile
                    </StyledExtLink>
                )}
                <StyledButtonLink to={`/${pageContext}`}>
                    <Button activeColor={pageContext}>Save / Close</Button>
                </StyledButtonLink>
            </InnerWrapper>
        </StyledWrapper>
    </UserPageTemplate>
);

DetailsTemplate.propTypes = {
    pageContext: PropTypes.oneOf(['notes', 'twitters', 'articles']),
    title: PropTypes.string.isRequired,
    created: PropTypes.string.isRequired,
    articleUrl: PropTypes.string,
    content: PropTypes.string.isRequired,
};

DetailsTemplate.defaultProps = {
    pageContext: 'notes',
    articleUrl: null,
};

export default withContext(DetailsTemplate);
