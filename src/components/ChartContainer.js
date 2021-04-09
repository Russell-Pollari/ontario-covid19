import {
	Area, ComposedChart, Bar, Line,
	XAxis, YAxis, CartesianGrid,
	Tooltip, ResponsiveContainer, Legend
} from 'recharts';

import ContentContainer from './ContentContainer';


const ChartContainer = ({
	areas = [],
	bars = [],
	lines = [],
	dataKeyX = 'date_string',
	dataSource = [],
	title,
	syncId,
	xAxisScale,
}) => {
	return (
		<ContentContainer title={title}>
			<span className="relative top--72" id={title} />
			<ResponsiveContainer width="95%" height={400} className="mt16">
				<ComposedChart data={dataSource} syncId={syncId} >
					{(bars.length + lines.length + areas.length) > 1 && (
						<Legend
							layout="horizontal"
							align="center"
							verticalAlign="top"
						/>
					)}
					<CartesianGrid vertical={false} />
					<XAxis dataKey={dataKeyX} scale={xAxisScale} />
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
		</ContentContainer>
	);
};

export default ChartContainer;
