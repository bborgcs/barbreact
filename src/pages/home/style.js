import styled from "styled-components";

export const InputNome = styled.input.attrs({ type: 'nome' })`
    display: inline-block;
    width: 50%;
    height: 30px;
    border: 0px;
    border-bottom: 1px solid #970700;
    border-radius: 3px;
    margin-bottom: 10px;
    padding-left: 10px;

    &:focus {
        outline: none;
        border: 1px solid #970700;
        border-radius: 4px;
    } 

`
export const InputPontos = styled.input.attrs({ type: 'pontos' })`
    display: inline-block;  
    width: 50%;
    height: 30px;
    border: 0px;
    border-bottom: 1px solid #970700;
    border-radius: 3px;
    margin-bottom: 10px;
    padding-left: 10px;

    &:focus {
        outline: none;
        border: 1px solid #970700;
        border-radius: 4px;
    }
`

export const InputSaldo = styled.input.attrs({ type: 'saldo' })`
    display: inline-block;
    width: 50%;
    height: 30px;
    border: 0px;
    border-bottom: 1px solid #970700;
    border-radius: 3px;
    margin-bottom: 10px;
    padding-left: 10px;
    &:focus {
        outline: none;
        border: 1px solid #970700;
        border-radius: 4px;
    }
`

export const InputJogos = styled.input.attrs({ type: 'jogos' })`
    display: inline-block;
    width: 50%;
    height: 30px;
    border: 0px;
    border-bottom: 1px solid #970700;
    border-radius: 3px;
    margin-bottom: 10px;
    padding-left: 10px;
    &:focus {
        outline: none;
        border: 1px solid #970700;
        border-radius: 4px;
    }
`


export const DataBox = styled.div`
    margin: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center; 
    gap: 25px;
    padding: 20px;
`;