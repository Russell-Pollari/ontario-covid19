const basePath = '/ontario-covid19'
const isDev = process.env.NODE_ENV === 'development'

module.exports = {
	assetPrefix: isDev ? '' : basePath,
	publicRuntimeConfig: {
		basePath: isDev ? '' : basePath,
	}
}
