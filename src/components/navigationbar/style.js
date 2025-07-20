import styled from 'styled-components';
import Button from 'react-bootstrap/Button';


export const Image = styled.img`
    width: 64px;
    height: 64px;
    margin-left: 25px;
    margin-bottom: 5px;
`
export const Title = styled.h1`
    color: black;
    font-weight:700;
    margin-left: 10px;
`

export const Botao = styled(Button)`
    color: #970700;
    border: none;
    background-color: transparent;
    font-weight: 1000;
    margin-left: 25px;
    margin-bottom: 5px;
    border-radius: 8px;
    transition: all 0.2s ease;

    &:hover {
    background-color: #970700;
    color: white;
  }

    &:active {
    background-color: #970700 !important;
    color: white !important;
    box-shadow: none !important;
    outline: none;
  }

  &:focus {
    background-color: transparent;
    box-shadow: none;
    outline: none;
  }
`

