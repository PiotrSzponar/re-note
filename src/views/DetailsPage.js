import React from 'react';
import DetailsTemplate from 'templates/DetailsTemplate';

const dummyArticle = {
    id: 1,
    title: 'wesbos',
    content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
    articleUrl: 'https://youtube.com/',
    created: '1 day',
};

const DetailsPage = () => (
    <DetailsTemplate
        title={dummyArticle.title}
        created={dummyArticle.created}
        content={dummyArticle.content}
        articleUrl={dummyArticle.articleUrl}
    />
);

export default DetailsPage;
