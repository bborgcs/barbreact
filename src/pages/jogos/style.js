import styled from "styled-components";

export const ContainerProximasPartidas = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    min-width: 100%;
    min-height: 100vh;

    @media (max-width: 800px) {
        grid-template-columns: 1fr; 
        gap: 20px;
    }
`;

export const ContainerPartidasPassadas = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    min-width: 100%;
    min-height: 100vh;
    
    @media (max-width: 800px) {
        grid-template-columns: 1fr; 
        gap: 20px;
    }
`;

export const Title = styled.h3`
   color: #444;
    margin-top: 25px;
    margin-bottom: 20px;
`