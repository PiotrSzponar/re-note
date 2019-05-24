const initialState = {
    notes: [
        {
            id: '1',
            title: 'Wake me up when Vue ends',
            content:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
            created: '1 day',
        },
        {
            id: '2',
            title: 'Como es An Gular?',
            content:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
            created: '1 day',
        },
        {
            id: '3',
            title: 'Du bist Reactish',
            content:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
            created: '5 days',
        },
        {
            id: '4',
            title: 'Reactuj się kto moze!',
            content:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
            created: '10 days',
        },
    ],
    twitters: [
        {
            id: '1',
            content:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
            created: '1 day',
            title: 'wesbos',
        },
        {
            id: '2',
            content:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
            created: '1 day',
            title: 'dan_abramov',
        },
        {
            id: '3',
            content:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
            created: '5 days',
            title: 'mjackson',
        },
        {
            id: '4',
            content:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
            created: '10 days',
            title: 'sarah_edo',
        },
    ],
    articles: [
        {
            id: '1',
            title: 'React on my mind',
            content:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
            articleUrl: 'https://youtube.com/',
            created: '1 day',
        },
        {
            id: '2',
            title: 'Wish you React',
            content:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
            articleUrl: 'https://youtube.com/',
            created: '1 day',
        },
        {
            id: '3',
            title: 'You gave React a bad name',
            content:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
            articleUrl: 'https://youtube.com/',
            created: '5 days',
        },
        {
            id: '4',
            title: 'Is it React you looking for?',
            content:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
            articleUrl: 'https://youtube.com/',
            created: '10 days',
        },
    ],
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            return {
                ...state,
                [action.payload.itemType]: [
                    ...state[action.payload.itemType],
                    action.payload.item,
                ],
            };
        case 'REMOVE_ITEM':
            return {
                ...state,
                [action.payload.itemType]: [
                    ...state[action.payload.itemType].filter(
                        item => item.id !== action.payload.id,
                    ),
                ],
            };
        default:
            return state;
    }
};

export default rootReducer;
