import styled from 'styled-components';

export const SubContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    min-width: 90vh;
    min-height: 50vh;
    bottom: 0;
    box-sizing: border-box;

    @media (max-width: 800px) {
        grid-template-columns: 1fr 1fr; 
    }
`;

export const Div1 = styled.div`
    display: flex;
    justify-content: center;
`;

export const Div2 = styled.div`
    display: flex;
    justify-content: center;
`;

export const Div3 = styled.div`
    display: flex;
    justify-content: center;

    .icon {
    font-size: 40px;
    margin-bottom: 8px;
  }
`;