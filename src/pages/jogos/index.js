import NavigationBar from '../../components/navigationbar';
import React from 'react';
import Partida from '../../components/partida';
import { Container } from 'react-bootstrap';
import { partida } from '../../utils/datatest';
import {    ContainerProximasPartidas, 
            ContainerPartidasPassadas,
            Title,
            Acao,
            AcaoInsert } from './style';


export  default function Jogos(){
    const futuras = partida.filter(p => p.golsRB === undefined || p.golsAdv === undefined);
    const passadas = partida.filter(p => p.golsRB !== undefined && p.golsAdv !== undefined);

    return(
        <>
            <NavigationBar />
            <Container className='mt-2'>
                <table style={{ width: '100%', gap: '0' }}>
                    <td>
                      <Title>Próximas Partidas</Title>
                    </td>
                    <td style={{ textAlign: 'right', paddingTop: '10px' }}>
                        <AcaoInsert className="me-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#FFF" className="bi bi-pencil-fill" viewBox="0 0 16 16">
                                <path d="M12.854.146a.5.5 0 0 1 .638.057l2.305 2.305a.5.5 0 0 1-.057.638l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 3 10.707V13h2.293L13.5 4.793 11.207 2.5z"/>
                            </svg>
                        </AcaoInsert>
                    </td>
                </table>
                <ContainerProximasPartidas>
                    {futuras.map((p) => (
                        <Partida key={p.id} partida={p} />
                    ))}
                </ContainerProximasPartidas>

                <hr />

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