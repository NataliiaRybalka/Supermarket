require('dotenv').config();
const cors = require('cors');
const path = require('path');
const express = require('express');
const mongoose = require('mongoose');

const { envConstants: { HOST, PORT, MONGOOSE_DB } } = require('./constants');
<<<<<<< HEAD
const { categoriesRouter, loginRouter, registrationRouter, fruitsRouter } = require('./routes');
=======
const { categoriesRouter, accountRouter, productRouter } = require('./routes');
>>>>>>> master

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
<<<<<<< HEAD
app.use('/fruits', fruitsRouter);
app.use('/login', loginRouter);
app.use('/registration', registrationRouter);
=======
app.use('/account', accountRouter);
app.use('/catalog', productRouter);
>>>>>>> master

app.listen(PORT, HOST, () => {
  console.log(`App listen ${PORT}`);
})
