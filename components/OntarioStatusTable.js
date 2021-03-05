import { useState, useEffect } from "react";

const hospitalField = "Number of patients hospitalized with COVID-19";
const icuField = "Number of patients in ICU with COVID-19";

const OntarioStatusTable = ({ dataSource = [] }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const data = dataSource.slice(-4).reverse();
    setData(data);
  }, [dataSource]);

  return (
    <div className="tl chart-container">
      <table className="w-100">
        <thead>
          <tr>
            <th>Date</th>
            <th colSpan="2">
              <a href="#Active cases">Active cases</a>
            </th>
            <th colSpan="2">
              <a href="#Total cases">Cases</a>
            </th>
            <th colSpan="2">
              <a href="#Total deaths">Deaths</a>
            </th>
            <th colSpan="2">
              <a href="#Patients hospitalized">Hospitalizations</a>
            </th>
            <th colSpan="2">
              <a href="#Patients in ICU">Patients in ICU</a>
            </th>
            <th colSpan="2">Resolved</th>
          </tr>
        </thead>
        <tbody>
          {data.map((status, index) => (
            <tr key={index}>
              <td>{status.date_string}</td>
              <td>{status.active_cases.toLocaleString()}</td>
              <td>
                ({status.new_active_cases >= 0 && "+"}
                {status.new_active_cases.toLocaleString()})
              </td>
              <td>{status["Total Cases"].toLocaleString()}</td>
              <td>(+{status.new_cases.toLocaleString()})</td>
              <td>{status["Deaths"].toLocaleString()}</td>
              <td>(+{status.new_deaths.toLocaleString()})</td>
              <td>{status[hospitalField].toLocaleString()}</td>
              <td>
                ({status.new_hospital >= 0 && "+"}
                {status.new_hospital.toLocaleString()})
              </td>
              <td>{status[icuField].toLocaleString()}</td>
              <td>
                ({status.new_icu >= 0 && "+"}
                {status.new_icu.toLocaleString()})
              </td>
              <td>{status["Resolved"].toLocaleString()}</td>
              <td>
                ({status.new_resolved >= 0 && "+"}
                {status.new_resolved.toLocaleString()})
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OntarioStatusTable;
