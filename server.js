const express = require('express');
const sequelize = require('./config/connection');
const path = require('path');
const session = require('express-session');

const routes = require('./controller');
const app = express();
const PORT = process.env.PORT || 3001;


const helpers = require('./helpers/helpers');

const exphbs = require('express-handlebars');
const hbs = exphbs.create({ helpers });

const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
  secret: 'screet',
  cookie: {
        expires: 5 * 60 * 1000
  },
  rolling: true,
  saveUninitialized: true,
  resave: true,
  store: new SequelizeStore({
    db: sequelize
  }),
};

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(session(sess));
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.use(routes);


sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Listening on ${PORT}`));
});