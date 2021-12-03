import vaccineCharts from './vaccineChartIDs';

const dailyDoses = {
  id: vaccineCharts.dailyDoses,
  dataKeyX: 'date_string',
  title: 'Daily vaccines administered',
  syncId: 'vaccineCharts',
  bars: [
    {
      dataKey: 'previous_day_at_least_one',
      name: 'Daily first doses administered',
      fill: '#509ee3',
    },
    {
      dataKey: 'previous_day_fully_vaccinated',
      name: 'Daily second doses administered',
      fill: '#82ca9d',
    },
		{
			dataKey: 'previous_day_third_doses',
			name: 'Daily third doses administered',
			fill: '#82aa9d',
		},


  ],
  lines: [
    {
      dataKey: 'new_vaccines_rolling_average',
      name: '7 day rolling average',
      stroke: 'black',
      strokeWidth: 2,
      dot: false,
    },
  ],
};

export default dailyDoses;
