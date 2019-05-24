import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Input from 'components/atoms/Input/Input';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import UserPageTemplate from './UserPageTemplate';

const StyledWrapperGrid = styled.div`
    padding: 40px 150px 70px 70px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 55px;
    background-color: ${({ theme }) => theme.grey50};
`;

const StyledPageHeader = styled.div`
    padding: 50px 150px 30px 70px;
    border-bottom: ${({ theme }) => theme.line};
    background-color: #fff;
`;

const StyledHeading = styled(Heading)`
    margin: 25px 0 0 0;

    ::first-letter {
        text-transform: uppercase;
    }
`;

const StyledParagraph = styled(Paragraph)`
    margin: 0;
    font-weight: ${({ theme }) => theme.bold};
`;

const GridTemplate = ({ children, pageType }) => (
    <UserPageTemplate pageType={pageType}>
        <StyledPageHeader>
            <Input search placeholder="Search" />
            <StyledHeading big>{pageType}</StyledHeading>
            <StyledParagraph>6 notes</StyledParagraph>
        </StyledPageHeader>
        <StyledWrapperGrid>{children}</StyledWrapperGrid>
    </UserPageTemplate>
);

GridTemplate.propTypes = {
    children: PropTypes.arrayOf(PropTypes.object).isRequired,
    pageType: PropTypes.oneOf(['notes', 'twitters', 'articles']),
};

GridTemplate.defaultProps = {
    pageType: 'notes',
};

export default GridTemplate;
