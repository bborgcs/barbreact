import { Container } from 'react-bootstrap';
import NavigationBar from '../../components/navigationbar';
import { jogadores } from '../../utils/datatest';
import { comissao } from '../../utils/datatest';
import Card from '../../components/card';
import CardTecnicoItem from '../../components/cardtecnico';
import DadosJogadores from '../../components/dadosjogadores';
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
                            texto="JOGOS"
                            atributo="jogos"
                            jogadores={jogadores}
                        />
                    </Div2>
                    <Div3>
                    
                            {comissao.map((tecnico, index) => (
                                <CardTecnicoItem key={index} tecnico={tecnico} />
                            ))}
                
                    </Div3>
                </SubContainer>
            </Container>
        </>
    )
}
