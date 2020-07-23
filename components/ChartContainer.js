import { useState, useEffect } from 'react';
import {
	ComposedChart, Bar, Line,
	XAxis, YAxis, CartesianGrid,
	Tooltip, ResponsiveContainer, Legend
} from 'recharts';


const ChartContainer = ({
	bars = [],
	lines = [],
	dataKeyX = "date_string",
	dataSource = [],
	title,
	children,
}) => {
	const [data, setData] = useState([])
	const [scale, setScale] = useState('linear');

	useEffect(() => {
		setData(dataSource);
	}, [dataSource]);


	useEffect(() => {
		if (scale === 'log') {
			const filteredData = data.filter(datum => {
				bars.forEach(bar => {
					if (datum[bar.dataKey] === 0) {
						return false;
					}
				});
				lines.forEach(line => {
					if (datum[line.dataKey] === 0) {
						return false;
					}
				})
				return true;
			});
			setData([...filteredData])
		} else {
			setData(dataSource)
		}
	}, [scale])

	const legendFormatter = (value) => {
		return value.replace(/_/g, ' ')
	}

	const tooltipFormatter = (value, name) => {
		return [value.toFixed(0), name.replace(/_/g, ' ')]
	};

	const toggleScale = () => {
		if (scale === 'linear') {
			setScale('log')
		} else {
			setScale('linear')
		}
	};

	return (
		<div className="tl dib chart-container w-100 maw768 miw-256">
			<div className="tl">
				<strong>
					{title}
				</strong>
				<span onClick={toggleScale} className="pointer fr">
					<span className={scale === 'linear' ? 'active-link' : ''}>
						Linear
					</span>
					{'<>'}
					<span className={scale === 'log' ? 'active-link' : ''}>
						Log
					</span>
				</span>
			</div>
			<ResponsiveContainer width="95%" minWidth={256} height={400}>

				<ComposedChart data={data}>
					<Legend verticalAlign="top" formatter={legendFormatter} />
					<CartesianGrid vertical={false} />
					<XAxis dataKey={dataKeyX} />
					<YAxis scale={scale} domain={['auto', 'auto']} />
					<Tooltip formatter={tooltipFormatter} />
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
