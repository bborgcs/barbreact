import { AlertHeading } from "react-bootstrap"
import Partida from "../components/partida"

export const campeonato = [
    {
        id: 1,
        time: 'Operário',
        pts: '22',
        sg: '11',
        pj: '11'
    },
    {
        id: 2,
        time: 'Athetico-PR',
        pts: '22',
        sg: '10',
        pj: '11'
    },
    {
        id: 3,
        time: 'Coritiba',
        pts: '20',
        sg: '11',
        pj: '11'
    },
    {
        id: 4,
        time: 'Londrina',
        pts: '20',
        sg: '6',
        pj: '11'
    },
    {
        id: 5,
        time: 'Cianorte',
        pts: '17',
        sg: '5',
        pj: '11'
    },
    {
        id: 6,
        time: 'Maringá',
        pts: '16',
        sg: '4',
        pj: '11'
    },
    {
        id: 7,
        time: 'Azuriz',
        pts: '15',
        sg: '-5',
        pj: '11'
    },
    {
        id: 8,
        time: 'São Joseense',
        pts: '13',
        sg: '-8',
        pj: '11'
    },
    {
        id: 9,
        time: 'FC Cascavel',
        pts: '13',
        sg: '-3',
        pj: '11'
    },
    {
        id: 10,
        time: 'Andraus Brasil',
        pts: '10',
        sg: '-10',
        pj: '11'
    },
    {
        id: 11,
        time: 'Rio Branco',
        pts: '10',
        sg: '-11',
        pj: '11'
    },
    {
        id: 12,
        time: 'Paraná',
        pts: '7',
        sg: '-9',
        pj: '11'
    },
]

export const jogadores = [
    { 
        id: 1, 
        nome: 'FILIPE', 
        posicao: 'GOLEIRO',
        numero: 1, 
        gols: 0,
        jogos: 11
    },
    { 
        id: 2, 
        nome: 'RADECHE', 
        posicao: 'LATERAL',
        numero: 2, 
        gols: 0,
        jogos: 9
    },
    { 
        id: 3, 
        nome: 'G. VIDAL', 
        posicao: 'ZAGUEIRO',
        numero: 3, 
        gols: 1,
        jogos: 9
    },
    { 
        id: 4, 
        nome: 'NETO', 
        posicao: 'ZAGUEIRO',
        numero: 4, 
        gols: 2,
        jogos: 5
    },
    { 
        id: 5, 
        nome: 'BIRO', 
        posicao: 'LATERAL',
        numero: 6, 
        gols: 0,
        jogos: 10
    },
    { 
        id: 6, 
        nome: 'FERREIRA', 
        posicao: 'MEIA',
        numero: 5, 
        gols: 2,
        jogos: 3
    },
    { 
        id: 7, 
        nome: 'ELVIS', 
        posicao: 'MEIA',
        numero: 8, 
        gols: 3,
        jogos: 6
    },
    { 
        id: 8, 
        nome: 'BRYAM', 
        posicao: 'ATACANTE',
        numero: 11, 
        gols: 3,
        jogos: 8
    },
    { 
        id: 9, 
        nome: 'NICO', 
        posicao: 'ATACANTE',
        numero: 15, 
        gols: 2,
        jogos: 7
    },
    { 
        id: 10, 
        nome: 'VALDÍVIA', 
        posicao: 'ATACANTE',
        numero: 10, 
        gols: 4,
        jogos: 11
    },
        
]

export const comissao = [
    {
        id: 1,
        nome: 'FAHEL JR',
        funcao: 'TÉCNICO',
    },
   
]

export const partida = [
    {
        id: 1,
        data: '2025-01-11',
        time: 'Azuriz',
        mandante: true,
        golsAdv: 2,
        golsRB: 1,
        horario: '16:00',
    },
    {
        id: 2,
        data: '2025-01-14',
        time: 'Athletico-PR',
        mandante: false,
        golsAdv: 5,
        golsRB: 1,
        horario: '21:00',
    },
    {
        id: 3,
        data: '2025-01-19',
        time: 'Operário',
        mandante: false,
        golsAdv: 2,
        golsRB: 0,
        horario: '11:00',
    },
    {
        id: 4,
        data: '2025-01-22',
        time: 'Andraus Brasil',
        mandante: true,
        golsAdv: 0,
        golsRB: 3,
        horario: '16:30',
    },
    {
        id: 5,
        data: '2025-01-25',
        time: 'Cianorte',
        mandante: true,
        golsAdv: 0,
        golsRB: 2,
        horario: '20:00',
    },
    {
        id: 6,
        data: '2025-01-29',
        time: 'Maringá',
        mandante: false,
        horario: '11:00',
    },
    {
        id: 7,
        data: '2025-02-02',
        time: 'Paraná',
        mandante: true,
        horario: '17:00',
    },
    {
        id: 8,
        data: '2025-02-05',
        time: 'Coritiba',
        mandante: false,
        horario: '16:00',
    },
    {
        id: 9,
        data: '2025-02-09',
        time: 'Londrina',
        mandante: true,
        horario: '19:30',
    },
    {
        id: 10,
        data: '2025-02-12',
        time: 'São Joseense',
        mandante: true,
        horario: '21:00',
    },
    {
        id: 11,
        data: '2025-02-09',
        time: 'FC Cascavel',
        mandante: true,
        horario: '15:30',
    },
]