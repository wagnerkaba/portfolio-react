
import {
    Typography,
    Slide,
    useTheme
} from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import Projeto from './Projeto';
import { data } from '../data';
import * as React from 'react';
import VisibilitySensor from 'react-visibility-sensor-v2';

function Projetos() {
    const theme = useTheme();
    let bgColor = theme.palette.mode === 'dark' ? 'background.default' : 'info.light';
    let [active, setActive] = React.useState(false);


    return (

        <Grid id="portfolio" sx={{ backgroundColor: bgColor }}>

            <Grid xs={12} display="flex" justifyContent="center" alignItems="center" sx={{ mt: 3, pt: 8, pb: 3 }}>
                <VisibilitySensor
                    onChange={(isVisible) => {
                        if (isVisible) {
                            setActive(true);
                        }
                    }}
                >
                        <div>
                            <Slide direction="left" in={active} timeout={1000}>

                                <Typography variant="h2">
                                    <strong>Portfólio</strong>

                                </Typography>

                            </Slide>
                        </div>
                </VisibilitySensor>

            </Grid>
            <Grid container xs={12} display="flex" justifyContent="center" alignItems="center">

                {
                    data.projetos.map((p) => {
                        return (
                            <Grid xs={11} md={5} spacing={1} sx={{ p: 3 }} key={p.titulo}>
                                <Projeto
                                    titulo={p.titulo}
                                    imagem={p.imagem}
                                    descricao={p.descricao}
                                    linkDemo={p.linkDemo}
                                    linkGitHub={p.linkGitHub}
                                />
                            </Grid>


                        );
                    }

                    )
                }


            </Grid>

        </Grid>



    );
}

export default Projetos;