import { useNavigate } from 'react-router';
import { Container } from './style';
import DadosLogin from '../../components/logindados';
import ImagemLogin from '../../components/loginimagem';

export default function LoginUsuario() {

    const navigate = useNavigate();

    return (
        <Container>
            <DadosLogin />
            <ImagemLogin />
        </Container>
    )

}