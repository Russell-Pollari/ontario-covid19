import { useState, useEffect, Fragment } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

import getPHUData from '../data/getPHUData';
import { phuNames } from '../constants';
import ChartContainer from '../components/ChartContainer';
import PHUStatusTable from '../components/PHUStatusTable';
import LayoutSimple from '../components/LayoutSimple';


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
		if (name) {
			fetchData(name);
		} else {
			setData([]);
		}
	}, [name]);

	const handlePHUChange = (event, newValue) => {
		setName(newValue);
	};

	return (
		<LayoutSimple title="Public health units">
			<Autocomplete
				options={phuNames}
				value={name}
				getOptionLabel={(option) => option}
				onChange={handlePHUChange}
				renderInput={(params) => (
					<TextField
						{...params}
						label="Public Health Unit"
						variant="outlined"
					/>
				)}
			/>
			{loading ? (
				<CircularProgress />
			) : (
				!name ? (
					<div className="tc mv32">
						<em>Select a PHU to view its data</em>
					</div>
				) : (
					<Fragment>
						<PHUStatusTable dataSource={data} phuName={name} />
						<ChartContainer
							dataSource={data}
							title={'Active cases in ' + name}
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
							title={'New cases in ' + name}
							dataKeyX="date_string"
							syncId="phu"
							bars={[{
								dataKey: 'new_cases',
								fill: '#f9d45c',
								name: 'New cases',
								stackId: 'a',
							}]}
							lines={[{
								dataKey: 'new_cases_rolling_average',
								name: '7 day rolling average',
								stroke: 'black',
								strokeWidth: 2,
								dot: false,
							}]}
							/>
						<ChartContainer
							dataSource={data}
							title={'Total cases in ' + name}
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
							title={'Total deaths in ' + name}
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
				)
			)}
		</LayoutSimple>
	);
};

export default PHUContainer;
