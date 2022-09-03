
import {
    Typography,
    Slide
} from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import Projeto from './Projeto';
import { data } from '../data';

function Projetos() {
    return (
        <>
            <Grid id="portfolio" sx={{ backgroundColor: 'info.light' }}>

                <Grid xs={12} display="flex" justifyContent="center" alignItems="center" sx={{ mt:3, pt: 8, pb: 3 }}>
                    <Typography variant="h2">
                        <strong>Portfólio</strong>
                    </Typography>
                </Grid>
                <Grid container xs={12} display="flex" justifyContent="center" alignItems="center">

                    {
                        data.projetos.map((p) => {
                            return (
                                <Slide direction="up" in={true} key={p.titulo}>
                                    <Grid xs={11} md={5} spacing={1} sx={{ p: 3 }}>
                                        <Projeto
                                            titulo={p.titulo}
                                            imagem={p.imagem}
                                            descricao={p.descricao}
                                            linkDemo={p.linkDemo}
                                            linkGitHub={p.linkGitHub}
                                        />
                                    </Grid>

                                </Slide>

                            );
                        }

                        )
                    }


                </Grid>

            </Grid>

        </>

    );
}

export default Projetos;