import React from 'react';
import UserPageTemplate from 'templates/UserPageTemplate';
import Card from 'components/molecules/Card/Card';

const twittersData = [
    {
        title: 'Wesbos is the Boss!',
        content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
        created: '1 day',
        twitterName: 'wesbos',
    },
    {
        title: 'Redux guy',
        content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
        created: '1 day',
        twitterName: 'dan_abramov',
    },
    {
        title: 'React router stuff',
        content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
        created: '5 days',
        twitterName: 'mjackson',
    },
    {
        title: 'Super animacje!',
        content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
        created: '10 days',
        twitterName: 'sarah_edo',
    },
];

const Twitters = () => (
    <UserPageTemplate pageType="twitter">
        <>
            {twittersData.map(item => (
                <Card
                    cardType="twitter"
                    title={item.title}
                    created={item.created}
                    twitterName={item.twitterName}
                    content={item.content}
                    key={item.title}
                />
            ))}
        </>
    </UserPageTemplate>
);

export default Twitters;
