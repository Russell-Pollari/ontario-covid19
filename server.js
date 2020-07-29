const express = require('express')
const next = require('next');
const dev = process.env.NODE_ENV !== 'production'

const app = next({ dev });
const handle = app.getRequestHandler();


app.prepare().then(() => {
	const server = express();

	server.get('/api/test', (req, res) => {
		res.send('Hello world');
	});

	server.get('*', (req, res) => {
		return handle(req, res);
	});

	server.listen(3000, () => {
		console.log('Listening on port', 3000)
	})
});
