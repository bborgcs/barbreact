import styled from 'styled-components';

export const Title = styled.h3`
   color: #444;
    margin-top: 18px;
`

export const Acao = styled.button`
    background-color: #970700;
    color: white;
    padding: 5px;
    border: none;
    border-radius: 5px; 

    &:hover {
        background-color: #750500;
    }
`

export const Button = styled.button`
    background-color: #970700;
    width: 35px;
    height: 35px;
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