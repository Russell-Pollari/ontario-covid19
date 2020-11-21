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
			<p>
				Hi Folks, I had to shut down the older version of the dashboard.
				Metabase is a great dashboarding product, but hosting it was costing too much money.
				This version, which uses a React charting library, is much more lightweight.
				But it's a work in progress. I am planning on prettifying and adding plots and features
				in the next week or so. Stay stafe out there!
			</p>
			<p>
				- Russell (<a href="mailto:russell@sharpestminds.com">russell@sharpestminds.com</a>)
			</p>
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
