import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import bulbIcon from 'assets/icons/bulb.svg';
import logoutIcon from 'assets/icons/logout.svg';
import penIcon from 'assets/icons/pen.svg';
import plusIcon from 'assets/icons/plus.svg';
import twitterIcon from 'assets/icons/twitter.svg';
import ButtonIcon from './ButtonIcon';

const YellowBg = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 500px;
    height: 500px;
    background-color: ${({ theme }) => theme.note};
`;

storiesOf('Button Icon', module)
    .addDecorator(story => <YellowBg>{story()}</YellowBg>)
    .add('Bulb', () => <ButtonIcon icon={bulbIcon} />)
    .add('Bulb Active', () => <ButtonIcon icon={bulbIcon} active />)
    .add('Logout', () => <ButtonIcon icon={logoutIcon} />)
    .add('Pen', () => <ButtonIcon icon={penIcon} />)
    .add('Plus', () => <ButtonIcon icon={plusIcon} />)
    .add('Twitter', () => <ButtonIcon icon={twitterIcon} />);
