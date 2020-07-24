import { useState, useEffect } from 'react';

import Layout from '../components/Layout';
import OntarioStatusTable from '../components/OntarioStatusTable';
import ChartContainer from '../components/ChartContainer';

const charts = [{
	title: 'Total cases in Ontario',
	dataKeyX: 'date_string',
	bars: [{
		dataKey: 'active_not_hospitalized',
		fill: '#f9d45c',
		name: 'Sick (not hospitalized)',
		stackId: 'a',
	}, {
		dataKey: 'num_hospitalized',
		fill: '#f3b381',
		name: 'Hospitalized',
		stackId: 'a',
	}, {
		dataKey: 'total_deaths',
		fill: '#ef8c8c',
		name: 'Deceased',
		stackId: 'a',
	}, {
		dataKey: 'total_resolved',
		fill: '#88bf4d',
		name: 'Resolved',
		stackId: 'a',
	}],
}, {
	title: 'New cases in Ontario',
	dataKeyX: 'date_string',
	bars: [{
		dataKey: 'new_cases',
		name: 'New cases',
		fill: "#f9d45c",
	}],
}, {
	title: 'Total deaths in Ontario',
	dataKeyX: 'date_string',
	bars: [{
		dataKey: 'total_deaths',
		name: 'Total deaths',
		fill: '#ef8c8c',
	}],
}, {
	title: 'New deaths in Ontario',
	dataKeyX: 'date_string',
	bars: [{
		dataKey: 'new_deaths',
		name: 'New deaths',
		fill: "#ef8c8c",
	}]
}, {
	title: 'Patients hospitalized',
	dataKeyX: 'date_string',
	bars: [{
		dataKey: 'num_hospitalized',
		name: 'Patients hospitalized',
		fill: '#ef8c8c',
	}],
}, {
	title: 'Patients in ICU',
	dataKeyX: 'date_string',
	transform: (data) => (
		data.map(datum => {
			datum['icu_no_ventilator'] = datum['num_icu'] - datum['num_ventilator'];
			return datum;
		})
	),
	bars: [{
		dataKey: 'num_ventilator',
		fill: '#509ee3',
		name: 'ICU (with ventilator)'
	}, {
		dataKey: 'icu_no_ventilator',
		fill: '#7172ad',
		name: 'ICU (no ventilator)',
	}],
}, {
	title: 'Total tests in Ontario',
	dataKeyX: 'date_string',
	bars: [{
		dataKey: 'total_tested',
		name: 'Total tests',
		fill: '#509ee3',
	}]
}, {
	title: 'New tests in Ontario',
	dataKeyX: 'date_string',
	bars: [{
		dataKey: 'new_tests',
		name: 'New tests',
		fill: '#509ee3',
	}],
	lines: [{
		dataKey: 'total_pending_tests',
		name: 'Pending tests',
		dot: false,
		stroke: 'black',
	}]
}];


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
		<Layout charts={charts}>
			<OntarioStatusTable dataSource={data} />
			<div className="tc">
				<div className="w-100 dib">
					{charts.map((chart, index) => (
						<ChartContainer
							key={index}
							dataSource={data}
							{...chart}
						/>
					))}
				</div>
			</div>
		</Layout>
	);
};

export default HomePage
