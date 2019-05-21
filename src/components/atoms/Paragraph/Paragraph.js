import styled from 'styled-components';

const Paragraph = styled.p`
    font-size: ${({ theme }) => theme.fontSize.s};
    font-weight: ${({ theme }) => theme.regular};
    margin: 10px 0;
`;

export default Paragraph;
