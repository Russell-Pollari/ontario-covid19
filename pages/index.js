import { useState, useEffect } from 'react';

import App from '../components/App';
import OntarioStatusTable from '../components/OntarioStatusTable';
import ChartContainer from '../components/ChartContainer';
import getOntarioStatuses from '../lib/getOntarioStatuses';
import charts from '../components/charts/chartConfig';


function HomePage() {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);

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
		<App>
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
		</App>
	);
};

export default HomePage
