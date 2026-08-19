
const { driver } = require("../config/database");

async function getAllSkills() {
    const session = driver.session();

    try {
        const result = await session.run(`
            MATCH (s:Skill)
            RETURN s.name AS name,
                   s.category AS category
            ORDER BY s.name
        `);

        return result.records.map((record) => ({
            name: record.get("name"),
            category: record.get("category")
        }));
    } finally {
        await session.close();
    }
}

async function getRelatedSkills(skillName) {
    const session = driver.session();

    try {
        const result = await session.run(
            `
            MATCH (s:Skill {name: $skillName})
                  -[:RELATED_TO]->
                  (related:Skill)
            RETURN related.name AS name,
                   related.category AS category
            ORDER BY related.name
            `,
            {
                skillName
            }
        );

        return result.records.map((record) => ({
            name: record.get("name"),
            category: record.get("category")
        }));
    } finally {
        await session.close();
    }
}

module.exports = {
    getAllSkills,
    getRelatedSkills
};

