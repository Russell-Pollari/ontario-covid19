import { useState, useEffect, Fragment } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';

import Layout from '../components/Layout';
import ChartContainer from '../components/ChartContainer';
import VaccinationStatus from '../components/VaccinationStatus';
import VaccineStatusTable from '../components/VaccineStatusTable';
import VaccineEffectTable from '../components/VaccineEffectTable';

import getVaccineData from '../data/getVaccineData';
import getVaccineAgeData from '../data/getVaccineAgeData';
import getVaccineEffectData from '../data/getVaccineEffectData';
import { vaccineCharts } from '../chartConfig';
import chartIDs from '../chartConfig/vaccinations/vaccineChartIDs';

const VaccinationsContainer = () => {
	const [data, setData] = useState([]);
	const [ageData, setAgeData] = useState([]);
	const [vaxEffectData, setVaxEffectData] = useState({});
	const [loading, setLoading] = useState(true);
	
	const fetchData = async () => {
		await getVaccineAgeData().then(setAgeData);
		await getVaccineData().then(setData);
		await getVaccineEffectData().then(setVaxEffectData);

		setLoading(false);
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

	// Returns the right set of data for the given chart ID
	const getData = (chartID) => {
		switch (chartID)
		{
			case chartIDs.vaccinatedByAge:
				return ageData;
			case chartIDs.casesByVax:
				return vaxEffectData.all;
			case chartIDs.hospitalByVax:
			case chartIDs.icuByVax: 
				return vaxEffectData.all.filter(item => item.hosp_unvax_per_mil != null);
			case chartIDs.totalDoses:
			case chartIDs.totalVaccinated:
			case chartIDs.dailyDoses:
				return data;
			default: 
				return null;
		}
	}

	// const vaxEffectFootnote = <Fragment>* This data is population adjusted. <br/>* Population denominators are calculated based on daily dose history.<br/>* <b>Fully vaccinated</b> = 14 days after 2nd dose<br/>* <b>Partially vaccinated</b> = 14 days after 1st dose and &lt;14 days after 2nd dose.</Fragment>;

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
						<VaccineStatusTable dataSource={data} />
						<VaccineEffectTable dataSource={vaxEffectData.avg} />
						{vaccineCharts.map((chart, index) => {
							return <ChartContainer
												key={index}
												dataSource={getData(chart.id)}
												{...chart}
											/>;
						})}
					</Fragment>
				)}
			</div>
		</Layout>
	);
};

export default VaccinationsContainer;
