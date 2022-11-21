
import { Card, CardContent, Box, Button, Container, SvgIcon } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import logo from '../../assets/img.login/testeCarditem.jpg'
import ShoppingCartOutlined from '@mui/icons-material/ShoppingCartOutlined';
import StorefrontOutlined from '@mui/icons-material/StorefrontOutlined';
import AccountCircleOutlined from '@mui/icons-material/AccountCircleOutlined';
import AttachMoneyOutlined from '@mui/icons-material/AttachMoneyOutlined';






 export default function ButtonAppBar() {
    const tema = createTheme(
        { palette: { primary: { main: "#fff" } } }
    )
    return (
        <ThemeProvider theme={tema}>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>

                        <Box component={"img"} src={logo} sx={{
                            flexGrow: 0, height: "39px",
                            marginRight: "13px"
                        }}>
                        </Box>

                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Market Cubos
                        </Typography>


                        <Button className="button-navbar-font" sx={{ textTransform: "none" }}
                            startIcon={<ShoppingCartOutlined />} color="inherit">Meu carrinho</Button>
                        <Button className="button-navbar-font" sx={{ textTransform: "none" }}
                            startIcon={<StorefrontOutlined />} color="inherit">Meus anúncios</Button>
                        <Button className="button-navbar-font" sx={{ textTransform: "none" }}
                            startIcon={<AccountCircleOutlined />} color="inherit">Usuário </Button>


                        <Button
                            disableElevation
                            startIcon={<AttachMoneyOutlined />}
                            variant="contained"
                            sx={{
                                fontFamily: 'Public Sans',
                                fontStyle: "normal",
                                fontWeight: "500",
                                lineWeight: "24px",
                                textTransform: "none",
                                letterSpacing: "-0.382174px",
                                ":hover": { background: "#C10063" },
                                color: "#F3F3F3", background: "#B7005C", borderRadius: "30px"
                            }}
                        >
                            Sign In
                        </Button>


                    </Toolbar>
                </AppBar>
            </Box>
        </ThemeProvider>

    );

}