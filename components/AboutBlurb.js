import SmallContentContainer from './SmallContentContainer';

const AboutBlurb = () => {
	return (
		<SmallContentContainer title="About">
			<ul>
				<li>
					Summaries and visualizations of Covid-19 data taken from{' '}
					<a href="https://data.ontario.ca/dataset?keywords_en=COVID-19" target="_blank" rel="noopener noreferrer">
						Ontario's data catalogue
					</a>.
				</li>
				<li>
					I've been maintaining this dashboard for over a year now! If you've gotten value from it, consider{' '}
					<a href="https://www.buymeacoffee.com/russellpollari">
						buying me a coffee
					</a>.
				</li>
				<li>
					Want to contribute and make it better? Fork it on <a href="https://github.com/Russell-Pollari/ontario-covid19">GitHub</a>.
				</li>
			</ul>
		</SmallContentContainer>
	);
};

export default AboutBlurb;
