import Head from 'next/head'
import AppBar from '../components/AppBar'
import Container from '@mui/material/Container';
import Memorize from '../components/Memorize';

export default function Home()
{
	return (
		<main>
			<Head>
				<title>Memoriza textos LITERALMENTE 🔥</title>
				<meta name="description" content="Herramienta que te ayuda a aprender textos de manera literal" />
			</Head>
			<Container sx={{ marginY: 5, paddingBottom: 7 }}>
				<Memorize />
			</Container>
		</main>
	)
}
