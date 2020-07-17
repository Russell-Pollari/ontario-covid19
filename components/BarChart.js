import { useState, useEffect } from 'react';
import {
	ComposedChart, Bar, Line,
	XAxis, YAxis, CartesianGrid,
	Tooltip, ResponsiveContainer, Legend
} from 'recharts';


const BarPlot = ({
	dataKey = 'new_cases',
	includeAverage = false,
	dataSource = [],
}) => {
	const [data, setData] = useState([])
	const [scale, setScale] = useState('linear');

	useEffect(() => {
		const _data = dataSource.map((status, index, array) => {
			let weekly_rolling_average = null;

			if (includeAverage) {
				const lastWeek = array.slice(index - 7, index);
				weekly_rolling_average = lastWeek.reduce((acc, b) => (acc + b[dataKey]), 0) / lastWeek.length;
			}

			return {
				...status,
				weekly_rolling_average,
			};
		});

		setData(
			_data.filter(status => (
				status[dataKey] > 0 && status['weekly_rolling_average'] !== 0
			))
		);
	}, [includeAverage, dataSource]);

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
		<div className="dib w-50 miw-256">
			<div>
				<span onClick={toggleScale} className="pointer">
					<span className={scale === 'linear' ? 'active-link' : ''}>
						Linear
					</span>
					{'<>'}
					<span className={scale === 'log' ? 'active-link' : ''}>
						log
					</span>
				</span>
			</div>
			<ResponsiveContainer width="80%" minWidth={256} height={300}>
				<ComposedChart data={data}>
					<Legend verticalAlign="top" formatter={legendFormatter} />
					<CartesianGrid vertical={false} />
					<XAxis dataKey="date_string" />
					<YAxis scale={scale} domain={['auto', 'auto']} />
					<Bar dataKey={dataKey} fill="#ef8c8c" />
					{includeAverage && (
						<Line dataKey="weekly_rolling_average" dot={false} stroke="#8884d8" strokeWidth={3} />
					)}
					<Tooltip formatter={tooltipFormatter} />
				</ComposedChart>
			</ResponsiveContainer>
		</div>
	);
};

export default BarPlot;
