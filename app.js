const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');
const cookieParser = require('cookie-parser');
const compression = require('compression');
const cors = require('cors');
//Template Engine
const exphbs = require("express-handlebars");
const hbs = require("hbs");
// const hbs = require("handlebars");
const helpers = require("./helpers");

const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');

const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorController');
const tourRouter = require('./routes/tourRoutes');
const emailRouter = require("./routes/emailRoutes");
const userRouter = require('./routes/userRoutes');
// const APIRouter = require('./routes/authRoutes2');
const authRouter = require('./routes/authRoutes');
const routeHome = require('./routes/home');
const routeAbout = require('./routes/about');
// const authRouter = require('./routes/APIRoutes');
const reviewRouter = require('./routes/reviewRoutes');
const viewRouter = require('./routes/viewRoutes');
const indexRouter = require("./routes/emailRoutes");

const bookingRouter = require('./routes/bookingRoutes');
const bookingController = require('./controllers/bookingController');


const { log } = console;

const app = express();

require('./utils/passport');

//Pug
// app.set('view engine', 'pug'); 
// app.set('views', path.join(__dirname, 'views'));

//handlebars.js
// const hbs = exphbs.create({
//   // partialsDir: path.join(__dirname, 'views/partials'),
//   // layoutsDir: path.join(__dirname, "views/layouts"),
//   defaultLayout: false,
//   partialsDir: __dirname + "/views/partials",
//   helpers: helpers(),
// });
// app.engine("handlebars", hbs.engine);
// app.set("view engine", "handlebars");
// app.set("views", __dirname + "/views");
const {AMP} = require('./services/emailTemplates/AMP');
app.set("view engine", "hbs");
// let element = "<div><p>dalam</p></div>";
// const template = hbs.compile(AMP(element));

// const html = template({ title: 'Handlebars', richText: '<strong>ridiBaba</strong>' });
// console.log('!!!HBS is : ', html); // <h1>Handlebars</h1>

// const renderedFile = app.render(
//       "email",
//       { name: 'dalam'},
//       (err, html) => {
//         if (err) return console.error('!!!ERROR IS : ', err);
//         // do whatever you want here with `html`
//         // console.log("!!!HTML IS : ", html);
//         return html;
//       }
// );
// console.log('this is render handlebars :', renderedHTML.toString());
// Cookie session -->
// console.log("renderedFile is :",renderedFile);

app.use(bodyParser.json());
app.use(
  cookieSession({
    maxAge: 10 * 1000,
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());
// <-- cookie session

// require('./routes/authRoutes')(app);

// We use a seperate route before parsing data with `express.json` bz Stripe forces us
// to use a non-json or so called `raw` parsing using express.raw
// or you can use `bodyParser.raw` method from body-parser NPM package to do the same job.
// Stripe webhook, BEFORE body-parser, because stripe needs the body as stream

app.post(
  '/webhook-checkout',
  bodyParser.raw({ type: 'application/json' }),
  bookingController.webhookCheckout
);

app.enable('trust proxy'); // trust proxies e.x. Heroku platfrom, Firebase & suchlike
// 1) GLOBAL MIDDLEWARES
// Implement CORS
app.use(cors()); // Enable Cross-Origin-Resource-Sharing for all incoming requests.
// Add header to req: Access-Control-Allow-Origin *

// Only allow some specific origins
// e.x. if client is: www.aio.io
// and API is: api.aio.io
// or want to give access to only special domains to use your service

// app.use(cors({
//   origin: 'https://www.aio.io'
// }));

// respond to options request to non-simple/preflied requests other than `get` & `post`
// like `delete` or `patch`
app.options('*', cors());

// allow specific routes protection from non-simple requests
// app.options('/api/v1/tours/:id', cors());

// Serving static files
app.use(express.static(path.join(__dirname, 'public')));

// Set security HTTP headers
app.use(helmet());

// Development logging
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Limit requests from same API
const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: 'Too many requests from this IP, please try again in an hour!'
});
app.use('/api', limiter);

// Body parser, reading data from body into req.body
app.use(express.json({ limit: '10kb' })); // parse data from body
app.use(express.urlencoded({ extended: true, limit: '10kb' })); // parse data from urlencoded forms html requests.
app.use(cookieParser()); // parse data from cookies

// Data sanitization against NoSQL query injection
app.use(mongoSanitize());

// Data sanitization against XSS
app.use(xss());

// Prevent parameter pollution
app.use(
  hpp({
    whitelist: [
      'duration',
      'ratingsQuantity',
      'ratingsAverage',
      'maxGroupSize',
      'difficulty',
      'price'
    ]
  })
);

// AJAX API requests compression
app.use(compression());

// Test middleware
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  // console.log('from middleware : ',req.body.my_text)
  // log(req.cookies);
  // log(req.requestTime);
  next();
});

// 3) ROUTES
// app.use('/', viewRouter);
app.get("/hbs", (req, res, next) => routeHome(req, res, next));
app.get("/about", (req, res, next) => routeAbout(req, res, next));
app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/email', emailRouter);
app.use("/mail", indexRouter);
app.use('/api/v1/users', userRouter);
app.use('/auth', authRouter);
app.use('/api/v1/reviews', reviewRouter);
app.use('/api/v1/bookings', bookingRouter);
// app.use('/api/', APIRouter);


if (process.env.NODE_ENV === "developement") {
  // Express will serve up production assets and files like main.js & main.css
  app.use(express.static("client/build"));

  // Express will serve up index.de if route isn't recognized
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}


// app.all('*', (req, res, next) => {
//   next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
// });

app.use(globalErrorHandler);

module.exports = app;
