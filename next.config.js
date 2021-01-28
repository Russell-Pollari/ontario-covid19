const isDev = process.env.NODE_ENV === 'development'
const basePath = isDev ? '' : '/ontario-covid19';

module.exports = {
	assetPrefix: basePath,
	publicRuntimeConfig: {
		basePath: basePath,
	}
}
