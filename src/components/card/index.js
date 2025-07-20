import React, { useRef,useEffect} from 'react';
import {    Container,
            CardList,
            PlayerCard,
            ButtonScroll,
            Role,
            Name,
            Title } from './style';

function Card({ jogadores }) {
    const listRef = useRef(null);

    useEffect(() => {
  if (listRef.current) {
    listRef.current.scrollLeft = 0;
  }
}, []);


  const scrollRight = () => {
    listRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  const scrollLeft = () => {
    listRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  return (
     <>
     <Title>Elenco</Title>
     <Container>
          <ButtonScroll left onClick={scrollLeft}>{'<'}</ButtonScroll>

          <CardList ref={listRef}>
              {jogadores.map(j => (
                  <PlayerCard key={j.id}>
                      <div className="icon">
                          <i className="bi bi-person-fill" style={{ fontSize: '48px' }}></i>
                      </div>
                      <Name>{j.numero} {j.nome}</Name>
                      <Role>{j.posicao}</Role>
                  </PlayerCard>
              ))}
          </CardList>

          <ButtonScroll onClick={scrollRight}>{'>'}</ButtonScroll>
      </Container></>
  );
}

export default Card;