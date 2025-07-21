import NavigationBar from '../../components/navigationbar';
import React from 'react';
import Partida from '../../components/partida';
import { Container } from 'react-bootstrap';
import { partida } from '../../utils/datatest';
import {    ContainerProximasPartidas, 
            ContainerPartidasPassadas,
            Title } from './style';


export  default function Jogos(){
    const futuras = partida.filter(p => p.golsRB === undefined || p.golsAdv === undefined);
    const passadas = partida.filter(p => p.golsRB !== undefined && p.golsAdv !== undefined);

    return(
        <>
            <NavigationBar />
            <Container className='mt-2'>
                <Title>Próximas Partidas</Title>
                <ContainerProximasPartidas>
                    {futuras.map((p) => (
                        <Partida key={p.id} partida={p} />
                    ))}
                </ContainerProximasPartidas>
                <Title>Partidas Passadas</Title>
                <ContainerPartidasPassadas>
                    {passadas.map((p) => (
                        <Partida key={p.id} partida={p} />
                    ))}
                </ContainerPartidasPassadas>
            </Container>
        </>
    );
}