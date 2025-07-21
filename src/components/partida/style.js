import styled from "styled-components";

export const CardPartida = styled.div`
    width: 80%;
    height:150px;
    border-radius: 5px;
    border: 1px solid black;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

    display:grid;
    grid-template-columns: 1fr 50px 105px;
    grid-template-rows:50% 50%;

    transition: all 0.4s ease;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    }
`;

export const Title = styled.h1`
    color: black;
    margin-bottom: 5px;
    margin-left: 10px;
    font-size: 20px;
    text-align: center;
    font-weight: 600;
`

export const Data = styled.h3`
    color: black;
    font-size: 16px;
    font-weight:bold;
    margin-top: 55px;
`;

export const Hora = styled.h3`
    color: #858585ff;
    font-size: 16px;
    margin-bottom: 55px;
`;

export const DivTime = styled.div`
    display: flex;
    align-items: center;
    padding-left: 10px;

`;

export const DivPlacar = styled.div`
    display: flex;
    align-items: center;
`;

export const DivInfo = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;
