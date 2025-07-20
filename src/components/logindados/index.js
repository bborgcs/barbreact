import React, { useState } from 'react';
import { useNavigate } from 'react-router';

import { 
    Container, 
    BoxIcon,
    BoxItem,
    Icon,
    DataBox,
    Title,
    InputEmail,
    InputPassword,
    Submit,
    SendBox,
} from "./style"

import logo_rbsc from '../../images/logo_rbsc.webp';

export default function LoginUsuario() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();

    function Authenticate() {

        const user = {
            name: 'Barbara Borges',
            email: email 
        }
        navigate('/home', { state: { user: user }})
    }

    return (
        
        <Container>
            <BoxIcon>
                <BoxItem>
                    <Icon src={logo_rbsc}/>
                </BoxItem>
            </BoxIcon>

            <DataBox>
                <Title>USER LOGIN</Title>
                <InputEmail 
                    id="email" 
                    name="email" 
                    placeholder="E-mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <InputPassword 
                    id="password" 
                    name="password" 
                    placeholder="Senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <Submit value="ENTRAR" onClick={() => Authenticate() }/>

                <SendBox>
                    <Submit value="ENTRAR COMO ADMINISTRADOR" onClick={() => navigate('/login_adm')}/>
                    <Submit value="CADASTRE-SE" onClick={() => navigate('/cadastro')}/>
                </SendBox>
            </DataBox>
            
            
        </Container>
    )
} 