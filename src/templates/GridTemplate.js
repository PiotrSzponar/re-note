import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withContext from 'hoc/withContext';
import styled from 'styled-components';
import Input from 'components/atoms/Input/Input';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import plusIcon from 'assets/icons/plus.svg';
import NewItemForm from 'components/organisms/NewItemForm/NewItemForm';
import UserPageTemplate from './UserPageTemplate';

const StyledWrapperGrid = styled.div`
    position: relative;
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

const StyledButtonIcon = styled(ButtonIcon)`
    background-color: ${({ activeColor, theme }) => theme[activeColor]};
    background-size: 35%;
    position: fixed;
    bottom: 40px;
    right: 40px;
    z-index: 10;
    outline: none;
    transform: rotate(
        ${({ isNewItemFormVisible }) => (isNewItemFormVisible ? '135deg' : '0')}
    );
    transition: transform 0.3s;
`;

class GridTemplate extends Component {
    state = {
        isNewItemFormVisible: false,
    };

    toggleNewItemForm = () => {
        this.setState(prevState => ({
            isNewItemFormVisible: !prevState.isNewItemFormVisible,
        }));
    };

    render() {
        const { children, pageContext } = this.props;
        const { isNewItemFormVisible } = this.state;

        return (
            <UserPageTemplate pageType={pageContext}>
                <StyledPageHeader>
                    <Input search placeholder="Search" />
                    <StyledHeading big>{pageContext}</StyledHeading>
                    <StyledParagraph>6 {pageContext}</StyledParagraph>
                </StyledPageHeader>
                <StyledWrapperGrid>
                    {children}
                    <StyledButtonIcon
                        icon={plusIcon}
                        activeColor={pageContext}
                        onClick={this.toggleNewItemForm}
                        isNewItemFormVisible={isNewItemFormVisible}
                    />
                    <NewItemForm
                        handleClose={this.toggleNewItemForm}
                        isVisible={isNewItemFormVisible}
                    />
                </StyledWrapperGrid>
            </UserPageTemplate>
        );
    }
}

GridTemplate.propTypes = {
    children: PropTypes.arrayOf(PropTypes.object).isRequired,
    pageContext: PropTypes.oneOf(['notes', 'twitters', 'articles']),
};

GridTemplate.defaultProps = {
    pageContext: 'notes',
};

export default withContext(GridTemplate);
