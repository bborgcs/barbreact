import { useNavigate } from 'react-router';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
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


export default function Edit() {

    const location = useLocation();
    const team = location.state?.team;

    const [nome, setNome] = useState(team?.name || '');
    const [pontos, setPontos] = useState(team?.points || '');
    const [saldo, setSaldo] = useState(team?.goalDifference || '');
    const [jogos, setJogos] = useState(team?.matchesPlayed || '');
    const [show, setShow] = useState(false);
    const navigate = useNavigate();

    function updateTime() {
    const upTime = { 
        name: nome, 
        points: Number(pontos), 
        goalDifference: Number(saldo), 
        matchesPlayed: Number(jogos) 
    };

    console.log("Dados enviados:", upTime);

    Team.updateTeam(team.id, upTime)
        .then(response => {
            console.log("Resposta backend:", response.data);
            setShow(true);
        })
        .catch(error => {
            console.error("Erro no updateTeam:", error.response?.data || error);
        });
}


    const handleClose = () => {
        setShow(false)
        navigate('/home')
    }

    return (
        <>
            <NavigationBar />
            <Container className='mt-2'>
                <DataBox>
                    <InputNome
                        type="text" 
                        id="nome" 
                        nome="nome" 
                        value={nome}
                        placeholder="Nome"
                        onChange={(e) => setNome(e.target.value)}
                    />
                    <InputPontos
                        type="text" 
                        id="pontos" 
                        nome="pontos" 
                        value={pontos}
                        placeholder="Pontos"
                        onChange={(e) => setPontos(e.target.value)}
                    />
                    <InputSaldo
                        type="text" 
                        id="saldo" 
                        nome="saldo" 
                        value={saldo}
                        placeholder="Saldo de Gols"
                        onChange={(e) => setSaldo(e.target.value)}
                    />
                    <InputJogos
                        type="text" 
                        id="jogos" 
                        nome="jogos" 
                        value={jogos}
                        placeholder="Partidas Jogadas"
                        onChange={(e) => setJogos(e.target.value)} 
                    />
                </DataBox>

                <SendBox>
                    <Submit value="Voltar" onClick={() => navigate('/home')  }/>
                    <Submit value="Alterar" onClick={() => updateTime() }/>
                </SendBox>
            </Container>


            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header >
                    <Modal.Title>Atualização - Time</Modal.Title>
                </Modal.Header>
                <Modal.Body>Time Atualizado com Sucesso!!</Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={handleClose}>OK</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
    
}