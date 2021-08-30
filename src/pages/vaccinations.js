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

	const vaxEffectFootnote = <Fragment>* This data is population adjusted. <br/>* Population denominators are calculated based on daily dose history.<br/>* <b>Fully vaccinated</b> = 14 days after 2nd dose<br/>* <b>Partially vaccinated</b> = 14 days after 1st dose and &lt;14 days after 2nd dose.</Fragment>

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
							let dataSource, syncId, xAxisScale, valueSuffix, footnote, roundUpYAxisMax;
							if (chart.id == chartIDs.vaccinatedByAge) {
								dataSource = ageData;
								syncId = "vaccineAgeCharts"
								xAxisScale = "band"
								valueSuffix = "%"
							} else if ([chartIDs.casesByVax, chartIDs.hospitalByVax, chartIDs.icuByVax].includes(chart.id)) {
								dataSource = vaxEffectData.all
								if ([chartIDs.hospitalByVax, chartIDs.icuByVax].includes(chart.id)) {
									dataSource = dataSource.filter(item => item.hosp_unvax_per_mil != null);
								}
								xAxisScale = "band"
								roundUpYAxisMax = true
								footnote = vaxEffectFootnote
							} else {
								dataSource =data
								syncId = "vaccineCharts"
							}

							return <ChartContainer
													key={index}
													dataSource={dataSource}
													syncId={syncId}
													xAxisScale={xAxisScale}
													footnote={footnote}
													roundUpYAxisMax={roundUpYAxisMax}
													valueSuffix={valueSuffix}
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
