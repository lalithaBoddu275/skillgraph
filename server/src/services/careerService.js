const {
    getMatchingRoles,
    getRecommendedSkills,
    getCareerPath
} = require("../queries/careerQueries");

async function getCareerInsights(personName) {
    // 1. Find matching job roles
    const matchingRoles = await getMatchingRoles(personName);

    // 2. Find recommended skills
    const recommendedSkills = await getRecommendedSkills(personName);

    // 3. Select best matching role
    let targetRole = null;
    let careerPath = [];

    if (matchingRoles.length > 0) {
        targetRole = matchingRoles[0].role;

        careerPath = await getCareerPath(
            personName,
            targetRole
        );
    }

    return {
        person: personName,

        targetRole,

        matchingRoles,

        recommendedSkills,

        careerPath,

        summary: {
            totalMatchingRoles: matchingRoles.length,
            totalRecommendedSkills: recommendedSkills.length,
            careerPathsFound: careerPath.length
        }
    };
}

module.exports = {
    getCareerInsights
};