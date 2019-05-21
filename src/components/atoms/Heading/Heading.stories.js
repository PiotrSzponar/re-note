import React from 'react';
import { storiesOf } from '@storybook/react';
import Heading from './Heading';

storiesOf('Heading', module)
    .add('Normal', () => <Heading>I am a Heading</Heading>)
    .add('big', () => <Heading big>I am a Heading</Heading>);
