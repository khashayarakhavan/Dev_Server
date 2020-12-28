let nodemailer = require('nodemailer');
require('dotenv').config();
const keys = require('../config/keys');
const mailGun = require("nodemailer-mailgun-transport");
let environment = process.env;

const authProd = {
  auth: {
    api_key: keys.sendMailGunKey,
    domain: keys.sendMailGunDomain,
  },
};

const authDev = {
  auth: {
    api_key: keys.sendMailGunKey,
    domain: keys.sendMailGunDomain,
  },
};


module.exports.mailGunTransport = nodemailer.createTransport(mailGun(authProd));

module.exports.GmailTransport = nodemailer.createTransport({
    service: environment.GMAIL_SERVICE_NAME,
    host: environment.GMAIL_SERVICE_HOST,
    secure:environment.GMAIL_SERVICE_SECURE,
    port: environment.GMAIL_SERVICE_PORT,
    auth: {
        user: environment.GMAIL_USER_NAME,
        pass: environment.GMAIL_USER_PASSWORD
    }
});

module.exports.SMTPTransport = nodemailer.createTransport({
    host: environment.SMTP_SERVICE_HOST,
    port: environment.SMTP_SERVICE_PORT,
    secure: environment.SMTP_SERVICE_SECURE, // upgrade later with STARTTLS
    debug: true,
    auth: {
        user: environment.SMTP_USER_NAME,
        pass: environment.SMTP_USER_PASSWORD
    }
});

module.exports.ViewOption = (transport, hbs) => {
    transport.use('compile', hbs({
      viewEngine: "express-handlebars",
            viewPath: 'views/email',
            extName: '.hbs'
    }));
}
