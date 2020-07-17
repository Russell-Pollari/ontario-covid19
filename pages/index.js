import { useState, useEffect } from 'react';

import Layout from '../components/Layout';

import BarChart from '../components/BarChart';

function HomePage() {
	const [data, setData] = useState([]);

	useEffect(() => {
		const request = new XMLHttpRequest();
		request.open('GET', 'ontario_statuses.json', true);
		request.onload = () => {
			const data = JSON.parse(request.responseText).map((status) => {
				return {
					...status,
					date_string: new Date(status.reported_date).toLocaleString('en-us', {
						month: 'short',
						day: 'numeric'
					}),
				};
			});
			setData(data);
		};
		request.send();
	}, []);

	return (
		<Layout>
			<h2>
				Covid-19 in Ontario
			</h2>
			<h3>Cases</h3>
			<BarChart dataKey="total_cases" dataSource={data} />
			<BarChart dataKey="new_cases" dataSource={data} includeAverage />

			<h3>Deaths</h3>
			<BarChart dataKey="total_deaths" dataSource={data} />
			<BarChart dataKey="new_deaths" dataSource={data} includeAverage />
		</Layout>
	);
};

export default HomePage
