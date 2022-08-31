import Grid from '@mui/material/Unstable_Grid2';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

function Footer() {
    return (
        <>
            <Grid container display="flex" justifyContent="center" alignItems="center" sx={{ height: 60, backgroundColor: 'info.light' }}>
                <Grid>
                    <GitHubIcon fontSize={'large'} />
                </Grid>
                <Grid>
                    <LinkedInIcon fontSize={'large'}/>
                </Grid>
            </Grid>
        </>
    );
}

export default Footer;
