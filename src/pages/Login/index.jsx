
import './style.css'
import logo from '../../assets/img.login/grupo2.svg';
import { Card, CardContent, Box, Button } from '@mui/material';
import Space from '../../componentes/space'
import Container from '@mui/material/Container';
import { useNavigate } from 'react-router-dom';







export default function Login() {
    const rotas = useNavigate();
    return (


        <div className='div-container'>
            <Container>
                <Box sx={{
                    marginTop: 12,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: "center"
                }}>
                    <Card sx={{ width: '446px' }}>

                        <CardContent>

                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <img src={logo}></img>
                                <p className='titulo1' >Market Cubos</p>
                                <p className='titulo2'>Boas-vindas!</p>
                                <p >Use seu e-mail e senha para acessar a conta</p>
                            </div>

                            <Box component={'form'} sx={{ alignItems: 'center' }}>


                                <Box component={'div'} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'start' }}>

                                    <label >E-mail:</label>
                                    <input type="text" className='email-input' placeholder="Exemplo@gmail.com" />
                                    <Space espaco={'24px'} />
                                    <label >Senha:</label>
                                    <input type="password" className='email-input' placeholder="Insira sua senha" />
                                    <Space espaco={'66px'} />
                                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                        <Button sx={{ background: ' #B7005C', borderRadius: '30px' }} type="submit" variant="contained">Fazer login</Button>
                                    </div>

                                    <Space espaco={'32px'} />



                                </Box>

                            </Box>
                            <Box component={'div'} sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                                <label>Não possui conta? </label>
                                <a style={{ color: '#B7005C' }} href='#' onClick={() => { rotas("/cadastro") }}>Cadastrar</a>

                            </Box>









                        </CardContent>
                    </Card>
                </Box>
            </Container>




        </div >




    )
};