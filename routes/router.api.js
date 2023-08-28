const router = require("express").Router();
const mailRouter = require("../modules/mail/mail.api");
const qrRouter = require("../modules/qr/qr.api");

router.use("/qr", qrRouter);
router.use("/mail", mailRouter);

router.get('/',(req,res)=>{
    res.send("hellos")
})


module.exports = router;
