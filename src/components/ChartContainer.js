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
	leftValueSuffix = '',
	rightValueSuffix = '',
	roundUpYAxisMax = false,
	footnote = '',
	yAxisTicks,
	leftYAxisLabel,
	rightYAxisLabel
}) => {

	let domain = [0, 'auto'];
	if (roundUpYAxisMax) {
		domain = [0, dataMax => Math.ceil(dataMax / 2) * 2];
	}

	const getSuffix = (name) => {
		const foundElement = areas.find(a => a.name == name) || bars.find(a => a.name == name) || lines.find(a => a.name == name);
		if (foundElement?.yAxisId == 'right') {
			return rightValueSuffix;
		}
		return leftValueSuffix;
	};

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
						yAxisId='left'
						type="number"
						domain={domain}
						ticks={yAxisTicks}
						tickFormatter={tick => tick.toLocaleString() + leftValueSuffix}
						label={leftYAxisLabel ? { value: leftYAxisLabel, angle: -90, position: 'insideLeft', style: { textAnchor: 'middle' } } : null}
					/>
					{rightYAxisLabel && 
					<YAxis 
						yAxisId="right" 
						orientation="right" 
						tickFormatter={tick => tick.toLocaleString() + rightValueSuffix}
						label={{ value: rightYAxisLabel, angle: -90, position: 'insideRight' , style: { textAnchor: 'middle' }}}
						/>
					}
					<Tooltip formatter={ (value, name) => value.toLocaleString() + getSuffix(name)} labelFormatter={(value) => (xLabel ? `${xLabel}: ` : '') + value}/>
					{bars.map(bar => (
						<Bar key={bar.dataKey} stackId='a' yAxisId='left' {...bar} />
					))}
					{lines.map((line) => (
						<Line key={line.dataKey} yAxisId='left' {...line}>
							{line.errorBarKey && (
								<ErrorBar dataKey="error_bars" direction="y" width={2} />
							)}
						</Line>
					))}
					{areas.map((area) => (
						<Area key={area.dataKey} yAxisId='left' {...area} />
					))}
				</ComposedChart>
			</ResponsiveContainer>
		</ContentContainer>
	);
};

export default ChartContainer;
