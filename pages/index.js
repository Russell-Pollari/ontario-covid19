import Layout from '../components/Layout';
import MetabaseIFrame from '../components/MetabaseIFrame';

function HomePage() {
	return (
		<Layout>
			<MetabaseIFrame
				url="https://ontario-covid-dash-metabaase.herokuapp.com/public/dashboard/10bf46a5-a37f-4686-9067-ab9f312c0767"
			/>
		</Layout>
	);
}

export default HomePage
