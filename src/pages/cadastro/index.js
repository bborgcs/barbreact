import { useNavigate } from 'react-router';
import { Container } from './style';
import CadastroTela from '../../components/cadastro';
import ImagemLogin from '../../components/loginimagem';

export default function LoginUsuario() {

    const navigate = useNavigate();

    return (
        <Container>
            <CadastroTela />
            <ImagemLogin />
        </Container>
    )

}