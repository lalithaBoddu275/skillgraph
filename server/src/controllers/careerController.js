const {
    getCareerInsights
} = require("../services/careerService");

async function getCareerInsightsController(req, res) {
    try {
        const { personName } = req.params;

        if (!personName) {
            return res.status(400).json({
                success: false,
                message: "Person name is required"
            });
        }

        const data = await getCareerInsights(personName);

        res.json({
            success: true,
            data
        });

    } catch (error) {
        console.error("Career insights error:", error);

        res.status(500).json({
            success: false,
            message: "Failed to generate career insights",
            error: error.message
        });
    }
}

module.exports = {
    getCareerInsightsController
};