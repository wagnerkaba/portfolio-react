import {
    Avatar,
    Chip,
    Typography,
    Stack,
    Slide,
    Link


} from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import wagner from "../assets/images/wagner.jpg"
function Intro() {
    return (

        <Grid container display="flex" justifyContent="center" alignItems="center" sx={{ mt: 12 }}>
            {/* Nome e foto */}
            <Slide direction="down" in={true} >
                <Grid xs={11} md={5} spacing={1}>

                    <Grid display="flex" justifyContent="center" alignItems="center">
                        <Avatar alt="Wagner Kaba" src={wagner} sx={{ width: 200, height: 200 }} />
                    </Grid>
                    <Grid display="flex" justifyContent="center" alignItems="center">
                        <Typography variant="h1">
                            <strong>Wagner</strong>
                        </Typography>
                    </Grid>
                    <Grid display="flex" justifyContent="center" alignItems="center">
                        <Typography variant="h1">
                            <strong>Kaba</strong>
                        </Typography>
                    </Grid>

                </Grid>
            </Slide>

            {/* Informações básicas */}
            <Slide direction="left" in={true}>
                <Grid container xs={11} md={5} spacing={3} sx={{ mt: 3 }}>
                    <Grid>
                        <Typography variant="h3">
                            <strong>Fullstack Web Developer</strong>
                        </Typography>
                    </Grid>
                    <Grid>
                        <Typography variant="subtitle1">
                            Olá! Meu nome é Wagner Kaba e sou Desenvolvedor Web autodidata.
                            Utilizo Javascript e Java, além das tecnologias relacionadas, para desenvolver soluções para web.
                            Nesta página você poderá conhecer meu portfolio e meu <Link 
                                href="https://drive.google.com/file/d/10viw9fm8HbwCuUzYaYiGYwKcBUqrMCkQ/view" 
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