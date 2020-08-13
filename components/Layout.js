import Link from 'next/link';
import Head from 'next/head';
import { useState } from 'react';

const NavLink = ({ title }) => {
	return (
		<a href={`#${title}`}>
			<div className="side-nav-link">
				{title}
			</div>
		</a>
	);
};


const SideNav = ({ charts = [] }) => {
	return (
		<div className="side-nav">
			{charts.map((chart, index) => (
				<NavLink key={index} {...chart} />
			))}
		</div>
	)
}

const Header = () => {
	return (
		<div className="header">
			<h3 className="ma0">
				Covid-19 in Ontario
			</h3>
		</div>
	);
};


export default function Layout ({
	children,
	title = 'Covid-19 in Ontario',
	currentPath = '/',
	charts = [],
}) {
	const [menuIsOpen, setMenuIsOpen] = useState(true);

	return (
		<div>
			<Head>
				<title>{title}</title>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<script data-name="BMC-Widget" src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js" data-id="russellpollari" data-description="Support me on Buy me a coffee!" data-message="Thank you for visiting! Consider buying me a coffee :)" data-color="#FF813F" data-position="left" data-x_margin="18" data-y_margin="18"></script>
				<script async src="https://www.googletagmanager.com/gtag/js?id=UA-163333616-1"></script>
				<script>
					{`
						window.dataLayer = window.dataLayer || [];
						function gtag(){dataLayer.push(arguments);}
						gtag('js', new Date());
						gtag('config', 'UA-163333616-1');
					`}
				</script>
			</Head>
			<div>
				<Header />
				<SideNav charts={charts} />
				<div className="main-content">
					{children}
				</div>
			</div>
		</div>
	);
};
