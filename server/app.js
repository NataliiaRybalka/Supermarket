require('dotenv').config();
const cors = require('cors');
const path = require('path');
const express = require('express');
const mongoose = require('mongoose');

const { envConstants: { HOST, PORT, MONGOOSE_DB } } = require('./constants');
const { categoriesRouter, accountRouter, productRouter } = require('./routes');

const app = express();

mongoose.connect(MONGOOSE_DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(process.cwd(), 'static')));

app.use('/categories', categoriesRouter);
app.use('/account', accountRouter);
app.use('/catalog', productRouter);

app.listen(PORT, HOST, () => {
  console.log(`App listen ${PORT}`);
})
