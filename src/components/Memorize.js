
import React from 'react';
import trimNewlines from 'trim-newlines';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import transformText from '../helpers/transformText';
import deviceType from '../helpers/deviceType';
import dynamic from "next/dynamic";

const Tooltip = dynamic(() => import('@mui/material/Tooltip'), {
    ssr: false,
})

export default function Memorize()
{
    const [value, setValue] = React.useState('La anatomía es la ciencia de las estructuras del cuerpo. La que describe y muestra su organización es la anatomía descriptiva. La que expone su disposición recíproca en las diferentes regiones es la anatomía topográfica. La que indica las relaciones entre formas y funciones es la anatomía funcional.');
    const [readingLength, setReadingLength] = React.useState(0);
    const [memorizeMode, setMemorizeMode] = React.useState('first_letters');
    const [isReading, setIsReading] = React.useState(false);
    const [wordFocussedIndex, setWordFocussedIndex] = React.useState(0);

    /**
     * Maneja cuando se presione una tecla en el recuadro
     * de lectura para memorizar (SOLO PC)
     * 
     * @param   {object} event
     * @returns {void}
     */
    const handleKeyDownWhenReading = (event) =>
    {
        event.preventDefault();

        if (deviceType() == 'desktop') {
            // Avanza
            if ((event.keyCode === 32 || event.keyCode === 39 || event.keyCode === 38) && wordFocussedIndex !== (readingLength - 1)) {
                setWordFocussedIndex(wordFocussedIndex + 1)
            }

            // Retrocede
            if ((event.keyCode === 37 || event.keyCode === 40) && wordFocussedIndex !== 0) {
                setWordFocussedIndex(wordFocussedIndex - 1)
            }
        }
    }

    /**
     * Maneja cuando se presiona en el recuadro
     * de lectura para memorizar (SOLO MOVILES)
     * 
     * @param   {object} event
     * @returns {void}
     */
    const handleClickWhenReading = (event) =>
    {
        event.preventDefault();

        if (deviceType() != 'desktop') {
            // Avanza
            if (wordFocussedIndex !== (readingLength - 1))
                setWordFocussedIndex(wordFocussedIndex + 1)
            else
                setWordFocussedIndex(0)
        }
    }

    /**
     * Maneja el cambio de valor
     * 
     * @param {object} event 
     * @returns {void}
     */
    const handleTextareaChange = event =>
    {
        setValue(trimNewlines(event.target.value))
    }

    /**
     * Maneja el cambio del modo de memorizar
     * 
     * @param {object} event 
     * @returns {void}
     */
    const handleModeChange = event =>
    {
        setMemorizeMode(event.target.value)
    }

    /**
     * Maneja cuando se pulse el boton de memorizar
     * 
     * @returns {void}
     */
    const handleMemorizeButton = () =>
    {
        setIsReading(!isReading);
        window.scrollTo({top: 0, behavior: 'smooth'});
    }

    // Cuando este listo para memorizar
    React.useEffect(() =>
    {
        if (isReading) {
            setWordFocussedIndex(0)
            setReadingLength(transformText(trimNewlines(value), memorizeMode).length)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isReading])


    return (
        <Grid container spacing={3}>

            {/* Zona de redacción */}
            <Grid item xs={12} md={!isReading ? 6 : 12}>
                {!isReading &&
                    <>
                        <TextField
                            id="paragraph"
                            label="Párrafo"
                            multiline
                            rows={15}
                            value={value}
                            onChange={handleTextareaChange}
                            disabled={isReading}
                            fullWidth
                        />

                        <FormControl fullWidth sx={{ marginY: 3 }}>
                            <InputLabel id="memorize_mode">Modo de Memorizar</InputLabel>
                            <Select
                                labelId="memorize_mode"
                                id="memorize_mode"
                                value={memorizeMode}
                                label="Modo de Memorizar"
                                onChange={handleModeChange}
                                disabled={isReading}
                                fullWidth
                            >
                                <MenuItem value={'first_letters'}>Mostrar primeras vocales</MenuItem>
                                <MenuItem value={'words_and_underscores'}>Mostrar palabras y espacios en blanco</MenuItem>
                            </Select>
                        </FormControl>

                        <Button
                            fullWidth
                            size='large'
                            variant={isReading ? 'outlined' : 'contained'}
                            onClick={handleMemorizeButton}>
                            {isReading ? 'Volver a redactar' : '¡Memorizar!'}
                        </Button>
                    </>
                }
            </Grid>

            {/* Zona de lectura */}
            <Grid
                item
                xs={12}
                md={!isReading ? 6 : 12}
                tabIndex={0}
                onKeyDown={handleKeyDownWhenReading}
                onClick={handleClickWhenReading}
                id='reading-area'
                sx={{
                    cursor: 'pointer',
                    outline: 'none',
                    WebkitTapHighlightColor: 'transparent'
                }}>
                <Paper
                    tabIndex={0}
                    sx={{
                        '&:focus': { backgroundColor: 'divider' },
                        WebkitTapHighlightColor: 'transparent',
                        outline: 'none',
                        transition: 'all 150ms ease',
                        padding: 3,
                        display: 'flex',
                        justifyContent: 'flex-start',
                        flexWrap: 'wrap',
                        gap: 1
                    }}>
                    {transformText(value, memorizeMode).map((el, index) => (
                        <Tooltip title={el[0]} key={index}>
                            <Chip
                                color={isReading && wordFocussedIndex == index ? 'primary' : 'default'}
                                variant={isReading && wordFocussedIndex == index ? 'filled' : 'outlined'}
                                label={el[1]}
                            />
                        </Tooltip>
                    )
                    )}
                </Paper>

                {/* Boton para volver a la zona de redaccion */}
                {isReading && <Divider sx={{ marginY: 5 }}>
                    <Button color='secondary' variant='outlined' onClick={handleMemorizeButton}>
                        Volver a redactar
                    </Button>
                </Divider>}
            </Grid>
        </Grid >
    )
}