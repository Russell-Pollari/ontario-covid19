import { useState, useEffect, Fragment } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';

import Layout from '../components/Layout';
import ChartContainer from '../components/ChartContainer';
import VaccinationStatus from '../components/VaccinationStatus';

import getVaccineData from '../lib/getVaccineData';
import { vaccineCharts } from '../components/charts/chartConfig';


const VaccinationsContainer = () => {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);

	const fetchData = () => {
		getVaccineData()
			.then(setData)
			.then(() => setLoading(false));
	};

	useEffect(() => {
		fetchData();
	}, []);

	const menuItems = [{
		title: 'Summary',
		href: '#'
	},
	...vaccineCharts.map(({ title }) => ({
			title,
			href: `#${title}`,
		}))
	];

	return (
		<Layout menuItems={menuItems}>
			<div className="ph16">
				<Typography variant="h4">
					Covid-19 Vaccinations in Ontario
				</Typography>
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
						<VaccinationStatus data={data} />
						{vaccineCharts.map((chart, index) => (
							<ChartContainer
								key={index}
								dataSource={data}
								syncId="vaccineCharts"
								{...chart}
							/>
						))}
					</Fragment>
				)}
			</div>
		</Layout>
	);
};

export default VaccinationsContainer;
