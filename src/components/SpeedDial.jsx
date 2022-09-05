import * as React from 'react';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import MenuIcon from '@mui/icons-material/Menu';
import FolderSpecialIcon from '@mui/icons-material/FolderSpecial';
import ArticleIcon from '@mui/icons-material/Article';
import CloseIcon from '@mui/icons-material/Close';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

import {
    Link,
    SpeedDialIcon,
    useTheme
} from '@mui/material';
import { useChangeTheme } from './ChangeTheme';



function BasicSpeedDial() {
    const theme = useTheme();
    const colorMode = useChangeTheme();
    let corTema = theme.palette.mode === 'dark' ? 'Claro' : 'Escuro';

    const actions = [
        {
            icon:
                <Link
                    sx={{ mt: 1 }}
                    href="#portfolio"
                    color="inherit"
                >
                    <FolderSpecialIcon />
                </Link>,
            name: 'Portfólio'
        },
        {
            icon:
                <Link
                    sx={{ mt: 1 }}
                    href="https://drive.google.com/file/d/10viw9fm8HbwCuUzYaYiGYwKcBUqrMCkQ/view"
                    target="_blank"
                    rel="noreferrer"
                    color="inherit"
                >
                    <ArticleIcon />
                </Link>,
            name: 'Currículo'
        },
        {
            icon:
                <Link  sx={{ mt: 1 }}onClick={colorMode.toggleColorMode} color="inherit">
                    {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                </Link>,
            name: corTema
        }

    ];



    return (
        <SpeedDial
            ariaLabel="Menu de navegação"
            direction='down'
            sx={{ position: 'absolute', top: 16, right: 16 }}
            icon={
                <SpeedDialIcon
                    icon={<MenuIcon />}
                    openIcon={<CloseIcon />}
                />
            }
        >
            {actions.map((action) => (
                <SpeedDialAction
                    key={action.name}
                    icon={action.icon}
                    tooltipTitle={action.name}
                    tooltipOpen
                />
            ))}
        </SpeedDial>
    );
}

export default BasicSpeedDial;