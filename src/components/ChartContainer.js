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
	valueSuffix = '',
	roundUpYAxisMax = false,
	footnote = ''
}) => {

	let domain = [0, 'auto']
	if (roundUpYAxisMax) {
		domain = [0, dataMax => Math.ceil(dataMax / 2) * 2]
	}

	return (
		<ContentContainer title={title} footnote={footnote}>
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
						domain={domain}
						tickFormatter={tick => tick.toLocaleString() + valueSuffix}
					/>
					<Tooltip formatter={(value) => value.toLocaleString() + valueSuffix} labelFormatter={(value) => (xLabel ? `${xLabel}: ` : '') + value}/>
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
