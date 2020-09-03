const express = require("express");
const router = express.Router();

const Contact = require("../models/contact");
router.post("/contact", (req, res) => {
  const { name, email, phone, message } = req.body.request;
  const newContact = new Contact({
    name,
    email,
    phone,
    message,
  });
  newContact.save();
  res.send("Data submitted Successfully");
});
module.exports = router;
