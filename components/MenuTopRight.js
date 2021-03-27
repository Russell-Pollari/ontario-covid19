import { Fragment } from 'react';
import Link from 'next/link';
import Button from '@material-ui/core/Button';


const MenuTopRight = () => {
	return (
		<Fragment>
			<Link href="/stats">
				<Button color="inherit">Stats</Button>
			</Link>
			<Link href="/phus">
				<Button color="inherit">PHUs</Button>
			</Link>
			<Link href="/about">
				<Button color="inherit">About</Button>
			</Link>
		</Fragment>
	);
};

export default MenuTopRight;
