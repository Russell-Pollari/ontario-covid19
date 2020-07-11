import Link from 'next/link';
import Head from 'next/head';

const NavLink = ({ path, currentPath, label }) => (
	<Link href={path}>
		<a className={currentPath === path ? 'active-link mh8' : 'link mh8'}>
			{label}
		</a>
	</Link>
);

export default function Layout ({
	children,
	title = 'Covid-19 in Ontario',
	currentPath = '/'
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
						<NavLink path="/phu" currentPath={currentPath} label="PHUs" />
						<NavLink path="/logs" currentPath={currentPath} label="Logs" />
						<NavLink path="/about" currentPath={currentPath} label="About" />
					</nav>
				</header>
				{children}
		</div>
	);
};
