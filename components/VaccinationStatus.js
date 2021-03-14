import Typography from '@material-ui/core/Typography';

const VaccinationStatus = ({ data = [] }) => {
	if (!data.length) {
		return null;
	}

	const population = 14733119;

	const lastUpdate = data[data.length - 1].total_individuals_fully_vaccinated;
	return (
		<div className="mv16">
			<Typography variant="h6">
				**~{Math.round((lastUpdate / population) * 100 * 100) / 100}% of the population Ontario is fully vaccinated**
			</Typography>
		</div>
	);
};

export default VaccinationStatus;
