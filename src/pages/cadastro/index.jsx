import { Form, Link } from 'react-router-dom'
import './style.css'
import logo from '../../assets/img.login/grupo2.svg';
import { Card, CardContent, Box, Button } from '@mui/material';
import Space from '../../componentes/space'
import Container from '@mui/material/Container';
import { useNavigate } from 'react-router-dom';
import {cadastro}from '../../api'






export default function Cadastro() {
    const rotas = useNavigate();
    async   function cadastroteste(evento) {
        evento.preventDefault();

        const data = new FormData(evento.currentTarget);
        const  values = {
            nomeDaloja: data.get("nomeDaLoja"),
            email: data.get("email"),
            senha: data.get("senha"),
            confirmarSenha: data.get("confirmarSenha")

        }
        await cadastro(
            values
        )

    }
    return (




        <div className='div-container'>
            <Container>
                <Box sx={{
                    marginTop: 12,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: "center"
                }}>
                    <Card sx={{ width: '382px' }}>

                        <CardContent>

                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <img src={logo}></img>
                                <p className='titulo1' >Market Cubos</p>
                                <p className='input-loja'>Cadastre-se</p>
                            </div>

                            <Box component={'form'} sx={{ alignItems: 'center' }}>


                                <Box component={'div'} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'start' }}>
                                    <label className='input-loja' name='nomeDaloja'>Nome Da Loja:</label>
                                    <input className='email-input' type="text" />
                                    <Space espaco={'24px'} />
                                    <label className='input-loja' name='email'>E-mail:</label>
                                    <input type="text" className='email-input' />
                                    <Space espaco={'24px'} />
                                    <label className='input-loja' name='senha'>Senha:</label>
                                    <input type="password" className='email-input' />
                                    <Space espaco={'24px'} />
                                    <label className='input-loja' name='confirmarSenha'>Confirme sua senha:</label>
                                    <input type="password" className='email-input' />
                                    <Space espaco={'24px'} />
                                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                        <div style={{ textAlign: 'center' }}>
                                            Ao criar uma conta, você concorda com a nossa <a href='#' style={{
                                                color: '#D10070'
                                            }}
                                            >Política de Privacidade</a> e
                                            <a href='#' style={{ color: '#D10070' }}>Termos de serviço</a>
                                        </div>
                                        <Space espaco={'14px'} />
                                    </div>
                                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                        <Button sx={{ background: ' #B7005C', borderRadius: '30px' }} type="submit" variant="contained" onClick={cadastroteste}>Criar conta</Button>
                                    </div>
                                    <Space espaco={'14px'} />

                                </Box>

                            </Box>
                            <Box component={'div'} sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                                <label>Já tem uma conta? </label>
                                <a style={{ color: '#B7005C' }} href='#' onClick={() => { rotas("/login") }}> Fazer Login</a>

                            </Box>

                        </CardContent>
                    </Card>
                </Box>
            </Container>




        </div >




    )
};