import { useState, useEffect } from 'react';

import App from '../components/App';
import OntarioStatusTable from '../components/OntarioStatusTable';
import ChartContainer from '../components/ChartContainer';
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

	useEffect(() => {
		getVaccineData().then(setVaccineData);
		getOntarioStatuses((data) => {
			setData(data);
			setLoading(false);
		});
	}, []);

	if (loading) {
		return (
			<div classes="tc">
				<h2>
					Simple dashboard visualizing Ontario's Covid-19 data.
				</h2>
			</div>
		);
	}

	return (
		<App>
			<h2>
				Simple dashboard visualizing Ontario's Covid-19 data.
			</h2>
			<ul>
				<li>
					<strong>Update (2021/02/07):</strong> Some minor prettifications. Thanks <a href="https://github.com/TikiTDO" target="_blank">TikiTDO</a> for the pull requests!
				</li>
				<li>
					<strong>Update (2021/01/07):</strong> Added a plot to track vaccinations.
				</li>
			</ul>
			<p>
				Want to contribute to this dashboard? Fork it on <a href="https://github.com/Russell-Pollari/ontario-covid19">GitHub</a>.
			</p>
			<p>
				<a href="/ontario-covid19/about">About this dashboard</a>
			</p>
			<OntarioStatusTable dataSource={data} />
			{vaccineCharts.map((chart, index) => (
				<ChartContainer
					key={index}
					dataSource={vaccineData}
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
		</App>
	);
};

export default HomePage
