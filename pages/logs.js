import Layout from '../components/Layout';
import MetabaseIFrame from '../components/MetabaseIFrame';

import { logsMetabaseUrl } from '../constants';

export default function Logs() {
	return (
		<Layout
			title="Covid-19 in Ontario | Logs"
			currentPath="/logs">
			<MetabaseIFrame url={logsMetabaseUrl} />
		</Layout>
	);
};
