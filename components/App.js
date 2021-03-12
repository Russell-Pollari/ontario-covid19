import Head from 'next/head';

import Layout from './Layout';

const App = ({ children }) => {
	return (
		<div>
			<Head>
				<title>Covid-19 in Ontario</title>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<script async src="https://www.googletagmanager.com/gtag/js?id=UA-163333616-1"></script>
				<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
				<script>
					{`
						window.dataLayer = window.dataLayer || [];
						function gtag(){dataLayer.push(arguments);}
						gtag('js', new Date());
						gtag('config', 'UA-163333616-1');
					`}
				</script>
			</Head>
			<Layout>
				{children}
			</Layout>
		</div>
	);
};

export default App;
