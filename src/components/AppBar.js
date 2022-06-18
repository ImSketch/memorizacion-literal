import MuiAppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

export default function AppBar(props)
{
    /**
     * Cambia el modo del tema de la aplicacion
     * 
     * @returns {void}
     */
    const changeThemeMode = () =>
    {
        dispatch(
            currentMode == 'light' ? switchToDarkMode() : switchToLightMode()
        );
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <MuiAppBar position="static" sx={{ backgroundColor: 'black'}}>
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        {props.title}
                    </Typography>
                </Toolbar>
            </MuiAppBar>
        </Box>
    );
}