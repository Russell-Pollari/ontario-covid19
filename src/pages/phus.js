import { useState, useEffect, Fragment } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

import getPHUData from '../data/getPHUData';
import { phuNames } from '../constants';
import ChartContainer from '../components/ChartContainer';
import PHUStatusTable from '../components/PHUStatusTable';
import LayoutSimple from '../components/LayoutSimple';

import { phuStatusCharts } from '../chartConfig';


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
						{phuStatusCharts.map((chart, index) => (
							<ChartContainer
								key={index}
								dataSource={data}
								syncId="phu" // This shows tooltips for all the OntarioStatuses charts
								{...chart}
							/>
						))}
					</Fragment>
				)
			)}
		</LayoutSimple>
	);
};

export default PHUContainer;
