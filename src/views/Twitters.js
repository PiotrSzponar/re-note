import React from 'react';
import GridTemplate from 'templates/GridTemplate';
import Card from 'components/molecules/Card/Card';

const twittersData = [
    {
        id: 1,
        title: 'Wesbos is the Boss!',
        content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
        created: '1 day',
        twitterName: 'wesbos',
    },
    {
        id: 2,
        title: 'Redux guy',
        content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
        created: '1 day',
        twitterName: 'dan_abramov',
    },
    {
        id: 3,
        title: 'React router stuff',
        content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
        created: '5 days',
        twitterName: 'mjackson',
    },
    {
        id: 4,
        title: 'Super animacje!',
        content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
        created: '10 days',
        twitterName: 'sarah_edo',
    },
];

const Twitters = () => (
    <GridTemplate pageType="twitters">
        {twittersData.map(({ id, title, created, twitterName, content }) => (
            <Card
                id={id}
                cardType="twitters"
                title={title}
                created={created}
                twitterName={twitterName}
                content={content}
                key={id}
            />
        ))}
    </GridTemplate>
);

export default Twitters;
