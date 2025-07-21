import styled from "styled-components";

export const ContainerProximasPartidas = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    min-width: 100vh;
    min-height: 100vh;

    @media (max-width: 800px) {
        grid-template-columns: 1fr; 
        gap: 20px;
    }
`;

export const ContainerPartidasPassadas = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    min-width: 100vh;
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

export const Acao = styled.button`
    background-color: #970700;
    width: 30px;
    height: 30px;
    color: white;
    border: none;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;
    cursor: pointer;
    margin-top: 20px;

    transition: all 0.4s ease;

    &:hover {
        background-color: #750500;
    }
`