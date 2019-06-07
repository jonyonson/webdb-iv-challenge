const express = require('express');
const helmet = require('helmet');

const dishesRouter = require('./dishes/dishes-router');

const server = express();

server.use(helmet());
server.use(express.json());

server.use('/api', dishesRouter);

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`\n** API running on http://localhost:${PORT} **\n`);
});
