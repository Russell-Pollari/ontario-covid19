import { useState, useEffect } from 'react';

import App from '../components/App';
import OntarioStatusTable from '../components/OntarioStatusTable';
import ChartContainer from '../components/ChartContainer';
import getOntarioStatuses from '../lib/getOntarioStatuses';
import getVaccineData from '../lib/getVaccineData';
import charts from '../components/charts/chartConfig';


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
			<p>
				<strong>Update (2021/01/07):</strong> Added a plot to track vaccinations.
			</p>
			<p>
				Want to contribute to this dashboard? Fork it on <a href="https://github.com/Russell-Pollari/ontario-covid19">GitHub</a>.
			</p>
			<p>
				<a href="/ontario-covid19/about">About this dashboard</a>
			</p>
			<OntarioStatusTable dataSource={data} />
			<ChartContainer
				dataSource={vaccineData}
				dataKeyX="date_string"
				title="Vaccinations"
				bars={[{
					dataKey: 'total_doses_administered',
					name: 'Total doses administered',
					fill: '#509ee3',
				}]}
				/>
			{charts.map((chart, index) => (
				<ChartContainer
					key={index}
					dataSource={data}
					{...chart}
				/>
			))}
		</App>
	);
};

export default HomePage
