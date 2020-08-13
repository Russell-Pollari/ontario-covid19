const ScaleToggle = ({ toggleScale, scale }) => {
	return (
		<span onClick={toggleScale} className="pointer fr">
			<span className={scale === 'linear' ? 'active-link' : ''}>
				Linear
			</span>
			{'<>'}
			<span className={scale === 'log' ? 'active-link' : ''}>
				Log
			</span>
		</span>
	);
};

export default ScaleToggle;
