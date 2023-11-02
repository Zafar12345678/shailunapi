const express = require("express");
const postRoute = express.Router(); // Corrected variable name: 'post_route' to 'postRoute'
const bodyParser = require("body-parser"); // Corrected variable name: 'bodyparser' to 'bodyParser'
const multer = require("multer");
const path = require("path");
const postControllers = require("../controller/basicController"); // Corrected variable name: 'post_controllers' to 'postControllers'

postRoute.use(bodyParser.json());
postRoute.use(bodyParser.urlencoded({ extended: true }));

postRoute.use(express.static("public"));

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../public/postImages"));
  },
  filename: function (req, file, cb) {
    const name = Date.now() + "-" + file.originalname;
    cb(null, name);
  },
});

const upload = multer({ storage: storage });

postRoute.post("/post-route", upload.single("image"), postControllers.postCreate); // Corrected function name: 'post_creat' to 'postCreate'
postRoute.get("/gate-route", postControllers.getGatedata);

module.exports = postRoute; // Export the router instance with corrected variable name: 'post_route' to 'postRoute'
