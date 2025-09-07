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
    InputCPF,
    InputName,
    InputPassword,
    Submit,
    SendBox,
} from "./style"

import logo_rbsc from '../../images/logo_rbsc.webp';

export default function LoginUsuario() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [cpf, setCpf] = useState('')
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
                <Title>CADASTRO</Title>
                <InputEmail 
                    id="email" 
                    name="email" 
                    placeholder="E-mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <InputName
                    id="name" 
                    name="name" 
                    placeholder="Nome"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <InputCPF 
                    id="cpf" 
                    name="cpf" 
                    placeholder="CPF"
                    value={cpf}
                    onChange={(e) => setCpf(e.target.value)}
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
                    <Submit value="CADASTRE-SE" onClick={() => navigate('/cadastro')}/>
                </SendBox>
            </DataBox>
            
            
        </Container>
    )
} 