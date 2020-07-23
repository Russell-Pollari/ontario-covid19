

const OntarioStatusTable = ({
	dataSource = [],
}) => {
	const data = dataSource.slice(-4).reverse();

	return (
		<div className="tl chart-container">
			<table>
				<thead>
					<tr>
						<th>Date (EST)</th>
						<th>Total confirmed cases</th>
						<th />
						<th>Total deaths</th>
						<th>PatientsHospilized</th>
						<th>Patients in ICU</th>
					</tr>
				</thead>
				<tbody>
					{data.map((status, index) => (
						<tr key={index}>
							<td>{status.date_string}</td>
							<td>{status.total_cases}</td>
							<td>{status.new_cases}</td>
							<td>{status.total_deaths}</td>
							<td>{status.new_deaths}</td>
							<td>{status.num_hospitalized}</td>
							<td>{status.num_icu}</td>
							<td>{status.num_ventilator}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default OntarioStatusTable;
