import { useNavigate } from 'react-router-dom';
import { useState} from 'react';
import { Container, Modal, Button } from 'react-bootstrap';
import NavigationBar from '../../components/navigationbar';

import { 
    InputNome,
    InputSaldo,
    InputPontos,
    InputJogos,
    DataBox,
} from "./style"

import {    
    Submit,
    SendBox,
} from "../../components/cadastro/style"
import Team from '../../api/team';


export default function Create() {

    const [nome, setNome] = useState('')
    const [pontos, setPontos] = useState('')
    const [saldo, setSaldo] = useState('')
    const [jogos, setJogos] = useState('')

    const navigate = useNavigate();
    const [show, setShow] = useState(false);
    
    function sendData() {

        const time = { name: nome, points: Number(pontos), goalDifference: Number(saldo), matchesPlayed: Number(jogos) };

        Team.post('/', time).then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.error(error);
        });

        setShow(true);
    }

    const handleClose = () => {
    setShow(false);
    navigate('/home')
    navigate(0);
  }

    return (
        <>
            <NavigationBar />
             <Container className='mt-'>
                <DataBox>
                    <InputNome
                        type="text"
                        id="nome" 
                        name="nome" 
                        value={nome}
                        placeholder="Nome"
                        onChange={(e) => setNome(e.target.value)}
                    />
                    <InputPontos
                        type="text"
                        id="pontos" 
                        name="pontos" 
                        value={pontos}
                        placeholder="Pontos"
                        onChange={(e) => setPontos(e.target.value)}
                    />
                    <InputSaldo
                        type="text" 
                        id="saldo" 
                        name="saldo" 
                        value={saldo}
                        placeholder="Saldo de Gols"
                        onChange={(e) => setSaldo(e.target.value)}
                    />
                    <InputJogos
                        type="text" 
                        id="jogos" 
                        name="jogos" 
                        value={jogos}
                        placeholder="Partidas Jogadas"
                        onChange={(e) => setJogos(e.target.value)} 
                    />
                </DataBox>

                <SendBox>
                    <Submit value="Voltar" onClick={() => navigate('/home')  }/>
                    <Submit value="Cadastrar" onClick={() => sendData() }/>
                </SendBox>
             </Container>

            <Modal 
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Inserção - Time</Modal.Title>
                </Modal.Header>
                <Modal.Body>Time inserido com sucesso!</Modal.Body>
                    <Modal.Footer>
                        <Button variant="danger" onClick={handleClose}>
                           OK
                        </Button>
                    </Modal.Footer>
            </Modal>
             
        </>
    )
    
}