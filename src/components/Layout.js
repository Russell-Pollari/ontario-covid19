import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

import MenuTopRight from './MenuTopRight';


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
	drawer: {
		width: drawerWidth,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	closeButton: {
		margin: theme.spacing(2),
	},
	// necessary for content to be below app bar
	toolbar: {
		...theme.mixins.toolbar,
		textAlign: 'right',
	},
	appBar: {
		flexGrow: 1,
	},
	title: {
		flexGrow: 1,
	},
	drawerPaper: {
		width: drawerWidth,
	},
	content: {
		padding: theme.spacing(3),
	},
	logo: {
		marginRight: 8,
		verticalAlign: 'top',
		display: 'inline-block',
	}
}));


const Layout = ({ window, menuItems = [], children }) => {
	const classes = useStyles();
	const [menuOpen, setMenuOpen] = useState(false);

	const handleDrawerToggle = () => {
		setMenuOpen(!menuOpen);
	};

	const drawer = (
		<div>
			<div className={classes.toolbar}>
				<IconButton
					color="inherit"
					aria-label="open drawer"
					edge="start"
					onClick={handleDrawerToggle}
					className={classes.closeButton}>
					<CloseIcon/>
				</IconButton>
			</div>
			<Divider />
			<List>
				{menuItems.map(({ title, href }, index) => (
					<ListItem button component="a" key={index} href={href}>
						<ListItemText primary={title} />
					</ListItem>
				))}
			</List>
		</div>
	);

	const container = window !== undefined ? () => window().document.body : undefined;

	return (
		<div className={classes.root}>
			<CssBaseline />
			<AppBar position="fixed" className={classes.appBar}>
				<Toolbar>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						edge="start"
						onClick={handleDrawerToggle}
						className={classes.menuButton}>
						<MenuIcon />
					</IconButton>
					<Typography variant="h6" noWrap className={classes.title}>
						<img src="/favicon-32x32.png" alt="" className={classes.logo} />
						Covid-19 in Ontario
					</Typography>
					<MenuTopRight />
				</Toolbar>
			</AppBar>
			<nav className={classes.drawer}>
				<Drawer
					container={container}
					variant="temporary"
					anchor="left"
					open={menuOpen}
					onClose={handleDrawerToggle}
					classes={{
						paper: classes.drawerPaper,
					}}
					ModalProps={{
						keepMounted: false,
					}}>
					{drawer}
				</Drawer>
			</nav>
			<main className={classes.content}>
				<div className={classes.toolbar} />
				<Container>
					{children}
				</Container>
			</main>
		</div>
	);
};


export default Layout;
