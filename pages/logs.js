import Layout from '../components/Layout';
import MetabaseIFrame from '../components/MetabaseIFrame';

export default function PHU() {
	return (
		<Layout
			title="Covid-19 in Ontario | Logs"
			currentPath="/logs">
			<MetabaseIFrame
				url="https://ontario-covid-dash-metabaase.herokuapp.com/public/question/63aa2160-87fc-482b-80b6-bf76a6d058ed"
			/>
		</Layout>
	);
};
