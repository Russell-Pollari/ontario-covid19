import { useState, useEffect } from 'react';
import Link from 'next/link';

import ContentContainer from './ContentContainer';

const updates = [{
	date: '2022/11/23',
	update: (
		<span>
			<p>
				<strong>This dashboard is no longer maintaned.</strong> but you can check out an updated version <a href="https://asoap.github.io/ontario-covid19/">here</a>. Thanks Derek D!
			</p>
			<p>
				Thanks to everyone who supported this page over the past 2.5 years—with contributions and donations.
			</p>
			<p>
				For a short time, this was a go-to site for reliable, up-to-date information about the covid 19 pandemic. Keeping it that way however, will require active maintenance—to deal with changing information and data sources. And I don't have the bandwidth.
			</p>
			<p>
				Instead, my focus will put towards being a good father and husband, and running and growing <a href="https://www.sharpestminds.com">SharpestMinds</a>.
			</p>
			<p>
				Thanks,
			</p>
			<p>
				Russell
			</p>
			<p>
				P.S Feel free to fork the <a href="https://github.com/Russell-Pollari/ontario-covid19">repo</a> and fix it, or <a href="mailto:russell@sharpestminds">get in touch</a>
			</p>
		</span>
	),
}, {
	date: '2021/03/15',
	update: 'Ontario changed how they count deaths due to covid. I guess we were overcounting before. This involved an update to the data format which broke some things on this dashboard. All fixed now. Thanks to the folks who got in touch to flag it!',
}, {
	date: '2022/01/28',
	update: 'All recovered. Thanks to everyone who reached out and wished us well!',
}, {
	date: '2022/01/10',
	update: (
		<span>
			Welp. My wife and I have Covid—despite two vaccines each. FYI I had three false negatives with
			at home rapid tests, despite showing symptoms. Finally, with a throat swap and nasal swap, I got a positive result.
		</span>
	),
}, {
	date: '2022/01/10',
	update: (
		<span>
			Fixed the vaccine percentage for at folks with at least one dose.
		</span>
	),
}, {
	date: '2021/12/28',
	update: (
		<span>
			Removed some charts and stats that were out of date, and maybe wrong.
		</span>
	),
}, {
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
		setVisibleUpdates(showAll ? updates : updates.slice(0, 1));
	}, [showAll]);

	const toggleShowAll = () => setShowAll(!showAll);

	return (
		<ContentContainer title="Recent updates">
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
		</ContentContainer>
	);
};

export default Updates;
