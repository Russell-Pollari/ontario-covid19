import Layout from '../components/Layout';
import MetabaseIFrame from '../components/MetabaseIFrame';

export default function PHU() {
	return (
		<Layout
			title="Covid-19 in Ontario | Public Health Units"
			currentPath="/phu">
			<MetabaseIFrame
				url="https://ontario-covid-dash-metabaase.herokuapp.com/public/dashboard/0ae903a6-a86d-4f9e-8166-a638d3fcaea0"
			/>
		</Layout>
	);
};
