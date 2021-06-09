const ZERO_RECORD = {
    active_cases: 0,
    resolved_cases: 0,
    total_cases: 0,
    total_deaths: 0,
    new_tests: 0,
    under_investigation: 0,
    new_percent_pos: 0,
    total_hospital: 0,
    total_icu: 0,
    pos_icu: 0,
    neg_icu: 0,
    total_vent: 0,
    pos_vent: 0,
    neg_vent: 0,
    total_ltc: 0,
    total_ltc_hcw: 0,
    total_ltc_deaths: 0,
    total_ltc_hcw_deaths: 0,
    total_b117: 0,
    total_b1351: 0,
    total_p1: 0
};

const normalizePhuRecord = (record) => {
    const active_cases = record.ACTIVE_CASES;
    const resolved_cases = record.RESOLVED_CASES;
    const total_deaths = record.DEATHS;

    return {
        ...ZERO_RECORD,
        date: record.FILE_DATE,
        active_cases,
        resolved_cases,
        total_cases: active_cases + resolved_cases + total_deaths,
        total_deaths
    };
};

const normalizeOntarioRecord = (record) => {
    const resolved_cases = record['Resolved'];
    const total_cases = record['Total Cases'];
    const total_deaths = record['Deaths'];
    const new_tests = record['Total tests completed in the last day'];
    const under_investigation = record['Under Investigation'];
    const new_percent_pos = record['Percent positive tests in last day'];
    const total_hospital = record['Number of patients hospitalized with COVID-19'];
    const total_icu = record['Number of patients in ICU due to COVID-19'];
    const pos_icu = record['Number of patients in ICU,testing positive for COVID-19'];
    const neg_icu = record['Number of patients in ICU,testing negative for COVID-19'];
    const total_vent = record['Number of patients in ICU on a ventilator due to COVID-19'];
    const pos_vent = record['Num. of patients in ICU on a ventilator testing positive'];
    const neg_vent = ['Num. of patients in ICU on a ventilator testing negative'];
    const total_ltc = record['Total Positive LTC Resident Cases'];
    const total_ltc_hcw = record['Total Positive LTC HCW Cases'];
    const total_ltc_deaths = record['Total LTC Resident Deaths'];
    const total_ltc_hcw_deaths = record['Total LTC HCW Deaths'];
    const total_b117 = record['Total_Lineage_B.1.1.7'];
    const total_b1351 = record['Total_Lineage_B.1.351'];
    const total_p1 = record['Total_Lineage_P.1'];

    return {
        date: record['Reported Date'],
        active_cases: total_cases - resolved_cases - total_deaths,
        resolved_cases,
        total_cases,
        total_deaths,
        new_tests,
        under_investigation,
        new_percent_pos,
        total_hospital,
        total_icu,
        pos_icu,
        neg_icu,
        total_vent,
        pos_vent,
        neg_vent,
        total_ltc,
        total_ltc_hcw,
        total_ltc_deaths,
        total_ltc_hcw_deaths,
        total_b117,
        total_b1351,
        total_p1
    };
};

const addCalculatedFields = record => ({
    ...record,
    date_string: new Date(record.date).toLocaleString('en-us', { month: 'short', day: 'numeric' }),
    icu_no_ventilator: record.total_icu - record.total_vent,
    total_voc: record.total_b117 + record.total_b1351 + record.total_p1,
    total_non_voc: record.total_cases - (record.total_b117 + record.total_b1351 + record.total_p1),
});

const sortRecords = (a, b) => new Date(a.date) - new Date(b.date);

const calculateDeltas = (record, index, array) => {
    const yesterday = index ? array[index - 1] : ZERO_RECORD;

    return {
        ...record,
        new_cases: Math.max(0, record.total_cases - yesterday.total_cases),
        new_deaths: Math.max(0, record.total_deaths - yesterday.total_deaths),
        new_active_cases: Math.max(0, record.active_cases - yesterday.active_cases),
        new_resolved: Math.max(0, record.resolved_cases - yesterday.resolved_cases),
        new_hospital: Math.max(0, record.total_hospital - yesterday.total_hospital),
        new_icu: Math.max(0, record.total_icu - yesterday.total_icu),
    };
};

const calculateAverages = (record, index, array) => {
    const last7days = array.slice(Math.max(0, index - 6), Math.min(index + 1, array.length));

    return {
        ...record,
        avg_new_cases: Math.round(last7days.reduce((total, record) => total + record.new_cases, 0) / last7days.length),
        avg_new_deaths: Math.round(last7days.reduce((total, record) => total + record.new_deaths, 0) / last7days.length),
        avg_new_tests: Math.round(last7days.reduce((total, record) => total + record.new_tests, 0) / last7days.length),
        avg_percent_pos: last7days.reduce((total, record) => total + record.new_percent_pos, 0) / last7days.length,
    };
};

export const processOntarioRecords = (records) => (
    records
        .map(rec => 
            addCalculatedFields(
                normalizeOntarioRecord(rec)
            )
        )
        .sort(sortRecords)
        .map(calculateDeltas)
        .map(calculateAverages)
);

export const processPHURecords = (records) => (
    records
        .map(rec => 
            addCalculatedFields(
                normalizePhuRecord(rec)
            )
        )
        .sort(sortRecords)
        .map(calculateDeltas)
        .map(calculateAverages)
);