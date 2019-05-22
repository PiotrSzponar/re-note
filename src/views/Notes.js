import React from 'react';
import UserPageTemplate from 'templates/UserPageTemplate';
import Card from 'components/molecules/Card/Card';

const notesData = [
    {
        title: 'Wake me up when Vue ends',
        content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
        created: '1 day',
    },
    {
        title: 'Como es An Gular?',
        content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
        created: '1 day',
    },
    {
        title: 'Du bist Reactish',
        content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
        created: '5 days',
    },
    {
        title: 'Reactuj się kto moze!',
        content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
        created: '10 days',
    },
];

const Notes = () => (
    <UserPageTemplate pageType="note">
        <>
            {notesData.map(item => (
                <Card
                    cardType="note"
                    title={item.title}
                    created={item.created}
                    content={item.content}
                    key={item.title}
                />
            ))}
        </>
    </UserPageTemplate>
);

export default Notes;
