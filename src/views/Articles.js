import React from 'react';
import UserPageTemplate from 'templates/UserPageTemplate';
import Card from 'components/molecules/Card/Card';

const articlesData = [
    {
        title: 'React on my mind',
        content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
        articleUrl: 'https://youtube.com/helloroman',
        created: '1 day',
    },
    {
        title: 'Wish you React',
        content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
        articleUrl: 'https://youtube.com/helloroman',
        created: '1 day',
    },
    {
        title: 'You gave React a bad name',
        content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
        articleUrl: 'https://youtube.com/helloroman',
        created: '5 days',
    },
    {
        title: 'Is it React you looking for?',
        content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
        articleUrl: 'https://youtube.com/helloroman',
        created: '10 days',
    },
];

const Articles = () => (
    <UserPageTemplate pageType="article">
        <>
            {articlesData.map(item => (
                <Card
                    cardType="article"
                    title={item.title}
                    created={item.created}
                    articleUrl={item.articleUrl}
                    content={item.content}
                    key={item.title}
                />
            ))}
        </>
    </UserPageTemplate>
);

export default Articles;
