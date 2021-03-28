import { Fragment } from 'react';
import Head from 'next/head';

import '../styles.css';

export default function MyApp({ Component, pageProps }) {
	return (
		<Fragment>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<title>Covid-19 in Ontario</title>
			</Head>
			<Component {...pageProps} />
		</Fragment>
	);
}
