const ageBreakdown = {
	title: 'Cases by age group',
	dataKeyX: 'ageGroup',
	bars: [{
		dataKey: 'deceased',
		fill: '#ef8c8c',
		name: 'Deceased',
		stackId: 'a',
	},{
		dataKey: 'active',
		fill: '#f9d45c',
		name: 'Active',
		stackId: 'a'
	}, {
		dataKey: 'resolved',
		fill: 'green',
		name: 'Resolved',
		stackId: 'a',
	}]
};

export const youngerMonthlyDeathBreakdown = {
	title: 'Deaths by age group 0-50s',
	dataKeyX: 'month',
	lines: [{
		dataKey: '<20-deceased',
		fill: '#21660b',
		stroke: '#21660b',
		name: '<20',
	},
	{
		dataKey: '20s-deceased',
		fill: '#5f884a',
		stroke: '#5f884a',
		name: '20s',
	},
	{
		dataKey: '30s-deceased',
		fill: '#5b796a',
		stroke: '#5b796a',
		name: '30s',
	},
	{
		dataKey: '40s-deceased',
		fill: '#737a69',
		stroke: '#737a69',
		name: '40s',
	},
	{
		dataKey: '50s-deceased',
		fill: '#000000',
		stroke: '#000000',
		name: '50s',
	}]
};

export const olderMonthlyDeathBreakdown = {
	title: 'Deaths by age group 50s-90s+',
	dataKeyX: 'month',
	lines: [
	{
		dataKey: '50s-deceased',
		fill: '#000000',
		stroke: '#000000',
		name: '50s',
	},
	{
		dataKey: '60s-deceased',
		fill: '#3d3cff',
		stroke: '#3d3cff',
		name: '60s',
	},
	{
		dataKey: '70s-deceased',
		fill: '#9552f9',
		stroke: '#9552f9',
		name: '70s',
	},
	{
		dataKey: '80s-deceased',
		fill: '#20e0ff',
		stroke: '#20e0ff',
		name: '80s',
	},
	{
		dataKey: '90+-deceased',
		fill: '#de425b',
		stroke: '#de425b',
		name: '90+',
	}]
};

export const monthlyRecoveryBreakdown = {
	title: 'All monthly recoveries',
	dataKeyX: 'month',
	lines: [{
		dataKey: '<20-resolved',
		fill: '#21660b',
		stroke: '#21660b',
		name: '<20',
	},
	{
		dataKey: '20s-resolved',
		fill: '#5f884a',
		stroke: '#5f884a',
		name: '20s',
	},
	{
		dataKey: '30s-resolved',
		fill: '#5b796a',
		stroke: '#5b796a',
		name: '30s',
	},
	{
		dataKey: '40s-resolved',
		fill: '#737a69',
		stroke: '#737a69',
		name: '40s',
	},
	{
		dataKey: '50s-resolved',
		fill: '#000000',
		stroke: '#000000',
		name: '50s',
	},
	{
		dataKey: '60s-resolved',
		fill: '#3d3cff',
		stroke: '#3d3cff',
		name: '60s',
	},
	{
		dataKey: '70s-resolved',
		fill: '#9552f9',
		stroke: '#9552f9',
		name: '70s',
	},
	{
		dataKey: '80s-resolved',
		fill: '#20e0ff',
		stroke: '#20e0ff',
		name: '80s',
	},
	{
		dataKey: '90+-resolved',
		fill: '#de425b',
		stroke: '#de425b',
		name: '90+',
	}]
};

export default ageBreakdown;
