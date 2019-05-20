import styled, { css } from 'styled-components';

const Button = styled.button`
    padding: 0;
    background-color: #ffd82b;
    width: 220px;
    height: 50px;
    border: none;
    border-radius: 50px;
    font-family: inherit;
    font-weight: 600;
    font-size: 16px;
    text-transform: uppercase;
    cursor: pointer;

    ${({ secondary }) =>
        secondary &&
        css`
            background-color: #e6e6e6;
            width: 100px;
            height: 30px;
            font-size: 10px;
        `};
`;

export default Button;
