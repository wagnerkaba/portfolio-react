import * as React from 'react';
import {
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography,
    Slide
} from '@mui/material';
import VisibilitySensor from 'react-visibility-sensor';



const Projeto = ({ titulo, imagem, descricao, linkDemo, linkGitHub }) => {

    let [active, setActive] = React.useState(false);



    return (
        <VisibilitySensor
            onChange={(partialVisibility) => {
                if (partialVisibility) {
                    setActive(true);
                }
            }}
        >
            <div>
                <Slide direction='right' in={active} timeout={1000}>
                    <Card>
                        <CardMedia
                            component="img"
                            height="300"
                            image={imagem}
                            alt={titulo}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {titulo}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {descricao}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button
                                size="small"
                                href={linkDemo}
                                target={"_blank"}
                                rel={"noreferrer"}
                            >
                                Demonstração
                            </Button>
                            <Button
                                size="small"
                                href={linkGitHub}
                                target={"_blank"}
                                rel={"noreferrer"}
                            >
                                Github
                            </Button>
                        </CardActions>
                    </Card>
                </Slide >
            </div>
        </VisibilitySensor >


    );

}

export default Projeto;