import React from 'react';
import Paper from '@mui/material/Paper';
import Navigation from '@mui/material/BottomNavigation';
import NavigationAction from '@mui/material/BottomNavigationAction';
import PsychologyIcon from '@mui/icons-material/Psychology';
import InfoIcon from '@mui/icons-material/Info';
import { useRouter } from 'next/router';

export default function BottomNavigation()
{
    const router = useRouter();

    /**
     * Maneja el cambio de navegación
     * 
     * @param   {object} event 
     * @param   {string} newValue
     * @returns {void}
     */
    const handleChange = (event, newValue) =>
    {
        router.push(newValue);
    }

    return (
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
            <Navigation value={router.route} onChange={handleChange}>
                <NavigationAction value='/' label="Practicar" icon={<PsychologyIcon />} />
                <NavigationAction value='/about' label="Acerca" icon={<InfoIcon />} />
            </Navigation>
        </Paper>
    );
}