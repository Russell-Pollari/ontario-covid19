import Link from 'next/link';
import Head from 'next/head';


const NavLink = ({ path, currentPath, label }) => {
	return (
		<Link href={path}>
			<a className={currentPath === path ? 'active-link mh8' : 'link mh8'}>
				{label}
			</a>
		</Link>
	);
};


export default function Layout ({
	children,
	title = 'Covid-19 in Ontario',
	currentPath = '/',
	charts = [],
}) {
	return (
		<div>
			<Head>
				<title>{title}</title>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<script data-name="BMC-Widget" src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js" data-id="russellpollari" data-description="Support me on Buy me a coffee!" data-message="Thank you for visiting! Consider buying me a coffee :)" data-color="#FF813F" data-position="right" data-x_margin="18" data-y_margin="18"></script>
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
			<header>
				<nav>
					<NavLink path="/" currentPath={currentPath} label="Ontario" />
				</nav>
			</header>
			<div>
				<div style={{ position: 'fixed', width: '200px', height: '100%', backgroundColor: 'white', padding: '16px', boxSizing: 'border-box' }}>
					{charts.map((chart, index) => (
						<a href={`#${chart.title}`}>
							<div className="mv16">
								{chart.title}
							</div>
						</a>
					))}
				</div>
				<div style={{ position: 'absolute', left: '200px', right: '0', top: '0' }}>
					{children}
				</div>
			</div>
		</div>
	);
};
