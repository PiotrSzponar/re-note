import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import GridTemplate from 'templates/GridTemplate';
import Card from 'components/molecules/Card/Card';

const Articles = ({ articles }) => (
    <GridTemplate>
        {articles.map(({ id, title, created, articleUrl, content }) => (
            <Card
                id={id}
                title={title}
                created={created}
                articleUrl={articleUrl}
                content={content}
                key={id}
            />
        ))}
    </GridTemplate>
);

Articles.propTypes = {
    articles: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            content: PropTypes.string.isRequired,
            created: PropTypes.string.isRequired,
            articleUrl: PropTypes.string.isRequired,
        }),
    ),
};

Articles.defaultProps = {
    articles: [],
};

const mapStateToProps = ({ articles }) => ({ articles });

export default connect(mapStateToProps)(Articles);
