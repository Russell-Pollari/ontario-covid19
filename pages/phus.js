import { useState, useEffect, Fragment } from 'react';

import getPHUData from '../lib/getPHUData';
import phuNames from '../lib/phuNames';
import ChartContainer from '../components/ChartContainer';


const PHUContainer = () => {
	const [name, setName] = useState('TORONTO');
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);

	const fetchData = async (name) => {
		setLoading(true);
		await getPHUData(name).then(setData);
		setLoading(false);
	};

	useEffect(() => {
		fetchData(name);
	}, [name]);

	const handlePHUChange = event => {
		setName(event.target.value);
	};

	return (
		<div className="pa16">
			<div>
				<a href="/ontario-covid19">{'<-'} Back</a>
			</div>
			<label htmlFor="phuSelect">
				Filter by Public Health Unit:
			</label>
			<select id="phuSelect" onChange={handlePHUChange} value={name}>
				{phuNames.map(phu => (
					<option key={phu} value={phu}>
						{phu}
					</option>
				))}
			</select>
			<h4>
				{name}
			</h4>
			{loading ? (
				<p>loading</p>
			) : (
				<Fragment>
					<ChartContainer
						dataSource={data}
						title={'Active cases - ' + name}
						dataKeyX="date_string"
						syncId="phu"
						bars={[{
							dataKey: 'ACTIVE_CASES',
							fill: '#f9d45c',
							name: 'Active cases',
							stackId: 'a',
						}]}
					/>
					<ChartContainer
						dataSource={data}
						title={'Total cases - ' + name}
						dataKeyX="date_string"
						syncId="phu"
						areas={[{
							dataKey: 'total_cases',
							fill: '#f9d45c',
							name: 'Total cases',
							stackId: 'a',
						}]}
					/>
					<ChartContainer
						dataSource={data}
						title={'Deaths - ' + name}
						dataKeyX="date_string"
						syncId="phu"
						areas={[{
							dataKey: 'DEATHS',
							fill: '#ef8c8c',
							name: 'Deaths',
							stackId: 'a',
						}]}
					/>
				</Fragment>
			)}
		</div>
	);
};

export default PHUContainer;
