/* eslint-disable */
const nodemailer = require('nodemailer');
const pug = require('pug');
const htmlToText = require('html-to-text');
const mailGun = require('nodemailer-mailgun-transport');
const keys = require('../config/keys');
const {AMP} = require("../services/emailTemplates/AMP");
const {AMP2} = require("../services/emailTemplates/AMP2");
// const hbs = require('nodemailer-express-handlebars');
const path = require('path');
const hbs = require("hbs");
var ent = require("ent");
var encode = require("ent/encode");
var decode = require("ent/decode");

// const Handlebars = require("handlebars");
// import React from "react";
// import createDOMPurify from "dompurify";
// import { JSDOM } from "jsdom";

// const window = new JSDOM("").window;
// const DOMPurify = createDOMPurify(window);

// const rawHTML = `
// <div class="dropdown">
//   <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-expanded="true">
//     Dropdown
//     <span class="caret"></span>
//   </button>
//   <ul class="dropdown-menu" role="menu" aria-labelledby="dropdownMenu1">
//     <li role="presentation"><a role="menuitem" tabindex="-1" href="#">Action</a></li>
//     <li role="presentation"><a role="menuitem" tabindex="-1" href="#">Another action</a></li>
//     <li role="presentation"><a role="menuitem" tabindex="-1" href="#">Something else here</a></li>
//     <li role="presentation"><a role="menuitem" tabindex="-1" href="#">Separated link</a></li>
//   </ul>
// </div>
// `;


const authProd = {
  auth: {
    api_key: keys.sendMailGunKey,
    domain: keys.sendMailGunDomain
  }
};

const authDev = {
  auth: {
    api_key: keys.sendMailGunKey,
    domain: keys.sendMailGunDomain
  }
};
// function htmlEntities(str) {

//     return String(str)
//       .replace(/&/g, "&amp;")
//       .replace(/</g, "&lt;")
//       .replace(/>/g, "&gt;")
//       .replace(/"/g, "&quot;");
//   }

module.exports = class Email {
  constructor(user, pureHTML, customerCountry) {

    this.to = user.email;
    this.customerCountry = customerCountry;
    // this.rawHTML = renderedTemplateHTML;
    this.firstName = user.name.split(" ")[0];

    // this.url = url;
    (this.pureHTML = pureHTML),
      (this.from = `AftoflBig5 <${process.env.EMAIL_FROM}>`);
  }

  // :DEV change dev => prod

  newTransport() {
    // Define the SMTP transporter -->
    // MailGun
    if (process.env.NODE_ENV === "production") {
      console.log("📧 Email is in production");
      return nodemailer.createTransport(mailGun(authProd));
    } else if (process.env.NODE_ENV === "development") {
      console.log("📧 Email is in development");
      return nodemailer.createTransport(mailGun(authDev));
    } else {
      console.log(
        "📧 Email is using the personal transporter such as Gmail,Hotmail,etc."
      );
      return nodemailer.createTransport({
        host: keys.mailTrapHost,
        port: keys.mailTrapPort,
        auth: {
          user: keys.mailTrapUsername,
          pass: keys.mailTrapPassword,
        },
      });
    }
  }

  // Send the actual email
  async send(template, subject) {
    const richText = this.pureHTML;
    const customerCountry = this.customerCountry;
    const stringifyHTML = richText.toString();
    const backtickHTML = `${richText}`;
    const backStringHTML = `${stringifyHTML}`;

    const decodedHTML = ent.decode(richText);
    console.log("decodedHTML is : ", decodedHTML);

    //USING PUG TEMPLATE ENGINE -->
    const pugContext = {
      firstName: this.firstName,
      url: this.url,
      subject,
      pureHTML: decodedHTML,
      richText,
      stringifyHTML,
      backtickHTML,
      backStringHTML,
    };
    const pugViewPath = `${__dirname}/../views/email/${template}.pug`;
    const pugTemplateHTML = pug.renderFile(pugViewPath, pugContext);
    // <-- End of PUG template

    //USING Handlebars.js TEMPLATE ENGINE -->
    let element = "<div><p>dalam</p></div>";
    const templateHBS = hbs.compile(AMP(element, decodedHTML));

    var hbsContext = {
      title: "Handlebars",
      richText: "<strong>ridiBaba</strong>",
      richText2: decodedHTML,
    };
    const hbsTemplateHTML = templateHBS(hbsContext);
    // <-- End of Handlebars template

    //Pure Javascript HTML string -->
    const ampTemplateHTML = AMP2(decodedHTML, customerCountry);
    // <-- End of JS template

    // 3) Define email options
    const mailOptions = {
      from: this.from,
      to: this.to,
      subject,
      // html: pugTemplateHTML,
      // html: hbsTemplateHTML,
      html: ampTemplateHTML,
      text: htmlToText.fromString(ampTemplateHTML),
    };

    // <-- SMTP Transporter

    //4) HERE we exactly send it via email provider.
    // await this.newTransport().sendMail(mailOptions, function (err, data) {

    //SEND MAIL HERE!
    await this.newTransport().sendMail(mailOptions, function (err, response) {
      // CallBack function for sending email
      if (err) {
        console.log("the error is : ", err); // Log if there is any error
      } else {
        console.log(
          "Email sent with Nodemailer via MailTrap Service",
          response
        ); // log the response from mail service to show the result of sent emails.
      }
    });
  }

  renderContentAsHTML = () => {
    let currentContentAsHTML = convertToHTML(
      editorLocalState.getCurrentContent()
    );
    //  const blocks = convertToRaw(editorLocalState.getCurrentContent()).blocks;
    //  const currentText = blocks
    //    .map((block) => (!block.text.trim() && "\n") || block.text)
    //    .join("\n");

    return currentContentAsHTML;
  };

  async sendWelcome() {
    // const my = this.raw.blocks[0].inlineStyleRanges;
    // console.log('my',my);
    // const result = this.raw.blocks.map((block) => (!block.text.trim() && "\n") || block.text)
    //    .join("\n");

    //  console.log('result is : ', result);

    await this.send("welcome", "Welcome to the Natours Family!");
    console.log("EMAIL SENT :D ");
  }

  async sendPasswordReset() {
    await this.send(
      "passwordReset",
      "Your password reset token (valid for only 10 minutes)"
    );
  }
};
