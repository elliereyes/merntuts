const express = require("express");
const router = express.Router();

//route to test
router.get("/test", (req, res) => res.json({ msg: "Profile works" }));

module.exports = router;
