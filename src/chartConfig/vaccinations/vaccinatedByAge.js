const vaccinatedByAge = {
  dataKeyX: 'Agegroup',
  title: 'Vaccination rate by age group',
  bars: [
    {
      dataKey: 'Percent_fully_vaccinated',
      name: 'Fully Vaccinated',
      fill: '#82ca9d',
    },
    {
      dataKey: 'percent_partially_vaccinated',
      name: 'Partially Vaccinated',
      fill: '#509ee3',
    },
    {
      dataKey: 'percent_not_vaccinated',
      name: 'Not Vaccinated',
      fill: '#c9c9c9',
    },
  ],
};

export default vaccinatedByAge;
