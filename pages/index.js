import { useState, useEffect } from 'react';

import Layout from '../components/Layout';
import OntarioStatusTable from '../components/OntarioStatusTable';
import ChartContainer from '../components/ChartContainer';

import newCases from '../components/charts/ontario/newCases';
import totalCases from '../components/charts/ontario/totalCases';
import newDeaths from '../components/charts/ontario/hospitalized';
import totalDeaths from '../components/charts/ontario/totalDeaths';
import hospitalized from '../components/charts/ontario/hospitalized';
import icu from '../components/charts/ontario/icu';


const charts = [
	newCases,
	totalCases,
	newDeaths,
	totalDeaths,
	hospitalized,
	icu,
];

function HomePage() {
	const [data, setData] = useState([]);

	useEffect(() => {
		fetch('ontario_statuses.json')
			.then(response => response.json())
			.then(data => {
				const dataWithDateString = data.map((status) => {
					return {
						...status,
						date_string: new Date(status.reported_date).toLocaleString('en-us', {
							month: 'short',
							day: 'numeric'
						}),
					};
				});
				setData(dataWithDateString);
			});
	}, []);

	return (
		<Layout charts={charts}>
			<OntarioStatusTable dataSource={data} />
			{charts.map((chart, index) => (
				<ChartContainer
					key={index}
					dataSource={data}
					{...chart}
				/>
			))}
		</Layout>
	);
};

export default HomePage
