import { useState, useEffect } from 'react';

import Layout from '../components/Layout';
import OntarioStatusTable from '../components/OntarioStatusTable';
import ChartContainer from '../components/ChartContainer';

import newCases from '../components/charts/ontario/newCases';
import activeCases from '../components/charts/ontario/activeCases';
import totalCases from '../components/charts/ontario/totalCases';
import newDeaths from '../components/charts/ontario/newDeaths';
import totalDeaths from '../components/charts/ontario/totalDeaths';
import hospitalized from '../components/charts/ontario/hospitalized';
import icu from '../components/charts/ontario/icu';
import tests from '../components/charts/ontario/tests';

import getOntarioStatuses from '../lib/getOntarioStatuses';


function HomePage() {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);

	const charts = [
		activeCases,
		totalCases,
		newCases,
		totalDeaths,
		newDeaths,
		tests,
		hospitalized,
		icu,
	];

	useEffect(() => {
		getOntarioStatuses((data) => {
			setData(data);
			setLoading(false);
		});
	}, []);

	if (loading) {
		return 'Loading...'
	}

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
