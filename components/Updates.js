import { useState, useEffect } from 'react';
import Link from 'next/link';
import { makeStyles } from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
	paper: {
		margin: 16,
		padding: 16,
	}
});

const updates = [{
	date: '2021-03/27',
	update: (
		<span>
			Added <Link href="/stats">a page</Link> to show case statistics.
		</span>
	),
}, {
	date: '2021/03/14',
	update: 'Added plot showing total people fully vaccinated.',
}, {
	date: '2021/03/14',
	update: 'Making thins a little prettier.'
}, {
	date: '2021/03/10',
	update: (
		<span>
			Added <Link href="/phus">a page</Link> to filter stats by public health unit (PHU).
		</span>
	),
}, {
	date: '2021/03/07',
	update: (
		<span>
			Added some features to the Summary table and added a 7 day moving average for
			daily vaccines. Thanks
			{' '}
			<a href="https://github.com/IsaacBerman" target="_blank" rel="noopener noreferrer">
				IsaacBerman
			</a>
			{' '}
			for the pull requests!
		</span>
	),
}, {
	date: '2021/02/20',
	update: 'Added a plot showing daily vaccinations.'
}, {
	date: '2021/02/07',
	update: (
		<span>
			Some minor prettifications. Thanks
			{' '}
			<a href="https://github.com/TikiTDO" target="_blank" rel="noopener noreferrer">
				TikiTDO
			</a>
			{' '}
			for the pull requests!
		</span>
	),
}];


const Updates = () => {
	const [visibleUpdates, setVisibleUpdates] = useState([]);
	const [showAll, setShowAll] = useState(false);
	const classes = useStyles();

	useEffect(() => {
		setVisibleUpdates(showAll ? updates : updates.slice(0, 2));
	}, [showAll]);

	const toggleShowAll = () => setShowAll(!showAll);

	return (
		<Paper className={classes.paper}>
			<Typography variant="h6">
				Recent updates
			</Typography>
			<ul>
				{visibleUpdates.map(({ date, update }, index) => (
					<li key={index}>
						<strong>{date}</strong> {update}
					</li>
				))}
			</ul>
			<div className="blue hover-dark-blue pointer" onClick={toggleShowAll}>
				{showAll ? 'Show less' : 'Show all'}
			</div>
		</Paper>
	);
};

export default Updates;
