const express = require('express');
const router = express.Router();
const path = require('path');

// var EmailTemplate = require("email-templates").EmailTemplate;

var MailConfig = require("../config/email");
var hbs = require("nodemailer-express-handlebars");
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



// email
//   .render(
  //   {
  //     path: "mars/email",
  //     juiceResources: {
  //       preserveImportant: true,
  //       webResources: {
  //         // view folder path, it will get css from `mars/style.css`
  //         relativeTo: path.resolve("mars"),
  //       },
  //     },
  //   },
  //   {
  //     name: "Elon",
  //   }
  // )
//   .then(console.log)
//   .catch(console.error);


// template.render(locals, function (err, results) {
//   if (err) {
//     return console.error(err);
//   }

//   mailGunTransport.sendMail(
//     {
//       from: locals.email,
//       to: "FILL_IN",
//       subject: "Contact Request",
//       html: results.html,
//       text: results.text,
//     },
//     function (err, responseStatus) {
//       if (err) {
//         console.error(err);
//         res.end("error");
//       } else {
//         console.log(responseStatus.message);
//         res.end("sent");
//       }
//     }
//   );
// });

  // let HelperOptions = {
  //   from: '"aftoflBig5" <aftoflBig5@yandex.com>',
  //   to: "akhavan.khashayar@gmail.com",
  //   subject: "Hellow shaja!",
  //   template: "test",
  //   context: {
  //     name: "aftoflbig5",
  //     email: "aftoflBig5@yandex.com",
  //     address: "#8, shaja aafa",
  //   },
  // };
  // mailGunTransport.sendMail(HelperOptions, (error, info) => {
  //   if (error) {
  //     console.log(error);
  //     res.json(error);
  //   }
  //   console.log("email is send via HBS!!!");
  //   console.log(info);
  //   res.json(info);
  // });
});

// router.get("/email/smtp/template", (req, res, next) => {
//   MailConfig.ViewOption(smtpTransport, hbs);
//   let HelperOptions = {
//     from: '"Tariqul islam" <tariqul@falconfitbd.com>',
//     to: "tariqul.islam.rony@gmail.com",
//     subject: "Hellow world!",
//     template: "test",
//     context: {
//       name: "tariqul_islam",
//       email: "tariqul.islam.rony@gmail.com",
//       address: "52, Kadamtola Shubag dhaka",
//     },
//   };
//   smtpTransport.verify((error, success) => {
//     if (error) {
//       res.json({ output: "error", message: error });
//       res.end();
//     } else {
//       smtpTransport.sendMail(HelperOptions, (error, info) => {
//         if (error) {
//           res.json({ output: "error", message: error });
//         }
//         res.json({ output: "success", message: info });
//         res.end();
//       });
//     }
//   });
// });

// const Email = require("./../utils/email");
const Emailer = require("../utils/email");


router.post("/", async (req, res) => {
  // req.logout();
  // res.redirect("/");
  // console.log('@@ServerSide ! Received rich text from request is :');
  // console.log('body is : ', req.body);
  // console.log('posted_data is : ', req.body.posted_data);
  // console.log('my_text is : ', req.body.my_text);
  try {
    const dalam = await email
      .render("mars/email", {
        name: "Elon",
      })
      .then(console.log("hello again"))
      .catch(console.error);
      console.log("new is : ", dalam);
      const newUser = {email: 'akhavan.khashayar@gmail.com', name: 'aftoflBig5', }
      await new Emailer(newUser, "url", dalam).sendWelcome();
  } catch (e) {
    console.log(e);
  }
  console.log('received data in /api/v1/email is : ', req.body.data);
  
  
  res.send('WOW! Received it.');
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
