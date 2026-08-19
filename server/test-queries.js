
const {
    getAllSkills,
    getRelatedSkills
} = require("./src/queries/skillQueries");

const {
    getMatchingRoles,
    getMissingSkills,
    getRecommendedSkills
} = require("./src/queries/careerQueries");

async function testQueries() {
    try {
        console.log("\n========== ALL SKILLS ==========");

        const skills = await getAllSkills();
        console.log(skills);

        console.log("\n========== RELATED TO JAVA ==========");

        const relatedJava = await getRelatedSkills("Java");
        console.log(relatedJava);

        console.log("\n========== LALITHA'S MATCHING ROLES ==========");

        const roles = await getMatchingRoles("Lalitha");
        console.log(roles);

        console.log("\n========== MISSING SKILLS ==========");

        const missing = await getMissingSkills(
            "Lalitha",
            "Backend Developer"
        );

        console.log(missing);

        console.log("\n========== RECOMMENDED SKILLS ==========");

        const recommended = await getRecommendedSkills("Lalitha");
        console.log(recommended);

    } catch (error) {
        console.error("Query test failed:", error);
    }
}

testQueries();

