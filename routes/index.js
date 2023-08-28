const router = require("express").Router();
const apiRouter = require("./router.api");
const uiRouter = require("./router.ui.js");


router.use("/api/v1", apiRouter);
router.use("/", uiRouter);

module.exports = router;
