import Layout from '../components/Layout';
import MetabaseIFrame from '../components/MetabaseIFrame';

import { canadaMetabaseUrl } from '../constants';

export default function Canada() {
	return (
		<Layout
			title="Covid-19 in Ontario | Canada"
			currentPath="/canada">
			<MetabaseIFrame url={canadaMetabaseUrl} />
		</Layout>
	);
};
