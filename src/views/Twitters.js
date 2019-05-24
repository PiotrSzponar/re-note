import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import GridTemplate from 'templates/GridTemplate';
import Card from 'components/molecules/Card/Card';

const Twitters = ({ twitters }) => (
    <GridTemplate>
        {twitters.map(({ id, created, title, content }) => (
            <Card
                id={id}
                created={created}
                title={title}
                content={content}
                key={id}
            />
        ))}
    </GridTemplate>
);

Twitters.propTypes = {
    twitters: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            created: PropTypes.string.isRequired,
            content: PropTypes.string.isRequired,
        }),
    ),
};

Twitters.defaultProps = {
    twitters: [],
};

const mapStateToProps = ({ twitters }) => ({ twitters });

export default connect(mapStateToProps)(Twitters);
