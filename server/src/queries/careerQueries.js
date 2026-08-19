
const { driver } = require("../config/database");


// ============================================================
// 1. MATCHING JOB ROLES
// ============================================================

async function getMatchingRoles(personName) {
    const session = driver.session();

    try {
        const result = await session.run(
            `
            MATCH (p:Person {name: $personName})
                  -[:HAS_SKILL]->
                  (skill:Skill)

            MATCH (role:JobRole)
                  -[:REQUIRES]->
                  (skill)

            RETURN role.name AS role,
                   count(DISTINCT skill) AS matchingSkills

            ORDER BY matchingSkills DESC, role
            `,
            {
                personName
            }
        );

        return result.records.map((record) => ({
            role: record.get("role"),
            matchingSkills: record.get("matchingSkills").toNumber()
        }));

    } finally {
        await session.close();
    }
}
// ============================================================
// 2. MISSING SKILLS ACROSS CAREER OPTIONS
// ============================================================

async function getMissingSkills(personName) {
    const session = driver.session();

    try {
        const result = await session.run(
            `
            MATCH (p:Person {name: $personName})
                  -[:HAS_SKILL]->
                  (owned:Skill)

            MATCH (role:JobRole)
                  -[:REQUIRES]->
                  (required:Skill)

            WHERE NOT EXISTS {
                MATCH (p)-[:HAS_SKILL]->(required)
            }

            RETURN
                required.name AS missingSkill,
                required.category AS category,
                count(DISTINCT role) AS careerOptions

            ORDER BY careerOptions DESC, missingSkill
            `,
            {
                personName
            }
        );

        return result.records.map((record) => ({
            missingSkill: record.get("missingSkill"),
            category: record.get("category"),
            careerOptions: record.get("careerOptions").toNumber()
        }));

    } finally {
        await session.close();
    }
}
// ============================================================
// 3. MULTI-HOP CAREER PATH
// ============================================================

async function getCareerPath(personName, roleName) {
    const session = driver.session();

    try {
        const result = await session.run(
            `
            MATCH path =
                (p:Person {name: $personName})
                -[:HAS_SKILL]->
                (skill:Skill)
                -[:RELATED_TO*1..3]->
                (target:Skill)
                <-[:REQUIRES]-
                (role:JobRole {name: $roleName})

            RETURN path
            LIMIT 10
            `,
            {
                personName,
                roleName
            }
        );

        return result.records.map((record) => {
            const path = record.get("path");

            return path.segments.map((segment) => ({
                start: segment.start.properties,
                relationship: segment.relationship.type,
                end: segment.end.properties
            }));
        });

    } finally {
        await session.close();
    }
}


// ============================================================
// 4. RECOMMENDED SKILLS
// ============================================================

async function getRecommendedSkills(personName) {
    const session = driver.session();

    try {
        const result = await session.run(
            `
            MATCH (p:Person {name: $personName})
                  -[:HAS_SKILL]->
                  (owned:Skill)

            MATCH (role:JobRole)
                  -[:REQUIRES]->
                  (required:Skill)

            WHERE NOT EXISTS {
                MATCH (p)-[:HAS_SKILL]->(required)
            }

            RETURN
                required.name AS skill,
                required.category AS category,
                count(DISTINCT role) AS careerOptions,
                collect(DISTINCT role.name) AS usefulFor

            ORDER BY careerOptions DESC, skill
            LIMIT 10
            `,
            {
                personName
            }
        );

        return result.records.map((record) => ({
            skill: record.get("skill"),
            category: record.get("category"),
            careerOptions: record.get("careerOptions").toNumber(),
            usefulFor: record.get("usefulFor")
        }));

    } finally {
        await session.close();
    }
}



module.exports = {
    getMatchingRoles,
    getMissingSkills,
    getCareerPath,
    getRecommendedSkills
};

