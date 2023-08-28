const router = require("express").Router();
const mailService = require("../../services/mailer");
router.post("/", async(req, res, next) => {
  try {
    const { email,img } = req.body;

    const payload = {
      from:"asimneupane11@gmail.com",
      to:email,
      html: 'Embedded image: <img src="cid:unique@nodemailer.com"/>',
      attachments: [{
          filename: 'image.png',
          path: img,
          cid: 'unique@nodemailer.com'
      },],


    };

    const mailResponse = await mailService.sendEmail(payload);
    if(mailResponse){  res.json({ data: "email send succesfully" });}
 
  } catch (e) {
    console.log(e)
    next(e);
  }
});

module.exports = router;
