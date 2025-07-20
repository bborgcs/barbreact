import styled from 'styled-components';

export const Container = styled.div`
    
    background-color: #970700;
    display:flex;
    justify-content:center;
    align-items:center;

    @media (max-width: 800px) {
        display: none;
    }
`

export const Icon = styled.img`
    width: 315px;
    height: 315px;
`;