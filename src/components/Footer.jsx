import Grid from '@mui/material/Unstable_Grid2';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link } from '@mui/material';

function Footer() {
    return (
        <>
            <Grid
                container
                display="flex"
                justifyContent="center"
                alignItems="center"
                sx={{ height: 60, backgroundColor: 'info.light' }}
                spacing={2}
            >
                <Grid>
                    <Link
                        href="https://github.com/wagnerkaba"
                        target="_blank"
                        rel="noreferrer"
                        color="inherit"
                    >
                        <GitHubIcon fontSize={'large'} />
                    </Link>
                </Grid>
                <Grid>
                    <Link
                        href="https://www.linkedin.com/in/wagnerk-profile/"
                        target="_blank"
                        rel="noreferrer"
                        color="inherit"
                    >
                        <LinkedInIcon fontSize={'large'} />
                    </Link>

                </Grid>
            </Grid>
        </>
    );
}

export default Footer;
