import newCases from './ontario/newCases';
import activeCases from './ontario/activeCases';
import totalCases from './ontario/totalCases';
import newDeaths from './ontario/newDeaths';
import totalDeaths from './ontario/totalDeaths';
import hospitalized from './ontario/hospitalized';
import icu from './ontario/icu';
import tests from './ontario/tests';
import positiveRate from './ontario/positiveRate';

import totalDoses from './vaccinations/totalDoses';
import dailyDoses from './vaccinations/dailyDoses';
import totalVaccinated from './vaccinations/totalVaccinated';
import vaccinatedByAge from './vaccinations/vaccinatedByAge';
import casesByVax from './vaccinations/casesByVax';
import hospitalByVax from './vaccinations/hospitalByVax';
import icuByVax from './vaccinations/icuByVax';

import reChart from './re/re';

export const ontarioStatusCharts = [
	activeCases,
	totalCases,
	newCases,
	totalDeaths,
	newDeaths,
	tests,
	positiveRate,
	hospitalized,
	icu,
];

export const vaccineCharts = [
	casesByVax,
	hospitalByVax,
	icuByVax,
	vaccinatedByAge,
	dailyDoses,
	totalDoses,
	totalVaccinated,
];

export const re = reChart;
