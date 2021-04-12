import { useState, useEffect } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';


import getCases from '../data/getCaseData';
import ChartContainer from '../components/ChartContainer';
import LayoutSimple from '../components/LayoutSimple';
import { ageStats, monthlyAgeBreakdowns } from '../chartConfig';
import { ContactSupportOutlined } from '@material-ui/icons';


const StatsContainer = () => {
	const [totalByAge, setTotalByAgeData] = useState([]);
	const [monthlyByAge, setMonthlyByAgeData] = useState([]);
	const [loading, setLoading] = useState(true);

	const fetchData = async () => {
		await getCases().then((caseData) => {
			setTotalByAgeData(caseData.totalByAge);
			setMonthlyByAgeData(caseData.monthyByAge);
		})

		setLoading(false);
	};

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<LayoutSimple title="Case statistics">
			<Typography variant="h6">
				Some statistics on Covid-19 cases in Ontario
			</Typography>
			{loading ? (
				<div className="tc">
					<CircularProgress />
					<p>
						Hang tight. Just fetching and compiling the data
					</p>
				</div>
			) : (
				<>
					<ChartContainer
						dataSource={totalByAge}
						xAxisScale="band"
						{...ageStats}
					/>
					{monthlyAgeBreakdowns.map((chart, index) =>
						<ChartContainer
						key={index}
						dataSource={monthlyByAge}
						{...chart}
					/>
					)}
				</>
			)}


		</LayoutSimple>
	);
};

export default StatsContainer;
