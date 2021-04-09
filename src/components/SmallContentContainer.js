import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
	paper: {
		margin: 16,
		padding: 16,
		display: 'inline-block',
		maxWidth: 584,
		width: '100%',
		verticalAlign: 'top',
	},
});


const SmallContentContainer = ({
	title,
	children,
}) => {
	const classes = useStyles();

	return (
		<Paper className={classes.paper}>
			{title && (
				<Typography variant="h6">
					{title}
				</Typography>
			)}
			{children}
		</Paper>
	);
};

export default SmallContentContainer;
