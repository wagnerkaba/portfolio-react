import {
    Avatar,
    Chip,
    Typography,
    Stack,
    Slide,
    Link,
    useTheme


} from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import wagner from "../assets/images/wagner.jpg";

function Intro() {
    const theme = useTheme();
    let bgColor = theme.palette.mode === 'dark' ? 'divider' : 'background.default';
    return (

        <Grid
            container
            display="flex"
            justifyContent="center"
            alignItems="center"
            sx={{
                height: { md: "100vh" }, // em display maiores que md, o componente Intro aparece ocupando a tela inteira
                backgroundColor: bgColor
            }}
        >
            {/* Nome e foto */}
            <Slide direction="down" in={true} timeout={1000}>
                <Grid xs={11} md={5} spacing={1}>
                    <Grid display="flex" justifyContent="center" alignItems="center" sx={{ mt: 3 }}>
                        <Avatar alt="Wagner Kaba" src={wagner} sx={{ width: 200, height: 200 }} />
                    </Grid>
                    <Grid display="flex" justifyContent="center" alignItems="center">
                        <Typography sx={{
                            fontSize: { xs: 'h2.fontSize', md: 'h1.fontSize' },
                            lineHeight: { xs: 1, md: 'normal' },
                            fontWeight: { xs: 900, md: 700 }
                        }}
                        >
                            Wagner
                        </Typography>
                    </Grid>
                    <Grid display="flex" justifyContent="center" alignItems="center">
                        <Typography sx={{
                            fontSize: { xs: 'h2.fontSize', md: 'h1.fontSize' },
                            lineHeight: { xs: 1, md: 'normal' },
                            fontWeight: { xs: 900, md: 700 }
                        }}
                        >
                            Kaba
                        </Typography>
                    </Grid>

                </Grid>
            </Slide>

            {/* Informações básicas */}
            <Slide direction="left" in={true} timeout={500}>
                <Grid container xs={11} md={5} spacing={3} sx={{ mt: 3 }}>
                    <Grid>
                        <Typography sx={{
                            fontSize: { xs: 'h4.fontSize', md: 'h3.fontSize' },
                            lineHeight: { xs: 1, md: 'normal' }
                        }}
                        >
                            <strong>Fullstack Web Developer</strong>
                        </Typography>
                    </Grid>
                    <Grid>
                        <Typography variant="subtitle1">
                            Olá! Meu nome é Wagner Kaba e sou Desenvolvedor Web autodidata.
                            Utilizo Javascript e Java, além das tecnologias relacionadas, para desenvolver soluções para web.
                            Nesta página você poderá conhecer meu portfolio e meu <Link
                                href="https://drive.google.com/file/d/16iU-uMIcWSe3SfDYBipVW-kUhufC9h_g/view?usp=sharing"
                                target="_blank"
                                rel="noreferrer"
                            >
                                currículo
                            </Link>.
                        </Typography>
                    </Grid>
                    <Grid>
                        <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap' }}>
                            <Chip label="Java" variant="outlined" />
                            <Chip label="Javascript" variant="outlined" />
                            <Chip label="Spring Boot" variant="outlined" />
                            <Chip label="Typescript" variant="outlined" />
                            <Chip label="React" variant="outlined" />
                            <Chip label="HTML" variant="outlined" />
                            <Chip label="CSS" variant="outlined" />
                            <Chip label="Material UI" variant="outlined" />
                            <Chip label="PostgreSQL" variant="outlined" />
                            <Chip label="Git" variant="outlined" />
                            <Chip label="Docker" variant="outlined" />
                            <Chip label="Flutter" variant="outlined" />
                            <Chip label="NodeJS" variant="outlined" />
                        </Stack>
                    </Grid>
                </Grid>
            </Slide>
        </Grid>



    );
}

export default Intro;