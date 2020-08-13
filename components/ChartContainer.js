import { useState, useEffect } from 'react';
import {
	ComposedChart, Bar, Line,
	XAxis, YAxis, CartesianGrid,
	Tooltip, ResponsiveContainer, Legend
} from 'recharts';

import ScaleToggle from './ScaleToggle';


const ChartContainer = ({
	barConfig = [],
	lines = [],
	dataKeyX = "date_string",
	dataSource = [],
	title,
	children,
	transform = null,
}) => {
	const [data, setData] = useState([]);
	const [bars, setBars] = useState([]);
	const [scale, setScale] = useState('linear');

	useEffect(() => {
		let _data = dataSource;
		if (transform) {
			_data = transform(_data);
		}
		setData(_data);
	}, [dataSource]);

	useEffect(() => {
		if (scale === 'log') {
			// TODO: cannot stack in log plot
			const _bars = barConfig.map(bar => { delete bar.stackId; return bar; });
			setBars([..._bars])
		} else {
			setBars([...barConfig]);
		}
	}, [scale, barConfig])

	useEffect(() => {
		if (scale === 'log') {
			const filteredData = data.map(datum => {
				Object.keys(datum).forEach(key => {
					if (datum[key] <= 0) {
						datum[key] = null;
					};
				});
				return datum;
			});
			setData([...filteredData]);
		} else {
			setData(dataSource);
		}
	}, [scale]);


	const toggleScale = () => {
		if (scale === 'linear') {
			setScale('log');
		} else {
			setScale('linear');
		}
	};

	return (
		<div className="tl dib chart-container w-100" id={title}>
			<div className="tl pv8">
				<strong>
					{title}
				</strong>
				<ScaleToggle toggleScale={toggleScale} scale={scale} />
			</div>
			<ResponsiveContainer width="95%" height={400} className="mt16">
				<ComposedChart data={data}>
					{(bars.length + lines.length) > 1 && (
						<Legend
							layout="horizontal"
							align="center"
							verticalAlign="bottom"
						/>
					)}
					<CartesianGrid vertical={false} />
					<XAxis dataKey={dataKeyX} />
					<YAxis
						type="number"
						scale={scale}
						domain={[scale === 'log' ? 1 : 0, 'auto']}
					/>
					<Tooltip />
					{bars.map(bar => (
						<Bar key={bar.dataKey} {...bar} />
					))}
					{lines.map((line) => (
						<Line key={line.dataKey} {...line} />
					))}
					{children}
				</ComposedChart>
			</ResponsiveContainer>
		</div>
	);
};

export default ChartContainer;
