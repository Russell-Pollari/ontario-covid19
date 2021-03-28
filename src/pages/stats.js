import { useState, useEffect } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';


import getCases from '../data/getCaseData';
import ChartContainer from '../components/ChartContainer';
import LayoutSimple from '../components/LayoutSimple';
import { ageStats } from '../chartConfig';


const StatsContainer = () => {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);

	const fetchData = async () => {
		await getCases().then(setData);
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
				<ChartContainer
					dataSource={data}
					xAxisScale="band"
					{...ageStats}
				/>
			)}
		</LayoutSimple>
	);
};

export default StatsContainer;
