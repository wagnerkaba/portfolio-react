import {
    Typography,
    Avatar

} from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import githubnav from '../assets/images/githubnav.jpg';

function Projeto() {
    return (
        <>
            <Grid container display="flex" justifyContent="center" alignItems="center" sx={{ my: 6 }}>
                {/* Imagem do projeto */}
                <Grid xs={11} md={5} display="flex" justifyContent="center" alignItems="center">
                    <Avatar
                        alt="Projeto"
                        variant="rounded"
                        src={githubnav}
                        sx={{ width: 510, height: 450 }}
                    />
                </Grid>

                {/* Descrição do projeto */}
                <Grid xs={11} md={5}>
                    <Grid>
                        <Typography variant="h3">
                            <strong>Fullstack Web Developer</strong>
                        </Typography>
                    </Grid>
                    <Grid>
                        <Typography variant="subtitle1">
                            Olá! Meu nome é Wagner Kaba e sou Desenvolvedor Web autodidata.
                            Utilizo Javascript e Java, além das tecnologias relacionadas, para desenvolver soluções para web.
                            Nesta página você poderá conhecer meu portfolio e meu currículo.
                        </Typography>
                    </Grid>

                </Grid>
            </Grid>

        </>

    );
}

export default Projeto;