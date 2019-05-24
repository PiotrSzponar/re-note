import React from 'react';
import PropTypes from 'prop-types';
import withContext from 'hoc/withContext';
import styled from 'styled-components';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';
import Heading from 'components/atoms/Heading/Heading';
import { connect } from 'react-redux';
import { addItem as addItemAction } from 'actions';
import { Formik } from 'formik';

const StyledWrapper = styled.div`
    z-index: 5;
    position: fixed;
    right: 0;
    top: 0;
    display: flex;
    flex-direction: column;
    padding: 50px;
    height: 100vh;
    width: 100%;
    max-width: 680px;
    background-color: #fff;
    border-left: 10px solid ${({ activeColor, theme }) => theme[activeColor]};
    box-shadow: -5px 0 15px
        ${({ isVisible }) =>
            isVisible ? 'rgba(0, 0, 0, 0.1)' : 'rgba(0, 0, 0, 0)'};
    transform: translateX(${({ isVisible }) => (isVisible ? '0' : '100%')});
    transition: transform 0.3s;
`;

const StyledHeading = styled(Heading)`
    margin-bottom: 40px;
`;

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
`;

const StyledInput = styled(Input)`
    margin-bottom: 15px;
`;

const StyledTextArea = styled(Input)`
    margin: 0 0 30px;
    border-radius: 20px;
    height: 30vh;
    min-height: 100px;
`;

const NewItemForm = ({ pageContext, isVisible, addItem, handleClose }) => (
    <StyledWrapper activeColor={pageContext} isVisible={isVisible}>
        <StyledHeading big>Add new {pageContext.slice(0, -1)}</StyledHeading>
        <Formik
            initialValues={{
                title: '',
                created: '',
                content: '',
                articleUrl: '',
            }}
            onSubmit={values => {
                addItem(pageContext, values);
                handleClose();
            }}
            render={({ values, handleChange, handleBlur, handleSubmit }) => (
                <StyledForm onSubmit={handleSubmit} autocomplete="off">
                    <StyledInput
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.title}
                        type="text"
                        name="title"
                        placeholder={
                            pageContext === 'twitters'
                                ? 'Twitter Username'
                                : 'Title'
                        }
                    />
                    {pageContext === 'articles' && (
                        <StyledInput
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.articleUrl}
                            type="text"
                            name="articleUrl"
                            placeholder="Article Link"
                        />
                    )}
                    <StyledTextArea
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.content}
                        as="textarea"
                        name="content"
                        placeholder="Content"
                    />
                    <Button activeColor={pageContext} type="submit">
                        Add {pageContext.slice(0, -1)}
                    </Button>
                </StyledForm>
            )}
        />
    </StyledWrapper>
);

NewItemForm.propTypes = {
    pageContext: PropTypes.oneOf(['notes', 'twitters', 'articles']),
    isVisible: PropTypes.bool.isRequired,
    addItem: PropTypes.func.isRequired,
    handleClose: PropTypes.func.isRequired,
};

NewItemForm.defaultProps = {
    pageContext: 'notes',
};

const mapDispatchToProps = dispatch => ({
    addItem: (itemType, itemContent) =>
        dispatch(addItemAction(itemType, itemContent)),
});

export default connect(
    null,
    mapDispatchToProps,
)(withContext(NewItemForm));
