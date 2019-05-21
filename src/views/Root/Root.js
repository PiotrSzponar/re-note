import React from 'react';
import GlobalStyle from 'theme/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme/mainTheme';
import Button from 'components/atoms/Button/Button';
import Input from 'components/atoms/Input/Input';

const Root = () => (
    <>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
            <>
                <h1>Hello!</h1>
                <Button>Close / Save</Button>
                <Button secondary>Remove</Button>
                <Input placeholder="search" search />
            </>
        </ThemeProvider>
    </>
);

export default Root;
