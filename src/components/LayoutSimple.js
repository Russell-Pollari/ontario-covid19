import Link from 'next/link';

import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ArrowBackOutlinedIcon from '@material-ui/icons/ArrowBackOutlined';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

import MenuTopRight from './MenuTopRight';

const useStyles = makeStyles((theme) => ({
	toolbar: theme.mixins.toolbar,
	main: {
		padding: 16,
	},
	appBar: {
		flexGrow: 1,
	},
	title: {
		flexGrow:1,
	}
}));

const LayoutSimple = ({
	title,
	children,
}) => {
	const classes = useStyles();
	return (
		<div>
			<CssBaseline />
			<AppBar position="fixed" className={classes.appBar}>
				<Toolbar>
					<IconButton
						color="inherit"
						edge="start">
						<Link href="/">
							<ArrowBackOutlinedIcon />
						</Link>
					</IconButton>
					<Typography variant="h6" noWrap className={classes.title}>
						{title}
					</Typography>
					<MenuTopRight />
				</Toolbar>
			</AppBar>
			<main className={classes.main}>
				<div className={classes.toolbar} />
				<Container>
					{children}
				</Container>
			</main>
		</div>
	);
};


export default LayoutSimple;
