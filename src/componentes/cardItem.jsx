import { Card, CardContent, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import imagem from '../../src/assets/img.login/testeCarditem.jpg'
import './componentes.css'
import '../assets/img.login/grupo2.svg'
export default function CardItem(props) {


    const rotas = useNavigate()

    return (

        <div>
            <Card sx={{ cursor: "pointer", width: '270px', margin: '6px' }} onClick={() => { }} elevation={0} >
                <CardContent>

                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        <img style={{ width: '240px' }} src={imagem}></img>

                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                        <label className="descricao">Blusa de Moletom Manga Comprida  Dinossauro  - Tam: G</label>

                        <div style={{ width: '250px', display: 'flex', flexDirection: 'row', justifyContent: 'start' }}>
                            <label className="preco">
                                R$139,90
                            </label>

                        </div>


                    </div>


                </CardContent>
            </Card>

        </div>
    )



}