import styled from 'styled-components';

const ButtonIcon = styled.button`
    display: block;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background-image: url(${({ icon }) => icon});
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: 40%;
    border: none;
    cursor: pointer;

    &.active {
        background-color: #fff;
    }
`;

export default ButtonIcon;
