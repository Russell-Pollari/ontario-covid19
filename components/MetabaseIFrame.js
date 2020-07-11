export default function MetabaseIFrame ({ url }) {
	return (
		<iframe
			style={{
				position: 'fixed',
				top: '50px',
				left: 0,
				bottom: 0,
				right: 0,
				width: '100%',
				height: '100%',
				border: 'none',
				margin: 0,
				padding: 0,
				overflow: 'hidden',
				zIndex: 100,
			}}
			src={url}
			frameBorder="0"
		/>
	)
};
