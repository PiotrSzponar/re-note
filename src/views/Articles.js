import React from 'react';
import GridTemplate from 'templates/GridTemplate';
import Card from 'components/molecules/Card/Card';

const articlesData = [
    {
        id: 1,
        title: 'React on my mind',
        content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
        articleUrl: 'https://youtube.com/',
        created: '1 day',
    },
    {
        id: 2,
        title: 'Wish you React',
        content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
        articleUrl: 'https://youtube.com/',
        created: '1 day',
    },
    {
        id: 3,
        title: 'You gave React a bad name',
        content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
        articleUrl: 'https://youtube.com/',
        created: '5 days',
    },
    {
        id: 4,
        title: 'Is it React you looking for?',
        content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
        articleUrl: 'https://youtube.com/',
        created: '10 days',
    },
];

const Articles = () => (
    <GridTemplate pageType="articles">
        {articlesData.map(({ id, title, created, articleUrl, content }) => (
            <Card
                id={id}
                cardType="articles"
                title={title}
                created={created}
                articleUrl={articleUrl}
                content={content}
                key={id}
            />
        ))}
    </GridTemplate>
);

export default Articles;
