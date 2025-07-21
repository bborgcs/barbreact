import styled from "styled-components";

export const CardPartida = styled.div`
    width: 80%;
    height:150px;
    border-radius: 5px;
    border: 1px solid black;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    background-color: white;

    display:grid;
    grid-template-columns: 1fr 50px 105px;
    grid-template-rows:50% 50%;

    transition: all 0.4s ease;
    z-index: 1;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    }

    &:hover ~ div{
        transform: translateY(-5px);
        transform: translateX(0px);
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

export const Acao = styled.button`
    background-color: #970700;
    width: 36px;
    height: 36px;
    color: white;
    border: none;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;
    cursor: pointer;

    transition: all 0.4s ease;

    &:hover {
        background-color: #750500;
    }
`

export const DivAcao = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    height:150px;
    width: 50px;

    z-index: -99;
    transform: translateX(-50px);
    transition: all 0.4s ease;
`;

export const Container = styled.div`
    display: flex;
    align-items: center;
`;