const vaccinatedByAge = {
  dataKeyX: 'Agegroup',
  title: 'Vaccination rate by age group',
  bars: [
    {
      dataKey: 'Percent_fully_vaccinated',
      name: 'Fully vaccinated',
      fill: '#82ca9d',
    },
    {
      dataKey: 'percent_partially_vaccinated',
      name: 'Partially vaccinated',
      fill: '#509ee3',
    },
    {
      dataKey: 'percent_not_vaccinated',
      name: 'Not vaccinated',
      fill: '#c9c9c9',
    },
  ],
};

export default vaccinatedByAge;
