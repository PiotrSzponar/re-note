import React from 'react';
import { storiesOf } from '@storybook/react';
import Card from './Card';

const cardData = [
    {
        title: 'Wake me up when Vue ends',
        content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
        created: '1 day',
    },
    {
        title: 'Wesbos is the Boss!',
        content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
        created: '1 day',
        twitterName: 'wesbos',
    },
    {
        title: 'React on my mind',
        content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
        articleUrl: 'https://youtube.com/',
        created: '1 day',
    },
];

storiesOf('Molecules/Card', module)
    .add('Note', () => (
        <Card
            cardType="notes"
            title={cardData[0].title}
            created={cardData[0].created}
            content={cardData[0].content}
        />
    ))
    .add('Twitter', () => (
        <Card
            cardType="twitters"
            title={cardData[1].title}
            created={cardData[1].created}
            twitterName={cardData[1].twitterName}
            content={cardData[1].content}
        />
    ))
    .add('Article', () => (
        <Card
            cardType="articles"
            title={cardData[2].title}
            created={cardData[2].created}
            articleUrl={cardData[2].articleUrl}
            content={cardData[2].content}
        />
    ));
