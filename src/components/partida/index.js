import React from "react";
import {    CardPartida,
            Title,
            DivTime,
            DivPlacar,
            DivInfo,
            Data,
            Hora
 } from './style';

export default function Partida({ partida }) {

    const mandante = partida.mandante;
    const nomeTime1 = mandante ? "Rio Branco" : partida.time;
    const nomeTime2 = mandante ? partida.time : "Rio Branco";

    const gols1 = mandante ? partida.golsRB : partida.golsAdv;
    const gols2 = mandante ? partida.golsAdv : partida.golsRB;

    const temPlacar = gols1 !== undefined && gols2 !== undefined;

    return(
        <CardPartida>

            <DivTime >
                <svg width="32" height="40" viewBox="0 0 64 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M32 0C32 0 0 8 0 24C0 56 32 80 32 80C32 80 64 56 64 24C64 8 32 0 32 0Z" fill="#949694ff" stroke="black" strokeWidth="2"/>
                    <text x="50%" y="48%" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold" fontFamily="Arial, sans-serif" dy=".3em"> FC </text>
                </svg>
                <Title >{nomeTime1}</Title>
            </DivTime>

            <DivPlacar >
                {temPlacar && <Title>{gols1}</Title>}
            </DivPlacar>

            <DivInfo >   
                <Data>{new Date(partida.data).toLocaleDateString('pt-BR')}</Data>
            </DivInfo>

            <DivTime >
                <svg width="32" height="40" viewBox="0 0 64 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M32 0C32 0 0 8 0 24C0 56 32 80 32 80C32 80 64 56 64 24C64 8 32 0 32 0Z" fill="#949694ff" stroke="black" strokeWidth="2"/>
                    <text x="50%" y="48%" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold" fontFamily="Arial, sans-serif" dy=".3em"> FC </text>
                </svg>
                <Title >{nomeTime2}</Title>
            </DivTime>

            <DivPlacar >
                {temPlacar && <Title>{gols2}</Title>}    
            </DivPlacar>

            <DivInfo >   
                    <Hora>{partida.horario}</Hora>
            </DivInfo>

    </CardPartida>
    )
}
