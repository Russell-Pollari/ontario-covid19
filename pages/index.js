import Link from 'next/link';
import { useState, useEffect, Fragment } from 'react';

import Layout from '../components/Layout';
import Updates from '../components/Updates';
import OntarioStatusTable from '../components/OntarioStatusTable';
import ChartContainer from '../components/ChartContainer';
import getOntarioStatuses from '../lib/getOntarioStatuses';
import getVaccineData from '../lib/getVaccineData';
import getPHUData from '../lib/getPHUData';
import {
	ontarioStatusCharts,
	vaccineCharts,
} from '../components/charts/chartConfig';


function HomePage() {
	const [data, setData] = useState([]);
	const [vaccineData, setVaccineData] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		getVaccineData().then(setVaccineData);
		getOntarioStatuses((data) => {
			setData(data);
			setLoading(false);
		});
		getPHUData();
	}, []);

	return (
		<Layout>
			<h2>
				Simple dashboard visualizing Ontario's Covid-19 data.
			</h2>
			<p>
				<Link href="/phus">View data for each PHU</Link>
			</p>
			<Updates />
			<p>
				Want to contribute to this dashboard? Fork it on <a href="https://github.com/Russell-Pollari/ontario-covid19">GitHub</a>.
			</p>
			<p>
				<Link href="/about">About this dashboard</Link>
			</p>
			{loading ? (
				<p className="tc">
					<strong>
						Hold tight.. just fetching the latest data
					</strong>
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
