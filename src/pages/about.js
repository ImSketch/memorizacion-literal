import Head from 'next/head'
import AppBar from '../components/AppBar'
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';

export default function About()
{
    return (
        <main>
            <Head>
                <title>Memoriza textos LITERALMENTE 🔥</title>
                <meta name="description" content="Herramienta que te ayuda a aprender textos de manera literal" />
            </Head>
            <AppBar title='Acerca' />

            <Container sx={{ marginY: 5, paddingBottom: 7 }}>

                <Stack spacing={3}>
                    <Typography variant='body1'>
                        Esta aplicación está hecha originalmente con el objetivo de memorizar conceptos anatómicos de manera ágil, pero puede ser utilizada para cualquier otro tema.
                        La aplicación trocea el texto que introduzcas dejando únicamente a la vista la primera letra de cada palabra o las primeras palabras segudia de guiones bajos. 
                        El objetivo de esto es darte una pista visual para que logres recordar la palabra completa, y así sigas con las palabras que restan.
                    </Typography>
                    <Typography variant='body1'>
                        Está inspirado en la técnica que explica el doctor Alberto Sanagustín
                        {' '}<Link rel="noreferrer" href='https://www.youtube.com/watch?v=SH3dIYxLR3E' target='_blank'>en su video de cómo memorizar textos largos palabra por palabra</Link>,
                        al igual que en el video de Pablo Lomeli <Link rel="noreferrer" href='https://www.youtube.com/watch?v=a_X4iNksoFE' target='_blank'>del mismo tema</Link>.
                    </Typography>

                    <Divider>
                        <Chip color='primary' label="¿Cómo sacar provecho?" />
                    </Divider>

                    <Stack 
                        direction='row' 
                        spacing={2} 
                        divider={<Divider orientation="vertical" flexItem />}>
                        <Typography variant='body1' gutterBottom>
                            <b>1.</b> De nada servirá que repitas como un papagayo el contenido que deseas memorizar sin antes haberlo entendido <b>perfectamente</b>. Por lo tanto, use esta
                            herramienta únicamente cuando haya comprendido lo que desea memorizar.
                        </Typography>
                        <Typography variant='body1' gutterBottom>
                            <b>2.</b> Reparta el contenido que deseas aprender en bloques pequeños. Una vez domines un bloque, prosigue con el otro, hasta que los domines todos.
                        </Typography>
                        <Typography variant='body1' gutterBottom>
                            <b>3.</b> Practique de forma espaciada (utiliza la técnica de la repetición espaciada).
                            En YouTube hay diversos canales que explican cómo funciona esta técica. ¡Eche un vistazo!
                        </Typography>
                    </Stack>

                    <Divider>
                        <Chip color='secondary' label="Motivación" />
                    </Divider>
                    <Typography variant='body1'>
                        Originalmente, esta aplicación fue hecha con el objetivo de servir en la preparación de los <b>Aspirantes a Aspirantes</b> (doble A) de la{' '}
                        <b>Cátedra de Anatomía de la Universidad Autónoma de Santo Domingo</b>.
                        Si eres uno de ellos, espero encarecidamente que en este proyecto encuentres soltura a la hora de memorizar
                        el contenido del taller <i>(¡Tú puedes, ánimo! 🎉)</i>.
                    </Typography>
                    <Typography variant='body1'>
                        Esta aplicación no funciona para memorizar a lo bruto
                        {' '}<Link href='https://dle.rae.es/psitacismo' target='_blank' rel="noreferrer">(hacer psitacismo)</Link>.
                        Insisto... por favor, lee el contenido antes, entiéndelo y luego memorízalo.
                    </Typography>

                    <Divider>
                        <Chip color='success' label="Instrucciones de uso" />
                    </Divider>
                    <Typography variant='body1'>
                        1. Redacta el contenido en el cuadro de texto llamado <i>Párrafo</i>. Notarás que no puedes dividir un párrafo en dos,
                        lo cual está hecho adrede, con el objetivo de que dividas en fragmentos lo que deseas aprender.
                    </Typography>
                    <Typography variant='body1'>
                        2. Selecciona el modo de memorización. Por defecto, está colocada la opción que permite ver únicamente la primera letra
                        de cada palabra (lo cual es genial, porque reta tu mente a <Link href='https://es.wikipedia.org/wiki/Recuperaci%C3%B3n_(memoria)' target='_blank' rel="noreferrer">recuperar la información</Link> 
                        {' '}de manera más eficiente 🔥). Si quieres ir más suave, está la opción que permite ver varias letras y guiones bajos.
                    </Typography>
                    <Typography variant='body1'>
                        3. Una vez hayas dado clic en el botón de <i>memorizar</i>, tendrás la opción de presionar la flecha derecha de tu teclado y guiarte
                        gracias a que cada palabra se irá resaltando. Si estás en tablet o dispositivo móvil, presiona cerca del texto y la palabra siguiente
                        se resaltará.
                    </Typography>
                    <Typography variant='body1'>
                        <i>Ptss...</i> 🤫 Si olvidas alguna palabra, puedes echar un breve vistazo pasando el cursor por encima de la letra.
                        {' '}<b>Pero no abuses</b>, la idea es retar tu memoria para recuperar la información de forma correcta, y que con la práctica 
                        {' '}<Link href='https://es.wikipedia.org/wiki/Curva_del_olvido' target='_blank' rel="noreferrer">la curva del olvido disminuya.</Link>
                    </Typography>
                    <Divider>
                        <Chip color='default' label={'© Omar Ureña Medina ' + new Date().getFullYear()} />
                    </Divider>
                </Stack>
            </Container>
        </main>
    )
}