const hospitalized = {
  title: "Patients hospitalized",
  dataKeyX: "date_string",
  bars: [
    {
      dataKey: "Number of patients hospitalized with COVID-19",
      name: "Patients hospitalized",
      fill: "#ef8c8c",
    },
  ],
  lines: [
    {
      dataKey: "hospitalizations_rolling_average",
      name: "7 day rolling average",
      stroke: "black",
      strokeWidth: 2,
      dot: false,
    },
  ],
};

export default hospitalized;
