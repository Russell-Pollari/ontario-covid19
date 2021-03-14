import { makeStyles } from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
	paper: {
		margin: 16,
		padding: 16,
	}
});

const Updates = () => {
	const classes = useStyles();
	return (
		<Paper className={classes.paper}>
			<Typography variant="h6">
				Recent updates
			</Typography>
			<ul>
				<li>
					<strong>(2021/03/14)</strong> Added plot showing total people fully vaccinated.
				</li>
				<li>
					<strong>(2021/03/14)</strong> Making things a little prettier.
				</li>
				<li>
					<strong>(2021/03/10)</strong> Added <a href="/ontario-covid19/phus">a page</a> to filter stats by public health unit (work in progress)
				</li>
				<li>
					<strong>(2021/03/07)</strong> Added some features to the Summary table and added a 7 day moving average for daily vaccines. Thanks <a href="https://github.com/IsaacBerman" target="_blank" rel="noopener noreferrer">IsaacBerman</a> for the pull requests!
				</li>
				<li>
					<strong>(2021/02/20)</strong> Added a plot showing daily vaccinations.
				</li>
				<li>
					<strong>(2021/02/07)</strong> Some minor prettifications. Thanks <a href="https://github.com/TikiTDO" target="_blank" rel="noopener noreferrer">TikiTDO</a> for the pull requests!
				</li>
			</ul>
		</Paper>
	);
};

export default Updates;
