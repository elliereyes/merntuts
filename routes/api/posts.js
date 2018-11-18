const express = require("express");
const router = express.Router();

//route to post
router.get("/test", (req, res) => res.json({ msg: "Posts works" }));

module.exports = router;
