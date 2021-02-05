import { useState, useEffect } from 'react';
import {
	Area, ComposedChart, Bar, Line,
	XAxis, YAxis, CartesianGrid,
	Tooltip, ResponsiveContainer, Legend
} from 'recharts';

import ScaleToggle from './ScaleToggle';

const ChartContainer = ({
	areas = [],
	bars = [],
	lines = [],
	dataKeyX = "date_string",
	dataSource = [],
	title,
	syncId,
	xAxisScale,
}) => {
	return (
		<div className="tl dib chart-container w-100">
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
					<XAxis dataKey={dataKeyX} scale={xAxisScale} />
					<YAxis type="number" domain={[0, 'auto']} />
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
		</div>
	);
};

export default ChartContainer;
