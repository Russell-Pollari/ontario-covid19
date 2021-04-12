import jsonpFetch from './jsonpFetch';

/**
 * API Fields
 *
 * @see getCaseDataTypes.ts
 * @see https://docs.ckan.org/en/2.8/maintaining/datastore.html#ckanext.datastore.logic.action.datastore_search
 */
 const dataUrl = 'https://data.ontario.ca/api/3/action/datastore_search?resource_id=455fd63b-603d-4608-8216-7d8647f43350&fields=Outcome1,Accurate_Episode_Date,Age_Group&limit=1000000';

/**
 * Sort ofder for age grouped data
 */
const ageGroups = [
	'<20',
	'20s',
	'30s',
	'40s',
	'50s',
	'60s',
	'70s',
	'80s',
	'90+',
];

/**
 * Initialize an object with age groups in the above order
 */
const initAgeGroupedRecord = () => {
	const ageGroupedRecord = {};
	ageGroups.forEach((ageGroup) => {
		ageGroupedRecord[ageGroup] = { ageGroup, total: 0, deceased: 0, resolved: 0, active: 0 };
	});
	return ageGroupedRecord;
};

/**
 * Take an API response, and build a stats object
 *
 * * @see getCaseDataTypes.ts
 */
const compileAgeStats = (records) => {
  const totalByAgeParsed = initAgeGroupedRecord();
  const monthyByAgeParsed = {};

	records.forEach(record => {
		// Make sure the age group is valid
		const ageGroup = record.Age_Group;

		// Only care about known age groups
		if (ageGroup === 'UNKNOWN') return;

		// Accurate_Episode_Date is a ISO 8601 date/time string
		const yearMonth = record.Accurate_Episode_Date.substring(0, 7);

		// Initialize missing data
		if (!monthyByAgeParsed[yearMonth]) monthyByAgeParsed[yearMonth] = initAgeGroupedRecord();

		// Get variable we'll be updating into scope
		const ageGroupToUpdate = totalByAgeParsed[ageGroup];
		const monthGroupToUpdat = monthyByAgeParsed[yearMonth][ageGroup];

		// Update the lists
		ageGroupToUpdate.total += 1;
		monthGroupToUpdat.total += 1;

		if (record.Outcome1 === 'Fatal') {
			ageGroupToUpdate.deceased += 1;
			monthGroupToUpdat.deceased += 1;
		} else if (record.Outcome1 === 'Resolved') {
			ageGroupToUpdate.resolved += 1;
			monthGroupToUpdat.resolved += 1;
		} else {
			ageGroupToUpdate.active += 1;
			monthGroupToUpdat.active += 1;
		}
	});

	// Convert data to arrays for recharts
	const totalByAge = ageGroups.map((ageGroup) => totalByAgeParsed[ageGroup]);

	const monthyByAge = Object.entries(monthyByAgeParsed).sort(([monthA], [monthB]) => new Date(monthA) - new Date(monthB)).map(([month, monthlyByAgeGroup]) => {
		const monthData = { month };
		Object.values(monthlyByAgeGroup).forEach(({ ageGroup, total, deceased, resolved, active }) => {
			monthData[`${ageGroup}-total`] = total;
			monthData[`${ageGroup}-deceased`] = deceased;
			monthData[`${ageGroup}-resolved`] = resolved;
			monthData[`${ageGroup}-active`] = active;
		});

		return monthData;
	});

	return { totalByAge, monthyByAge };
};


// Should we use localStorage to cache the results
const useLocalStorage = typeof(Storage) !== 'undefined';

// Update this version to force a reload, regardless of exiry timeout
const localStorageVersion = 'v3';

// The key to use to store the results
const localStorageKey = 'CACHED_getCaseDataResult';

// How long should the cache last
const cacheExpiryHours = 8;

/**
 * Loads data for the stats screen
 */
const getCases = (fetcher = jsonpFetch) => {
	return new Promise((resolve) => {
		if (useLocalStorage) {
			// Try to get the old result from cache
			const currentDate = new Date();

			const cachedCaseDataRaw = localStorage.getItem(localStorageKey);
			if (cachedCaseDataRaw) {
				const cachedCaseDataResult = JSON.parse(cachedCaseDataRaw);
				if (currentDate.getTime() <= cachedCaseDataResult.expiry && cachedCaseDataResult.ageData && cachedCaseDataResult[localStorageVersion]) {
					// Found cached result. Use that instead of fetching new data.
					console.log(`Using cached result data localStorage. Clear storage key ${localStorageKey} to reset.`);
					resolve(cachedCaseDataResult.ageData);
					return;
				}
			}

			// Cached fetch failed, query original source
			fetcher(dataUrl, data => {
				const ageData = compileAgeStats(data.result.records);

				// Save the new result to cache, with an expiry timer
				const expiryDate = new Date(currentDate);
				expiryDate.setHours(currentDate.getHours() + cacheExpiryHours);

				localStorage.setItem(localStorageKey, JSON.stringify({
          [localStorageVersion]: true,
					expiry: expiryDate.getTime(),
					ageData,
				}));

				resolve(ageData);
			});
		} else {
			// Local storage not available, just do the fetch
			fetcher(dataUrl, data => {
				const ageData = compileAgeStats(data.result.records);
				resolve(ageData);
			});
		}
	});
};


export default getCases;
