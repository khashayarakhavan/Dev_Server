const express = require('express');
const router = express.Router();
const path = require('path');
 const jsdom = require("jsdom");
 const { JSDOM } = jsdom;
 const { document } = new JSDOM(`...`).window;
// var EmailTemplate = require("email-templates").EmailTemplate;

var MailConfig = require("../config/email");
// var hbs = require("nodemailer-express-handlebars");
var mailGunTransport = MailConfig.mailGunTransport;

const Email = require("email-templates");

const email = new Email({
  transport: {
    jsonTransport: true,
  },
  views: {
    options: {
      extension: "handlebars", // <---- HERE
    },
  },
});


// var gmailTransport = MailConfig.GmailTransport;
// var smtpTransport = MailConfig.SMTPTransport;

const tourController = require('../controllers/tourController');
const authController = require('../controllers/authController');
const reviewRouter = require('./reviewRoutes');
// const { Hello } = require("./emailTemplates/helloTemplate");

// var templatesDir = path.resolve(__dirname, "..", "views");

router.get("/hbs", async (req, res, next) => {
  // MailConfig.ViewOption(mailGunTransport, hbs);
// var template = new EmailTemplate(path.join(templatesDir, "tmp"));
var locals = {
  email: 'aftoflbig5@yandex.com',
  name: 'aftoflBig5',
  message: 'dalam kalti',
};

try {
const dalam = await email
  .render("mars/email", {
    name: "Elon",
  })
  .then(console.log("hello again"))
  .catch(console.error);
 console.log("new is : ", dalam);
} catch (e) {
  console.log(e);
}

});


const Mailer = require("../utils/email");


router.post("/", async (req, res) => {
  console.log("received data in /api/v1/email is : ", req.body.data);
  // const pureHTML = req.body.data.pureHTML ? req.body.data.pureHTML : "<p></p>";
  const pureHTML = req.body.data.pureHTML;
  

  // const customerCountry = req.body.data.customerCountry ? req.body.data.customerCountry : "Earth";
  const customerCountry = req.body.data.customerCountry;
  if (!pureHTML || !customerCountry) {
    res.status(444).send({
      status: "444",
      message: "Input data is not in required format. please check the values.",
      data: {
        data: req.body.data
      }
    })
  } else {
    try {
      const newUser = {
        email: "akhavan.khashayar@gmail.com",
        name: "aftoflBig5",
      };
      await new Mailer(newUser, pureHTML, customerCountry).sendWelcome(res);
    } catch (e) {
      console.log("Mailer util did not respond correctly", e);
    }

  }

  
  
  
  // res.status(200).send("WOW! Received it.");
});


// router.param('id', tourController.checkID);

// POST /tour/234fad4/reviews
// GET /tour/234fad4/reviews

router.use('/:tourId/reviews', reviewRouter);

router
  .route('/top-5-cheap')
  .get(tourController.aliasTopTours, tourController.getAllTours);


router.route('/tour-stats').get(tourController.getTourStats);
router
  .route('/monthly-plan/:year')
  .get(
    authController.protect,
    authController.restrictTo('admin', 'lead-guide', 'guide'),
    tourController.getMonthlyPlan
  );

router
  .route('/tours-within/:distance/center/:latlng/unit/:unit')
  .get(tourController.getToursWithin);
// /tours-within?distance=233&center=-40,45&unit=mi
// /tours-within/233/center/-40,45/unit/mi

router.route('/distances/:latlng/unit/:unit').get(tourController.getDistances);

router
  .route('/')
  .get(tourController.getAllTours)
  .post(
    authController.protect,
    authController.restrictTo('admin', 'lead-guide'),
    tourController.createTour
  );

router
  .route('/:id')
  .get(tourController.getTour)
  .patch(
    authController.protect,
    authController.restrictTo('admin', 'lead-guide'),
    tourController.uploadTourImages, // upload multiple images
    tourController.resizeTourImages, // resize multiple images
    tourController.updateTour
  )
  .delete(
    authController.protect,
    authController.restrictTo('admin', 'lead-guide'),
    tourController.deleteTour
  );

module.exports = router;
