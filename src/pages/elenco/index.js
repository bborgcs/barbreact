import { Container } from 'react-bootstrap';
import NavigationBar from '../../components/navigationbar';
import { jogadores } from '../../utils/datatest';
import Card from '../../components/card';
import DadosJogadores from '../../components/dadosjogadores';
import {CardDados,
            Title,
            Item,
} from '../../components/dadosjogadores/style';
import { SubContainer,
            Div1,
            Div2,
            Div3
 } from './style'; 

export default function Elenco() {

    return (
        <>
            <NavigationBar />
            <Container className='mt-2'>
                <Card jogadores={jogadores} />
                <SubContainer>
                    <Div1>
                        <DadosJogadores
                            title="ARTILHEIROS"
                            texto="GOLS"
                            atributo="gols"
                            jogadores={jogadores}
                        />
                    </Div1>
                    <Div2>
                        <DadosJogadores
                            title="MAIS UTILIZADOS"
                            atributo="jogos"
                            jogadores={jogadores}
                        />
                    </Div2>
                    <Div3>
                        <CardDados className='d-flex flex-column align-items-center'>
                            <div className="icon" style={{ textAlign: 'center'}}>
                                <i className="bi bi-person-fill" style={{ fontSize: '90px' }}></i>
                            </div>
                            <Title>FAHEL JR</Title>
                            <Item style={{textAlign: 'center'}}>TÉCNICO</Item>
                        </CardDados>
                    </Div3>
                </SubContainer>
            </Container>
        </>
    )
}
