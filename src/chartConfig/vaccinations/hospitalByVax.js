import vaccineCharts from './vaccineChartIDs';

const hospitalByVax = {
  id: vaccineCharts.hospitalByVax,
  dataKeyX: 'date',
  title: 'Hospital occupancy by vaccination status (per million)',
  areas: [
    {
      dataKey: 'hosp_full_vax_per_mil',
      name: 'Fully Vaccinated',
      stroke: '#82ca9d',
      fill: '#82ca9d',
      strokeWidth: 2,
      stackId: 1,
      type:"monotone"
    },
    {
      dataKey: 'hosp_partial_vax_per_mil',
      name: 'Partially Vaccinated',
      stroke: '#f5b042',
      fill: '#f5b042',
      strokeWidth: 2,
      stackId: 1,
      type:"monotone"
    },
    {
      dataKey: 'hosp_unvax_per_mil',
      name: 'Not Vaccinated',
      stroke: '#eb4034',
      fill: '#eb4034',
      strokeWidth: 2,
      stackId: 1,
      type:"monotone"
    },
  ],
};

export default hospitalByVax;
