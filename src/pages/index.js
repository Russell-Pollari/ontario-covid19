import { useState, useEffect, Fragment } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';

import Layout from '../components/Layout';
import Updates from '../components/Updates';
import OntarioStatusTable from '../components/OntarioStatusTable';
import ChartContainer from '../components/ChartContainer';
import AboutBlurb from '../components/AboutBlurb';

import getOntarioStatuses from '../data/getOntarioStatuses';
import getReData from '../data/getReData';
import { ontarioStatusCharts, re } from '../chartConfig';


function HomePage() {
	const [reData, setReData] = useState();
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);

	const fetchData = async () => {
		getReData().then(setReData);
		await getOntarioStatuses().then(setData);

		setLoading(false);
	};

	useEffect(() => {
		fetchData();
	}, []);

	const menuItems = [{
		title: 'Summary',
		href: '#',
	}, {
		title: re.title,
		href: `#${re.title}`,
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
					<ChartContainer {...re} dataSource={reData} />
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
