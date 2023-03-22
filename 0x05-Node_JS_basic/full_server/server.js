const express = require('express');
const router = require('./routes/index');

const app = express();
const port = 1245;

app.use('/', router);

app.listen(port, () => {
  console.log(`Running on http://loclhost:${port}`);
});

export default app;
