import {
	Area, ComposedChart, Bar, Line,
	XAxis, YAxis, CartesianGrid,
	Tooltip, ResponsiveContainer, Legend, ErrorBar, Label,
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
	xLabel,
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
					<XAxis dataKey={dataKeyX} scale={xAxisScale}>
						{xLabel && (
							<Label value={xLabel} position="insideBottom" />
						)}
					</XAxis>
					<YAxis
						type="number"
						domain={[0, 'auto']}
						tickFormatter={tick => tick.toLocaleString()}
					/>
					<Tooltip formatter={(value) => value.toLocaleString()} labelFormatter={(value) => (xLabel ? `${xLabel}: ` : '') + value}/>
					{bars.map(bar => (
						<Bar key={bar.dataKey} stackId='a' {...bar} />
					))}
					{lines.map((line) => (
						<Line key={line.dataKey} {...line}>
							{line.errorBarKey && (
								<ErrorBar dataKey="error_bars" direction="y" width={2} />
							)}
						</Line>
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
