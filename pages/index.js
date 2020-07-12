import Layout from '../components/Layout';
import MetabaseIFrame from '../components/MetabaseIFrame';

import { ontarioMetabseUrl } from '../constants';

function HomePage() {
	return (
		<Layout>
			<MetabaseIFrame url={ontarioMetabseUrl} />
		</Layout>
	);
}

export default HomePage
