const express = require('express');
//const multer = require('multer');
const router  = express.Router();
const uploadCloud = require("../config/cloudinary.js");

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

// const uploadHandler = multer({ dest: './public/uploads/' });
// router.post('/upload', uploadHandler.single('photo'), (req, res, next) => {
//   console.log("ASDFASD")
//   console.log(req.body);
//   console.log(req.file);
//   res.redirect('/')
// });

//endpoint
router.post("/uploadCloud", uploadCloud.single("photo"), (req, res, next) => {
  console.log("ASDFASD");
  console.log(req.body);
  console.log(req.file);
  res.json(req.file)
});

module.exports = router;
