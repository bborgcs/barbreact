import React from 'react';
import {CardDados,
            Title,
            Item,
} from '../../components/dadosjogadores/style';
import {Acao,
            DivAcao
} from '../../components/card/style';
import { Container } from './style';

export default function CardTecnico({ tecnico }) {
    return (
        <Container>
            <CardDados className='d-flex flex-column align-items-center'>
                <div className="icon" style={{ textAlign: 'center'}}>
                    <i className="bi bi-person-fill" style={{ fontSize: '82px' }}></i>
                </div>
                <Title>{tecnico.nome}</Title>
                <Item style={{textAlign: 'center'}}>{tecnico.funcao}</Item>
                    <DivAcao>
                        <Acao>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="#FFF" class="bi bi-arrow-clockwise" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2z"/>
                                <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466"/>
                            </svg>
                        </Acao>
                        <Acao>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="#FFF" class="bi bi-info-circle-fill" viewBox="0 0 16 16">
                                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2"/>
                            </svg>
                        </Acao>
                        <Acao>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="#FFF" class="bi bi-trash3-fill" viewBox="0 0 16 16">
                                <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5"/>
                            </svg>
                        </Acao>
                    </DivAcao>
            </CardDados>
        </Container>
    );
}