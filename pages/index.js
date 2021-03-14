import { useState, useEffect, Fragment } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';

import Layout from '../components/Layout';
import Updates from '../components/Updates';
import OntarioStatusTable from '../components/OntarioStatusTable';
import ChartContainer from '../components/ChartContainer';
import VaccinationStatus from '../components/VaccinationStatus';

import getOntarioStatuses from '../lib/getOntarioStatuses';
import getVaccineData from '../lib/getVaccineData';
import {
	ontarioStatusCharts,
	vaccineCharts,
} from '../components/charts/chartConfig';


function HomePage() {
	const [data, setData] = useState([]);
	const [vaccineData, setVaccineData] = useState([]);
	const [loading, setLoading] = useState(true);

	const fetchData = async () => {
		await getVaccineData().then(setVaccineData);
		await getOntarioStatuses().then(setData);
		setLoading(false);
	};

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<Layout>
			<Typography variant="h4">
				Simple dashboard visualizing Ontario's Covid-19 data.
			</Typography>
			<VaccinationStatus data={vaccineData} />
			<p>
				I've meen maintaining this dashboard for over a year now!. If you've gotten value from it, consider{' '}
				<a href="https://www.buymeacoffee.com/russellpollari">buying me a coffee</a>.
			</p>
			<p>
				Want to contribute and make it better? Fork this dashboard on <a href="https://github.com/Russell-Pollari/ontario-covid19">GitHub</a>.
			</p>
			<Updates />
			{loading ? (
				<p className="tc">
					<strong>
						Hold tight.. just fetching the latest data
					</strong>
					<div>
						<CircularProgress />
					</div>
				</p>
			) : (
				<Fragment>
					<OntarioStatusTable dataSource={data} />
					{vaccineCharts.map((chart, index) => (
						<ChartContainer
							key={index}
							dataSource={vaccineData}
							syncId="vaccineCharts"
							{...chart}
						/>
					))}
					{ontarioStatusCharts.map((chart, index) => (
						<ChartContainer
							key={index}
							dataSource={data}
							syncId="syncCharts" // This shows tooltips for all the OntarioStatuses charts
							{...chart}
						/>
					))}
				</Fragment>
			)}
		</Layout>
	);
}

export default HomePage;
