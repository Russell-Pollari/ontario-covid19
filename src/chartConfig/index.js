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

import ageBreakdown, {
  youngerMonthlyDeathBreakdown,
  olderMonthlyDeathBreakdown,
  monthlyRecoveryBreakdown,
} from './cases/ageBreakdown';

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

export const phuStatusCharts = [
	activeCases,
	totalCases,
	newCases,
	totalDeaths,
	newDeaths,
];

export const vaccineCharts = [
	dailyDoses,
	totalDoses,
	totalVaccinated,
];

export const ageStats = ageBreakdown;

export const monthlyAgeBreakdowns = [
  youngerMonthlyDeathBreakdown,
  olderMonthlyDeathBreakdown,
  monthlyRecoveryBreakdown,
];