import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import GridTemplate from 'templates/GridTemplate';
import Card from 'components/molecules/Card/Card';

const Notes = ({ notes }) => (
    <GridTemplate>
        {notes.map(({ id, title, created, content }) => (
            <Card
                id={id}
                title={title}
                created={created}
                content={content}
                key={id}
            />
        ))}
    </GridTemplate>
);

Notes.propTypes = {
    notes: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            content: PropTypes.string.isRequired,
            created: PropTypes.string.isRequired,
        }),
    ),
};

Notes.defaultProps = {
    notes: [],
};

const mapStateToProps = ({ notes }) => ({ notes });

export default connect(mapStateToProps)(Notes);
