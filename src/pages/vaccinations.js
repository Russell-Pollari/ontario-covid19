import { useState, useEffect, Fragment } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';

import Layout from '../components/Layout';
import ChartContainer from '../components/ChartContainer';
import VaccinationStatus from '../components/VaccinationStatus';
import VaccineStatusTable from '../components/VaccineStatusTable';

import getVaccineData from '../data/getVaccineData';
import getVaccineAgeData from '../data/getVaccineAgeData';
import getCasesByVaccineStatus from '../data/getCasesByVaccineStatus';
import getHospitalizationsByVaccineStatus from '../data/getHospitalizationsByVaccineStatus';
import { vaccineCharts } from '../chartConfig';
import chartIDs from '../chartConfig/vaccinations/vaccineChartIDs';

const VaccinationsContainer = () => {
	const [data, setData] = useState([]);
	const [ageData, setAgeData] = useState([]);
	const [casesByVaccine, setCasesByVaccineStatus] = useState([]);
	const [hospitalizationsByVaccine, setHospitlizayionsByVaccine] = useState([]);
	const [loading, setLoading] = useState(true);

	const fetchData = async () => {
		await getVaccineAgeData().then(setAgeData);
		await getVaccineData().then(setData);
		await getCasesByVaccineStatus().then(setCasesByVaccineStatus);
		await getHospitalizationsByVaccineStatus().then(setHospitlizayionsByVaccine);
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
		switch (chartID) {
			case chartIDs.vaccinatedByAge:
				return ageData;
			case chartIDs.totalDoses:
			case chartIDs.totalVaccinated:
			case chartIDs.dailyDoses:
				return data;
			case chartIDs.casesByVax:
				return casesByVaccine;
			case chartIDs.hospitalByVax:
			case chartIDs.icuByVax:
				return hospitalizationsByVaccine;
			default:
				return [];
		}
	};

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
						{vaccineCharts.map((chart, index) => (
							<ChartContainer
								key={index}
								dataSource={getData(chart.id)}
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
