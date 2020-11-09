const express = require('express');
const app = express();

app.use(express.static('./dist/landing-page'));
app.get('/*', function (req, res) {
	res.sendFile('index.html', { root: 'dist/landing-page/' });
});
app.listen(process.env.PORT || 8080);
