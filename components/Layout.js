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


const SideNav = ({ charts = [], toggleMenu, menuIsOpen }) => {
	return (
		<span>
			<div className="fixed header w-100">
				<img src="burger.png" className="w24 pa8 pointer" onClick={toggleMenu} />
				<span className="pa8">
					<strong>
						Covid-19 in Ontario
					</strong>
				</span>
			</div>
			{menuIsOpen && (
				<div className="side-nav">
					<a href="#">
						<div className="side-nav-link">
							Summary
						</div>
					</a>
					{charts.map((chart, index) => (
						<NavLink key={index} {...chart} />
					))}
				</div>
			)}
		</span>
	);
}


export default function Layout ({
	children,
	title = 'Covid-19 in Ontario',
	currentPath = '/',
	charts = [],
}) {
	const [menuIsOpen, setMenuIsOpen] = useState(true);

	const toggleMenu = () => {
		setMenuIsOpen(!menuIsOpen);
	};

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
				<SideNav
					charts={charts}
					toggleMenu={toggleMenu}
					menuIsOpen={menuIsOpen}
				/>
				<div className={`main-content ${menuIsOpen ? 'ml200' : ''}`}>
					{children}
				</div>
			</div>
		</div>
	);
};
