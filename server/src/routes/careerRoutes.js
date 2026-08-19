const express = require("express");

const {
    getCareerInsightsController
} = require("../controllers/careerController");

const router = express.Router();

router.get(
    "/insights/:personName",
    getCareerInsightsController
);

module.exports = router;