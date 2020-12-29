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
const Mailer = require("../utils/email");


router.post("/", async (req, res) => {
  console.log("received data in /api/v1/email is : ", req.body.data);
  const pureHTML = req.body.data;
  const richText = req.body.data;
  const stringifyHTML = richText.toString();
  const backtickHTML = `${richText}`;
  const backStringHTML = `${stringifyHTML}`;

 
  function createHTMLElement(str) {
    var div = document.createElement("div");
    div.innerHTML = str;
    const stringed = div.toString();
    return div.childNodes;
  }
  function createHTMLElement2(str) {
    var div = document.createElement("div");
    div.innerHTML = str;
    const stringed = div.toString();
    return div;
  }
  function createHTMLElement3(str) {
    var div = document.createElement("div");
    div.innerHTML = str;
    const stringed = div.toString();
    return stringed;
  }

  try {
    const renderedTemplateHTML = await email
      .render(
        "mars/email",
        {
          name: "Elon",
          jsdomHTML: req.body.data,
          jsdomHTML2: req.body.data.toString(),
          jsdomHTML3: createHTMLElement3(req.body.data),
          pureHTML,
          richText,
          stringifyHTML,
          backtickHTML,
          backStringHTML,
        },
        {noEscape: true}      )
      .then(console.log("hello again"))
      .catch(console.error);
      
      const newUser = {email: 'akhavan.khashayar@gmail.com', name: 'aftoflBig5', }
      await new Mailer(newUser, pureHTML, renderedTemplateHTML).sendWelcome();
  } catch (e) {
    console.log(e);
  }
  
  
  
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
