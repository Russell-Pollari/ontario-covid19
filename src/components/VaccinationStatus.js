import ContentContainer from './ContentContainer';


const VaccinationStatus = ({ data = [] }) => {
	if (!data.length) {
		return null;
	}
	const eligiblePopulation = 14010998; // 5+ population

	const lastUpdate = data[data.length - 1];
	const totalFullyVaccinated = lastUpdate.total_individuals_fully_vaccinated;
	const totalWithOneDose = lastUpdate.total_individuals_at_least_one;
	const totalWithThreeDoses = lastUpdate.total_individuals_3doses;


	return (
		<ContentContainer title="Vaccinations at a glance">
			<ul>
				<li>
					<strong>
						{Math.round( (totalWithOneDose) / eligiblePopulation * 100 * 100) / 100}%
					</strong>
					{' '}
					of the <em>eligible</em> population of Ontario has had at least one shot.
					</li>
				<li>
					<strong>
						{Math.round((totalFullyVaccinated / eligiblePopulation) * 100 * 100) / 100}%
					</strong>
					{' '}
					of the <em>eligible</em> population of Ontario has had at least two shots.
				</li>
				<li>
					<strong>
						{Math.round((totalWithThreeDoses / eligiblePopulation) * 100 * 100) / 100}%
					</strong>
					{' '}
					of the <em>eligible</em> population of Ontario has had three shots.
				</li>
			</ul>
			<div className="mt16 f12">
				<em>Eligible population</em>: Everyone 5 and older based on estimates from Statistics Canada on July 1st 2020.
			</div>
		</ContentContainer>
	);
};

export default VaccinationStatus;
