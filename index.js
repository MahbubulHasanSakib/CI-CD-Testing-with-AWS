const express = require('express');
const os = require('os');

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
	res.json({
		message: 'Welcome to the CI/CD Practice server..BOOOM..',
		uptime: process.uptime(),
		env: process.env.NODE_ENV || 'development',
		hostname: os.hostname(),
	});
});

app.get('/health', (req, res) => {
	res.json({ status: 'healthy....yaayyy', timestamp: Date.now() });
});

app.listen(PORT, () => {
		console.log(`Server listening on http://localhost:${PORT}`);
});
