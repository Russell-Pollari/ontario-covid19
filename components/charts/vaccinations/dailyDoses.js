const dailyDoses = {
  dataKeyX: 'date_string',
  title: 'Daily vaccines administered',
  bars: [
    {
      dataKey: 'previous_day_doses_administered',
      name: 'Daily doses administered',
      fill: '#509ee3',
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
