import styled from 'styled-components';

export const CardDados = styled.div`
    height: 275px;
    width: 200px;
    border:black 1px solid;
    background-color: white;
    border-radius: 5px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
    transition: all 0.4s ease;
    padding: 0;
    &:hover button {
    opacity: 1;
    visibility: visible;
  }

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2)
    }
`

export const Title = styled.h3`
    color: #444;
    margin-top:15px;
    margin-bottom: 20px;
    font-size: 20px;
    text-align: center;
    font-weight: bold;
`

export const Item = styled.li`
    margin-bottom:15px;
    color: #444;
    font-size: 15px;
    font-weight: 600;
    text-decoration: none;
    list-style: none;
`;