const express = require("express");
const router = express.Router();
const quotes = require("../services/quotes");

/* GET quotes listing */
router.get("/", async (req, res, next) => {
  try {
    res.json(await quotes.getMultiple(req.query.page));
  } catch (error) {
    console.error(`Error while getting quotes: ${error.message}`);
    next(error);
  }

  // res.json({
  //   data: [
  //     {
  //       quote: "First, solve the problem. Then, write the code.",
  //       author: "John Johnson",
  //     },
  //   ],
  //   meta: {
  //     page: 1,
  //   },
  // });
});

module.exports = router;
