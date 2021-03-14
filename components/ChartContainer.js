import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

import {
	Area, ComposedChart, Bar, Line,
	XAxis, YAxis, CartesianGrid,
	Tooltip, ResponsiveContainer, Legend
} from 'recharts';

const useStyles = makeStyles({
	paper: {
		margin: 16,
		padding: 16,
	},
});

const ChartContainer = ({
	areas = [],
	bars = [],
	lines = [],
	dataKeyX = 'date_string',
	dataSource = [],
	title,
	syncId,
}) => {
	const classes = useStyles();
	return (
		<Paper className={classes.paper}>
			<span className="relative top--64" id={title} />
			<div className="tl pv8">
				<strong>
					{title}
				</strong>
			</div>
			<ResponsiveContainer width="95%" height={400} className="mt16">
				<ComposedChart data={dataSource} syncId={syncId} >
					{(bars.length + lines.length) > 1 && (
						<Legend
							layout="horizontal"
							align="center"
							verticalAlign="top"
						/>
					)}
					<CartesianGrid vertical={false} />
					<XAxis dataKey={dataKeyX} />
					<YAxis
						type="number"
						domain={[0, 'auto']}
						tickFormatter={tick => tick.toLocaleString()}
					/>
					<Tooltip formatter={(value) => value.toLocaleString()} />
					{bars.map(bar => (
						<Bar key={bar.dataKey} {...bar} />
					))}
					{lines.map((line) => (
						<Line key={line.dataKey} {...line} />
					))}
					{areas.map((area) => (
						<Area key={area.dataKey} {...area} />
					))}
				</ComposedChart>
			</ResponsiveContainer>
		</Paper>
	);
};

export default ChartContainer;
