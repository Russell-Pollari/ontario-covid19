import ContentContainer from './ContentContainer';


const VaccinationStatus = ({ data = [] }) => {
	if (!data.length) {
		return null;
	}

	const population = 14733119;

	const lastUpdate = data[data.length - 1];
	const totalFullyVaccinated = lastUpdate.total_individuals_fully_vaccinated;
	const totalsWithOneDose = lastUpdate.total_doses_administered - (2 * totalFullyVaccinated);
	const timeToFullVaccination = ((population - totalFullyVaccinated) * 2 - totalsWithOneDose) / lastUpdate.new_vaccines_rolling_average;
	const timeToOneDose = ((population - totalFullyVaccinated) - totalsWithOneDose) / lastUpdate.new_vaccines_rolling_average;

	return (
		<ContentContainer title="Vaccinations at a glance">
			<ul>
				<li>
					<strong>
						{Math.round(((totalsWithOneDose + totalFullyVaccinated) / population) * 100 * 100) / 100}%
					</strong>
					{' '}
					of the population of Ontario has had at least one shot.*
					</li>
				<li>
					<strong>
						{Math.round((totalFullyVaccinated / population) * 100 * 100) / 100}%
					</strong>
					{' '}
					of the population of Ontario is fully vaccinated.*
				</li>
				<li>
					At the current average pace of <strong>{lastUpdate.new_vaccines_rolling_average.toLocaleString()}</strong> shots per day.
					We can deliver a single dose to everyone in <strong>{Math.round(timeToOneDose)} days.</strong> And
					reach full vaccination in <strong>{Math.round(timeToFullVaccination)} days.*</strong>
				</li>
			</ul>
			<div className="mt16 f12">
				*These numbers are all back-of-the-envolope estimates. Don't take them as fact.
			</div>
		</ContentContainer>
	);
};

export default VaccinationStatus;
