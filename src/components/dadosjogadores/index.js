import {Title,
        Item,
        CardDados,
} from './style'

export default function DadosJogadores({ title, texto, jogadores, atributo }) {
    const ordenados = [...jogadores]
    .sort((a, b) => b[atributo] - a[atributo])  
    .slice(0, 5);                     
    
    return(
        <CardDados>
            <Title>{title}</Title>
            <ul>
                {ordenados.map((jogador) => (
                    <Item key={jogador.id}>
                        {jogador.nome} - {jogador[atributo]} {texto}
                    </Item>
                ))}
            </ul>
        </CardDados>
    );
}