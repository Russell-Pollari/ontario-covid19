import { useState, useEffect, Fragment } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';

import Layout from '../components/Layout';
import Updates from '../components/Updates';
import OntarioStatusTable from '../components/OntarioStatusTable';
import ChartContainer from '../components/ChartContainer';
import AboutBlurb from '../components/AboutBlurb';

import getOntarioStatuses from '../data/getOntarioStatuses';
import { ontarioStatusCharts } from '../chartConfig';


function HomePage() {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);

	const fetchData = async () => {
		await getOntarioStatuses().then(setData);
		setLoading(false);
	};

	useEffect(() => {
		fetchData();
	}, []);

	const menuItems = [{
		title: 'Summary',
		href: '#',
	},
	...ontarioStatusCharts.map(chart => ({
		title: chart.title,
		href: `#${chart.title}`
	}))];

	return (
		<Layout menuItems={menuItems}>
			<Typography variant="h4">
				Covid-19 in Ontario
			</Typography>
			<AboutBlurb />
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
