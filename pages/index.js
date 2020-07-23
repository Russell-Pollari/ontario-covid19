import { useState, useEffect } from 'react';

import Layout from '../components/Layout';
import OntarioStatusTable from '../components/OntarioStatusTable';
import ChartContainer from '../components/ChartContainer';

const totalCasesBars = [{
	dataKey: 'active_not_hospitalized',
	fill: '#f9d45c',
	label: 'Sick (not hospitalized)',
	stackId: 'a',
}, {
	dataKey: 'num_hospitalized',
	fill: '#f3b381',
	label: 'Hospitalized',
	stackId: 'a',
}, {
	dataKey: 'total_deaths',
	fill: '#ef8c8c',
	label: 'Deceased',
	stackId: 'a',
}, {
	dataKey: 'total_resolved',
	fill: '#88bf4d',
	label: 'Resolved',
	stackId: 'a',
}];

const newCasesOptions = {

}

function HomePage() {
	const [data, setData] = useState([]);

	useEffect(() => {
		fetch('ontario_statuses.json')
			.then(response => response.json())
			.then(data => {
				const dataWithDateString = data.map((status) => {
					return {
						...status,
						date_string: new Date(status.reported_date).toLocaleString('en-us', {
							month: 'short',
							day: 'numeric'
						}),
					};
				});
				setData(dataWithDateString);
			});
	}, []);

	return (
		<Layout>
			<h2>
				Covid-19 in Ontario
			</h2>
			<OntarioStatusTable dataSource={data} />
			<div className="tc">
				<h3 className="tl">Cases</h3>
				<div className="w-100 dib">
					<ChartContainer
						title="Total cases in Ontario"
						dataKeyX="date_string"
						bars={totalCasesBars}
						dataSource={data}
					/>
					<ChartContainer
						title="New cases in Ontario"
						dataKeyX="date_string"
						dataSource={data}
						bars={[{
							dataKey: 'new_cases',
							fill: "#f9d45c",
						}]}
					/>
					<ChartContainer
						title="Total deaths in Ontario"
						dataKeyX="date_string"
						bars={[{
							dataKey: 'total_deaths',
							fill: '#ef8c8c',
						}]}
						dataSource={data}
					/>
					<ChartContainer
						title="New deaths in Ontario"
						dataKeyX="date_string"
						dataSource={data}
						bars={[{
							dataKey: 'new_deaths',
							fill: "#ef8c8c",
						}]}
					/>
					<ChartContainer
						title="Patients hospitalized"
						dataKeyX="date_string"
						bars={[{
							dataKey: 'num_hospitalized',
							fill: '#ef8c8c',
						}]}
						dataSource={data}
					/>
				</div>
			</div>
		</Layout>
	);
};

export default HomePage
