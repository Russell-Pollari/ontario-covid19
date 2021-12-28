const ensureNumber = (value) => {
		if (typeof value === 'number') {
				return value;
		}
		return Number((value || '0').replace(/,/g, ''));
};

export default ensureNumber;
