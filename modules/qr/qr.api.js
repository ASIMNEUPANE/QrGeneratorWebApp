const router = require("express").Router();
const qrController = require("./qr.controller");

router.get("/", (req, res) => {
  res.send("qr api is working");
});

router.post("/", async (req, res, next) => {
  try {
    const { url } = req.body;
    if (!url) throw new Error("url must be enter");
    const qr = await qrController.creatQR(url);
    res.json({ data: qr });
  } catch (e) {
    next(e);
  }
});

module.exports = router;
