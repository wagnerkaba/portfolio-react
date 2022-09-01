import {
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography
} from '@mui/material';


const Projeto = ({titulo, imagem, descricao, linkDemo, linkGitHub }) => {
    return (
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
    );

}

export default Projeto;