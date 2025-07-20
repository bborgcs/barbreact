// style.js
import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin: 20px 0;
  overflow: hidden;
`;

export const CardList = styled.div`
  display: flex;
  gap: 16px;
  padding: 10px 40px;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    display: none;
  }

  scroll-behavior: smooth;
`;


export const PlayerCard = styled.div`
  flex: 0 0 auto;
  width: 100px;
  height: 165px;
  border: 1px solid black;
  text-align: center;
  background-color: white;
  border-radius: 4px;
  padding: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.4s ease;


    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2)
    }

  .icon {
    font-size: 40px;
    margin-bottom: 8px;
  }
`;

export const Title = styled.h3`
   color: #444;
    margin-top: 18px;
    margin-bottom: 12px;
`

export const Name = styled.div`
  font-weight: bold;
  font-size: 13px;
`;

export const Role = styled.div`
  font-size: 13px;
  color: #444;
`;

export const ButtonScroll = styled.button`
  position: absolute;
  top: 40%;
  ${({ left }) => (left ? 'left: 0' : 'right: 0')};
  z-index: 2;
  background: #970700;
  color: white;
  border: none;
  width: 35px;
  height: 60px;
  font-size: 18px;
  cursor: pointer;
  border-radius: ${({ left }) => (left ? '0 4px 4px 0' : '4px 0 0 4px')};

  &:hover {
    background: #750500;
  }
`;
