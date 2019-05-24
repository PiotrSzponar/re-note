import styled, { css } from 'styled-components';

const Button = styled.button`
    width: 220px;
    height: 50px;
    background-color: ${({ theme, activeColor }) =>
        activeColor ? theme[activeColor] : theme.grey200};
    padding: 0;
    border: none;
    border-radius: 50px;
    font-family: inherit;
    font-weight: ${({ theme }) => theme.bold};
    font-size: ${({ theme }) => theme.fontSize.s};
    text-transform: uppercase;
    flex-shrink: 0;
    cursor: pointer;

    ${({ secondary }) =>
        secondary &&
        css`
            width: 110px;
            height: 30px;
            background-color: ${({ theme }) => theme.grey200};
            font-size: ${({ theme }) => theme.fontSize.xxs};
        `}
`;

export default Button;
