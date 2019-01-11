import styled from 'styled-components';

export const Button = styled.button`
    border: none;
    border-radius: 2px;
    background: ${({theme}) => theme.colors.button};
    color: white;
    margin-left: 5px;

    &:hover {
        color: white;
    }
`