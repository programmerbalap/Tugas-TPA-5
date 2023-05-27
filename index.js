const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const categoriRouter = require('./routes/categoriRoute');
const roleRouter = require('./routes/roleRoute');
const userRouter = require('./routes/userRoute');
const produkRouter = require('./routes/produkRoute');
const authRouter = require('./routes/authRoute');
const session = require('express-session');
// const db = require('./models');
// const jwt = require('jsonwebtoken');

// (async () => {
//   await db.sequelize.sync();
// })();
const app = express();

dotenv.config();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// app.use(express.json());
app.use(categoriRouter);
app.use(roleRouter);
app.use(userRouter);
app.use(produkRouter);
app.use(authRouter);

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: true,
      maxAge: 3600000,
    },
  })
);

app.listen(process.env.SECRET_PORT, () => {
  console.log(`Berjalan pada port ${process.env.SECRET_PORT}`);
});
