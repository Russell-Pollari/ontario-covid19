import { Fragment } from 'react';
import getConfig from 'next/config';
import Head from 'next/head';

import '../styles.css';

export default function MyApp({ Component, pageProps }) {
	const { publicRuntimeConfig } = getConfig();
	return (
		<Fragment>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href={publicRuntimeConfig.basePath + '/favicon.ico'} />
				<title>Covid-19 in Ontario</title>
			</Head>
			<Component {...pageProps} />
		</Fragment>
	);
}
