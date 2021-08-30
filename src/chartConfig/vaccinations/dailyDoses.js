import vaccineCharts from './vaccineChartIDs';

const dailyDoses = {
  id: vaccineCharts.dailyDoses,
  dataKeyX: 'date_string',
  title: 'Daily vaccines administered',
  bars: [
    {
      dataKey: 'previous_day_first_doses_administered',
      name: 'Daily first doses administered',
      fill: '#509ee3',
    },
    {
      dataKey: 'previous_day_second_doses_administered',
      name: 'Daily second doses administered',
      fill: '#82ca9d',
    },
    {
      dataKey: 'previous_day_one_shot_doses_administered',
      name: 'Daily one-shot doses administered',
      fill: '#ca82c8',
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
