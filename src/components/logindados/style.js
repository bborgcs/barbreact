import styled from 'styled-components';

export const Container = styled.div`
    box-sizing: border-box;
    height: 100vh;
    padding-top: 50px;
    padding-left: 50px;
    padding-bottom: 50px;
    font-family: 'Bebas Neue', sans-serif;
    
`;

export const BoxIcon = styled.div`
    text-align: center;
    width: 100%;
    margin-top: 30px;
`

export const BoxItem = styled.div`
    text-align: center;
    display: none;

    @media (max-width: 800px) {
        display: block;
    }
`
export const Icon = styled.img`
    width: 120px;
    height: 120px;
    border-radius: 50%;
    margin-bottom: 10px;
    margin-top: 0px;
`;

export const Title = styled.h1`
    font-size: 36px;
    font-weight:600;
    color: #970700;
`;

export const InputEmail = styled.input.attrs({ type: 'email' })`
    display: inline-block;
    width: 90%;
    height: 30px;
    border: 0px;
    border-left: 1px solid #888;
    border-bottom: 1px solid #888;
    border-radius: 3px;
    margin-bottom: 10px;
    padding-left: 10px;

    &:focus {
        outline: none;
        border: 1px solid #970700;
        border-radius: 4px;
    } 
`

export const InputPassword = styled.input.attrs({ type: 'password' })`
    display: inline-block;
    width: 90%;
    height: 30px;
    border: 0px;
    border-left: 1px solid #888;
    border-bottom: 1px solid #888;
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
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center; 
    gap: 35px;
    padding: 20px;
`;
export const SendBox = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    width: 100%;

    gap: 5px;
    margin-top:100px;
`
export const Submit = styled.input.attrs({ type: 'submit' })`
    box-sizing: border-box;
    width: 300px;
    height: 35px;
    background-color: #970700;
    color: white;
    font-size: 16px;
    font-weight: bold;
    border-radius:3px;
    border: 0px;
    cursor: grab;
`
