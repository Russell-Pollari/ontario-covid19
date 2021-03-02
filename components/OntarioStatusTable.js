import { useState, useEffect, useCallback } from "react";

const hospitalField = "Number of patients hospitalized with COVID-19";
const icuField = "Number of patients in ICU with COVID-19";

const OntarioStatusTable = ({ dataSource = [] }) => {
  const [data, setData] = useState([]);
  const [entryAmount, setEntryAmount] = useState(4);

  useEffect(() => {
    const data = dataSource.slice(-entryAmount).reverse();
    setData(data);
  }, [dataSource, entryAmount]);

  const showMore = useCallback(() => {
    setEntryAmount((prev) => prev + 4);
  }, [setEntryAmount]);

  const showLess = useCallback(() => {
    setEntryAmount((prev) => (prev > 4 ? prev - 4 : prev));
  }, [setEntryAmount]);

  return (
    <div className="tl chart-container">
      <table className="w-100">
        <thead>
          <tr>
            <th>Date</th>
            <th colSpan="2">Active cases</th>
            <th colSpan="2">Cases</th>
            <th colSpan="2">Deaths</th>
            <th colSpan="2">Hospitalizations</th>
            <th colSpan="2">Patients in ICU</th>
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
      <button
        type="button"
        onClick={showMore}
        style={{ backgroundColor: "white", color: "black", border: "2px solid #008CBA" }}
      >
        Show more
      </button>
      <button
        type="button"
        onClick={showLess}
        style={{ backgroundColor: "white", color: "black", border: "2px solid #008CBA" }}
      >
        Show less
      </button>
    </div>
  );
};

export default OntarioStatusTable;
