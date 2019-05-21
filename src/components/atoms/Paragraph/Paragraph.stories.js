import React from 'react';
import { storiesOf } from '@storybook/react';
import Paragraph from './Paragraph';

storiesOf('Paragraph', module).add('Normal', () => (
    <Paragraph>I am a Paragraph</Paragraph>
));
