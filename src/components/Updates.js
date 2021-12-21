import { useState, useEffect } from 'react';
import Link from 'next/link';

import SmallContentContainer from './SmallContentContainer';

const updates = [{
	date: '2021/12/21',
	update: (
		<span>
			The Omicron strain <em>seems</em> to be effective at infecting folks with 2 doses.{' '}
			<strong>But</strong> 2 vaccine doses still offer good protection from severe symptoms (see the charts on the Vaccine page).
			<br />
			<br />
			Be careful, folks! Get your booster and play it safe! I for one, am not traveling home for the holidays to protect my older family members.
		</span>
	)
}, {
	date: '2021/12/21',
	update: 'Fixed some math errors with my Vaccine stats.'
}, {
	date: '2021/12/03',
	update: 'Fixed some things. Ontario is no longer pubishing VOC cases with this dataset. And they are now publishing numbers for 3rd doses of vaccines and vaccinations for 5-11 age group'
}, {
	date: '2021/08/01',
	update: (
		<span>
			Added some more <Link href="/vaccinations">vaccine stats</Link>. Thanks{' '}
			<a href="https://github.com/aboodmufti" target="_blank" rel="noopener noreferrer">
				Abood Mufti
			</a>
			{' '} for the pull request!
		</span>
	),
}, {
	date: '2021/06/06',
	update: (
		<span>
			Added a chart showing <Link href="/vaccinations#Vaccination rate by age group">vaccination rates by age group</Link>. Thanks{' '}
			<a href="https://github.com/aboodmufti" target="_blank" rel="noopener noreferrer">
				Abood Mufti
			</a>
			{' '} for the pull request!
		</span>
	),
}, {
	date: '2021/05/28',
	update: 'Added a plot showing the estimated reproduction number—how many new people each confirmed case will infect (above 1 = bad, below 1 = good).'
}, {
	date: '2021/05/24',
	update: (
		<span>
			Breaking down <Link href="/vaccinations#Daily%20vaccines%20administered">daily vaccines</Link> by type of dose. Thanks{' '}
			<a href="https://github.com/aboodmufti" target="_blank" rel="noopener noreferrer">
				Abood Mufti
			</a>
			{' '} for the pull request!
		</span>
	),
}, {
	date: '2021/05/11',
	update: (
		<span>
			Added a logo and favicon. Thanks to <a href="https://twitter.com/mikedrach" target="_blank" rel="noopener noreferrer">Mike Drach</a> for designing it!
		</span>
	),
}, {
	date: '2021/04/12',
	update: (
		<span>
			Added new cases and the 7 day average for each <Link href="/phus">PHU</Link>.
			Thanks{' '}
			<a href="https://github.com/albertjvm" target="_blank" rel="noopener noreferrer">
				Albert
			</a>
			{' '}
			for the pull request!
		</span>
	)
}, {
	date: '2021/04/12',
	update: (
		<span>
			Optimized the query and added more plots to the <Link href="/stats">stats page</Link>.
			Thanks{' '}
			<a href="https://github.com/TikiTDO" target="_blank" rel="noopener noreferrer">
				TikiTDO
			</a>
			{' '}
			for the pull requests!
		</span>
	),
}, {
	date: '2021/04/09',
	update: (
		<span>
			Using adult population for vaccine percentages <Link href="/vaccinations">here</Link>.
		</span>
	)
}, {
	date: '2021/04/09',
	update: (
		<span>
			Added "Variants of concern" cases to table and Total cases plot. This data seems to be lagging, so I cannot calculate the daily change.
		</span>
	)
}, {
	date: '2021/03/28',
	update: (
		<span>
			Moved <Link href="/vaccinations">vaccination charts</Link> to a new page.
		</span>
	),
}, {
	date: '2021/03/27',
	update: (
		<span>
			Added <Link href="/stats">a page</Link> to show case statistics.
		</span>
	),
}, {
	date: '2021/03/14',
	update: 'Added plot showing total people fully vaccinated.',
}, {
	date: '2021/03/14',
	update: 'Making things a little prettier.'
}, {
	date: '2021/03/10',
	update: (
		<span>
			Added <Link href="/phus">a page</Link> to filter stats by public health unit (PHU).
		</span>
	),
}, {
	date: '2021/03/07',
	update: (
		<span>
			Added some features to the Summary table and added a 7 day moving average for
			daily vaccines. Thanks
			{' '}
			<a href="https://github.com/IsaacBerman" target="_blank" rel="noopener noreferrer">
				IsaacBerman
			</a>
			{' '}
			for the pull requests!
		</span>
	),
}, {
	date: '2021/02/20',
	update: 'Added a plot showing daily vaccinations.'
}, {
	date: '2021/02/07',
	update: (
		<span>
			Some minor prettifications. Thanks
			{' '}
			<a href="https://github.com/TikiTDO" target="_blank" rel="noopener noreferrer">
				TikiTDO
			</a>
			{' '}
			for the pull requests!
		</span>
	),
}];


const Updates = () => {
	const [visibleUpdates, setVisibleUpdates] = useState([]);
	const [showAll, setShowAll] = useState(false);

	useEffect(() => {
		setVisibleUpdates(showAll ? updates : updates.slice(0, 3));
	}, [showAll]);

	const toggleShowAll = () => setShowAll(!showAll);

	return (
		<SmallContentContainer title="Recent updates">
			<ul>
				{visibleUpdates.map(({ date, update }, index) => (
					<li key={index}>
						<strong>{date}</strong> {update}
					</li>
				))}
			</ul>
			<div className="blue hover-dark-blue pointer" onClick={toggleShowAll}>
				{showAll ? 'Show less' : 'Show all'}
			</div>
		</SmallContentContainer>
	);
};

export default Updates;
