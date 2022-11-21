import { Card, CardContent, Box, Button, Container, SvgIcon } from '@mui/material';
import ButtonAppBar from '../../componentes/componenteHeader/header'
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CreditCard from '@mui/icons-material/CreditCard';
import { Pix } from '@mui/icons-material'
import '../detalhesProduto/index.css'
import logo from '../../assets/img.login/testeCarditem.jpg'
import Space from '../../componentes/space'
import CardItem from '../../componentes/cardItem'
import ShoppingCartOutlined from '@mui/icons-material/ShoppingCartOutlined';


import Contador from '../../componentes/contador'









function Barcode(props) {
    return (
        <SvgIcon {...props}>
            <path d="M1 19V5h2v14Zm3 0V5h2v14Zm3 0V5h1v14Zm3 0V5h2v14Zm3 0V5h3v14Zm4 0V5h1v14Zm3 0V5h3v14Z" />
        </SvgIcon>
    );
}










export default function Detalhes() {
    return (
        <div>

            <ButtonAppBar />
            <Container  >


                <Space espaco={'91px'} />
                <Card elevation={0} sx={{ background: "#FCFCFC", width: "auto" }}>
                    <CardContent>

                        <div className='row-flex'>
                            <div className='colunm-flex'>
                                <img style={{ width: "354px",height:"480px" }} src={logo} />

                            </div>
                            <Space espacoH={"24px"} />


                            <div className='colunm-flex'>
                                <label className='descricao'>Apple AirPods Pro Estojo de Recarga MagSafe -  Produto Original C/ Nota Fiscal</label>
                                <span>Vendido e entregue por | Market Cubos</span>
                                <Space espaco={"14px"} />
                                <label className='preco'>R$2.870,00</label>
                                <Space espaco={"14px"} />
                                <label>formas de pagamento</label>

                                <div className='row-flex'>

                                    <Barcode />
                                    <CreditCard />
                                    <Pix />


                                </div>


                                <Space espaco={"24px"} />
                                <label className="title-16">Quantidade</label>
                                <div className="row-flex">
                                    <div className="colunm-flex">

                                    </div>
                                    <div className="colunm-flex center-flex">
                                        <span style={{ marginLeft: "1px" }}
                                            className="sub-title-product">20 unidades</span>
                                        <Contador />

                                    </div>
                                </div>

                                <Space espaco={"14px"} />
                                <label className="outros-p">Calcular frete e prazo</label>
                                <input className="cep" placeholder={"Digite o CEP"} name={"cep"} type="text" />

                                <Space espaco={"14px"} />
                                <div className="row-flex">
                                    <Button variant="outlined" startIcon={<ShoppingCartOutlined />}
                                        sx={{
                                            mt: 3,
                                            mb: 2,
                                            textTransform: "none",
                                            borderColor: "#B7005C",
                                            color: "#B7005C",
                                            borderRadius: "30px"
                                        }}>
                                        Adicionar ao carrinho</Button>

                                        <Space espacoH={"14px"} />

                                    <Button variant="contained"
                                        sx={{
                                            mt: 3,
                                            mb: 2,
                                            textTransform: "none",
                                            background: "#B7005C",
                                            borderRadius: "30px"
                                        }}>
                                        Comprar agora</Button>
                                </div>



                            </div>


                        </div>


                    </CardContent>


                </Card>

                <Space espaco={"40px"} />

                <Card elevation={0} sx={{ background: "#FCFCFC", width: "auto" }}>
                    <CardContent>
                        <h6 className='descricao'>Descrição do produto</h6>

                        <label className='titulo2'>Os AirPods Pro têm Cancelamento Ativo de Ruído para um som totalmente imersivo. Modo Ambiente para ouvir o mundo ao seu redor. São resistentes a suor e água* e têm ajuste personalizável para conforto o dia todo.


                            Todas as informações divulgadas são de responsabilidade do Fabricante/Fornecedor.
                            Verifique com os fabricantes do produto e de seus componentes eventuais limitações à utilização de todos os recursos e funcionalidades.</label>

                    </CardContent>



                </Card>
                <Space espaco={"24px"} />

                <label className='descricao'>Outros Produtos  </label>


                <Space espaco={"24px"} />


                <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', }}>
                    <CardItem />
                    <CardItem />
                    <CardItem />
                    <CardItem />
                </Box>




            </Container>


        </div>

    )
} 