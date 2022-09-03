import * as React from 'react';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import MenuIcon from '@mui/icons-material/Menu';
import FolderSpecialIcon from '@mui/icons-material/FolderSpecial';
import ArticleIcon from '@mui/icons-material/Article';
import CloseIcon from '@mui/icons-material/Close';
import {
    Link,
    SpeedDialIcon
} from '@mui/material';


const actions = [
    { icon: <Link href="#portfolio"><FolderSpecialIcon /></Link>, name: 'Portfólio' },
    {
        icon: <Link
            href="https://drive.google.com/file/d/10viw9fm8HbwCuUzYaYiGYwKcBUqrMCkQ/view"
            target="_blank"
            rel="noreferrer"
        ><ArticleIcon /></Link>, name: 'Currículo'
    },

];

function BasicSpeedDial() {
    return (
        <SpeedDial
            ariaLabel="Menu de navegação"
            direction='down'
            sx={{ position: 'absolute', top: 16, right: 16 }}
            icon={
                <SpeedDialIcon 
                    icon={<MenuIcon/>}
                    openIcon={<CloseIcon/>}
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