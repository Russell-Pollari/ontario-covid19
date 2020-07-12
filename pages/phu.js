import Layout from '../components/Layout';
import MetabaseIFrame from '../components/MetabaseIFrame';

import { phuMetabaseUrl } from '../constants';

export default function PHU() {
	return (
		<Layout
			title="Covid-19 in Ontario | Public Health Units"
			currentPath="/phu">
			<MetabaseIFrame url={phuMetabaseUrl} />
		</Layout>
	);
};
