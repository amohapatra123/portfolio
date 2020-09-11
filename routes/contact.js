const express = require("express");
const router = express.Router();
var nodemailer = require("nodemailer");

router.post("/contact", (req, res) => {
  const { name, email, phone, message } = req.body.request;

  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "amohapatra2001@gmail.com",
      pass: "Anshuman@2001",
    },
  });
  var mailOptions = {
    from: `${email}`,
    to: "amohapatra2001@gmail.com",
    subject: "Message from portfolio website",
    html: `<h1>${name}</h1><br>
  Phone:${phone}<br>
  Message:${message}
  `,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
      res.send("Message sent successfully!!!");
    }
  });
});
module.exports = router;
