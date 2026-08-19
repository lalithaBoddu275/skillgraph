
const { driver } = require("../src/config/database");

const people = [
    {
        name: "Lalitha",
        email: "lalitha@example.com"
    },
    {
        name: "Arjun",
        email: "arjun@example.com"
    },
    {
        name: "Priya",
        email: "priya@example.com"
    },
    {
        name: "Rahul",
        email: "rahul@example.com"
    },
    {
        name: "Sneha",
        email: "sneha@example.com"
    }
];

const skills = [
    { name: "Java", category: "Programming Language" },
    { name: "Python", category: "Programming Language" },
    { name: "JavaScript", category: "Programming Language" },
    { name: "TypeScript", category: "Programming Language" },
    { name: "C++", category: "Programming Language" },

    { name: "React", category: "Frontend" },
    { name: "Node.js", category: "Backend" },
    { name: "Express.js", category: "Backend" },

    { name: "SQL", category: "Database" },
    { name: "MongoDB", category: "Database" },

    { name: "Spring Boot", category: "Backend" },
    { name: "REST APIs", category: "Backend" },

    { name: "Docker", category: "DevOps" },
    { name: "AWS", category: "Cloud" },
    { name: "Git", category: "Tools" }
];

const technologies = [
    { name: "MERN Stack", category: "Full Stack" },
    { name: "Java Backend", category: "Backend" },
    { name: "Spring Ecosystem", category: "Backend" },
    { name: "Cloud Computing", category: "Cloud" },
    { name: "Containerization", category: "DevOps" },
    { name: "Web Development", category: "Web" },
    { name: "Data Engineering", category: "Data" },
    { name: "Machine Learning", category: "AI" },
    { name: "AWS Cloud", category: "Cloud" },
    { name: "Database Systems", category: "Database" }
];

const domains = [
    "Software Development",
    "Web Development",
    "Cloud Computing",
    "Data Science",
    "Artificial Intelligence"
];

const jobRoles = [
    {
        name: "Backend Developer",
        level: "Entry",
        description: "Builds APIs and server-side applications."
    },
    {
        name: "Frontend Developer",
        level: "Entry",
        description: "Builds modern web interfaces."
    },
    {
        name: "Full Stack Developer",
        level: "Entry",
        description: "Works across frontend and backend systems."
    },
    {
        name: "Software Engineer",
        level: "Entry",
        description: "Designs and develops software applications."
    },
    {
        name: "DevOps Engineer",
        level: "Entry",
        description: "Automates deployment and infrastructure."
    },
    {
        name: "Cloud Engineer",
        level: "Entry",
        description: "Designs and manages cloud infrastructure."
    },
    {
        name: "Data Engineer",
        level: "Entry",
        description: "Builds data pipelines and data systems."
    },
    {
        name: "ML Engineer",
        level: "Entry",
        description: "Builds and deploys machine learning systems."
    }
];

const companies = [
    {
        name: "TechNova",
        industry: "Software"
    },
    {
        name: "CloudSphere",
        industry: "Cloud Computing"
    },
    {
        name: "DataWorks",
        industry: "Data"
    },
    {
        name: "WebCraft",
        industry: "Web Development"
    },
    {
        name: "AI Labs",
        industry: "Artificial Intelligence"
    },
    {
        name: "DevCore",
        industry: "Software"
    }
];

const projects = [
    {
        name: "E-Commerce Platform",
        description: "A full-stack online shopping platform."
    },
    {
        name: "Job Portal",
        description: "A platform connecting candidates with employers."
    },
    {
        name: "Cloud Monitoring System",
        description: "A system for monitoring cloud infrastructure."
    },
    {
        name: "Recommendation Engine",
        description: "A machine learning recommendation system."
    },
    {
        name: "Data Pipeline",
        description: "An automated data processing pipeline."
    },
    {
        name: "Task Management API",
        description: "A REST API for managing tasks."
    }
];

const personSkills = [
    {
        person: "Lalitha",
        skills: [
            "Java",
            "JavaScript",
            "React",
            "Node.js",
            "Express.js",
            "SQL",
            "MongoDB",
            "Git"
        ]
    },
    {
        person: "Arjun",
        skills: [
            "Python",
            "SQL",
            "Docker",
            "AWS",
            "Git"
        ]
    },
    {
        person: "Priya",
        skills: [
            "JavaScript",
            "React",
            "TypeScript",
            "Git"
        ]
    },
    {
        person: "Rahul",
        skills: [
            "Java",
            "Spring Boot",
            "REST APIs",
            "SQL",
            "Docker",
            "Git"
        ]
    },
    {
        person: "Sneha",
        skills: [
            "Python",
            "SQL",
            "AWS",
            "Docker",
            "Git"
        ]
    }
];

const skillRelationships = [
    ["Java", "Spring Boot"],
    ["Java", "REST APIs"],

    ["JavaScript", "React"],
    ["JavaScript", "TypeScript"],
    ["JavaScript", "Node.js"],

    ["Node.js", "Express.js"],

    ["React", "TypeScript"],

    ["SQL", "Python"],
    ["SQL", "MongoDB"],

    ["Docker", "AWS"],
    ["Python", "Docker"],
    ["Git", "Docker"],

    ["Spring Boot", "REST APIs"]
];



const technologySkills = [
    ["MERN Stack", "JavaScript"],
    ["MERN Stack", "React"],
    ["MERN Stack", "Node.js"],
    ["MERN Stack", "Express.js"],
    ["MERN Stack", "MongoDB"],

    ["Java Backend", "Java"],
    ["Java Backend", "REST APIs"],

    ["Spring Ecosystem", "Java"],
    ["Spring Ecosystem", "Spring Boot"],
    ["Spring Ecosystem", "REST APIs"],

    ["Cloud Computing", "AWS"],
    ["Cloud Computing", "Docker"],

    ["Containerization", "Docker"],

    ["Web Development", "JavaScript"],
    ["Web Development", "React"],
    ["Web Development", "Node.js"],

    ["Data Engineering", "Python"],
    ["Data Engineering", "SQL"],
    ["Data Engineering", "Docker"],

    ["Machine Learning", "Python"],

    ["AWS Cloud", "AWS"],
    ["AWS Cloud", "Docker"],

    ["Database Systems", "SQL"],
    ["Database Systems", "MongoDB"]
];

const projectTechnologies = [
    ["E-Commerce Platform", "MERN Stack"],
    ["E-Commerce Platform", "Web Development"],

    ["Job Portal", "MERN Stack"],
    ["Job Portal", "Web Development"],

    ["Cloud Monitoring System", "Cloud Computing"],
    ["Cloud Monitoring System", "AWS Cloud"],
    ["Cloud Monitoring System", "Containerization"],

    ["Recommendation Engine", "Machine Learning"],
    ["Recommendation Engine", "Data Engineering"],

    ["Data Pipeline", "Data Engineering"],
    ["Data Pipeline", "Cloud Computing"],

    ["Task Management API", "Java Backend"],
    ["Task Management API", "Spring Ecosystem"]
];

const projectSkills = [
    ["E-Commerce Platform", "JavaScript"],
    ["E-Commerce Platform", "React"],
    ["E-Commerce Platform", "Node.js"],

    ["Job Portal", "React"],
    ["Job Portal", "Node.js"],
    ["Job Portal", "MongoDB"],

    ["Cloud Monitoring System", "Docker"],
    ["Cloud Monitoring System", "AWS"],

    ["Recommendation Engine", "Python"],

    ["Data Pipeline", "Python"],
    ["Data Pipeline", "SQL"],

    ["Task Management API", "Java"],
    ["Task Management API", "Spring Boot"],
    ["Task Management API", "REST APIs"]
];

const roleSkills = {
    "Backend Developer": [
        "Java",
        "Node.js",
        "Express.js",
        "REST APIs",
        "SQL"
    ],

    "Frontend Developer": [
        "JavaScript",
        "React",
        "TypeScript",
        "Git"
    ],

    "Full Stack Developer": [
        "JavaScript",
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "SQL"
    ],

    "Software Engineer": [
        "Java",
        "Python",
        "SQL",
        "Git"
    ],

    "DevOps Engineer": [
        "Docker",
        "AWS",
        "Git"
    ],

    "Cloud Engineer": [
        "AWS",
        "Docker",
        "Python"
    ],

    "Data Engineer": [
        "Python",
        "SQL",
        "Docker",
        "AWS"
    ],

    "ML Engineer": [
        "Python",
        "SQL",
        "Docker"
    ]
};

const roleDomains = {
    "Backend Developer": "Software Development",
    "Frontend Developer": "Web Development",
    "Full Stack Developer": "Web Development",
    "Software Engineer": "Software Development",
    "DevOps Engineer": "Cloud Computing",
    "Cloud Engineer": "Cloud Computing",
    "Data Engineer": "Data Science",
    "ML Engineer": "Artificial Intelligence"
};

const companyRoles = [
    ["TechNova", "Backend Developer"],
    ["TechNova", "Software Engineer"],
    ["CloudSphere", "Cloud Engineer"],
    ["CloudSphere", "DevOps Engineer"],
    ["DataWorks", "Data Engineer"],
    ["DataWorks", "ML Engineer"],
    ["WebCraft", "Frontend Developer"],
    ["WebCraft", "Full Stack Developer"],
    ["AI Labs", "ML Engineer"],
    ["DevCore", "Backend Developer"],
    ["DevCore", "Full Stack Developer"]
];

async function seed() {
    const session = driver.session();

    try {
        console.log("Clearing existing SkillGraph data...");

        await session.run(`
            MATCH (n)
            DETACH DELETE n
        `);

        console.log("Creating people...");

        await session.run(
            `
            UNWIND $people AS person
            CREATE (:Person {
                name: person.name,
                email: person.email
            })
            `,
            { people }
        );

        console.log("Creating skills...");

        await session.run(
            `
            UNWIND $skills AS skill
            CREATE (:Skill {
                name: skill.name,
                category: skill.category
            })
            `,
            { skills }
        );

        console.log("Creating technologies...");

        await session.run(
            `
            UNWIND $technologies AS technology
            CREATE (:Technology {
                name: technology.name,
                category: technology.category
            })
            `,
            { technologies }
        );

        console.log("Creating domains...");

        await session.run(
            `
            UNWIND $domains AS domain
            CREATE (:Domain {
                name: domain
            })
            `,
            { domains }
        );

        console.log("Creating job roles...");

        await session.run(
            `
            UNWIND $jobRoles AS role
            CREATE (:JobRole {
                name: role.name,
                level: role.level,
                description: role.description
            })
            `,
            { jobRoles }
        );

        console.log("Creating companies...");

        await session.run(
            `
            UNWIND $companies AS company
            CREATE (:Company {
                name: company.name,
                industry: company.industry
            })
            `,
            { companies }
        );

        console.log("Creating projects...");

        await session.run(
            `
            UNWIND $projects AS project
            CREATE (:Project {
                name: project.name,
                description: project.description
            })
            `,
            { projects }
        );

        console.log("Creating person-skill relationships...");

        for (const item of personSkills) {
            await session.run(
                `
                MATCH (p:Person {name: $person})
                MATCH (s:Skill)
                WHERE s.name IN $skills
                CREATE (p)-[:HAS_SKILL]->(s)
                `,
                {
                    person: item.person,
                    skills: item.skills
                }
            );
        }

        console.log("Creating skill relationships...");

        await session.run(
            `
            UNWIND $relationships AS rel
            MATCH (a:Skill {name: rel[0]})
            MATCH (b:Skill {name: rel[1]})
            CREATE (a)-[:RELATED_TO]->(b)
            `,
            {
                relationships: skillRelationships
            }
        );

        console.log("Creating technology-skill relationships...");

        await session.run(
            `
            UNWIND $relationships AS rel
            MATCH (t:Technology {name: rel[0]})
            MATCH (s:Skill {name: rel[1]})
            CREATE (t)-[:PART_OF]->(s)
            `,
            {
                relationships: technologySkills
            }
        );

        console.log("Creating project-technology relationships...");

        await session.run(
            `
            UNWIND $relationships AS rel
            MATCH (p:Project {name: rel[0]})
            MATCH (t:Technology {name: rel[1]})
            CREATE (p)-[:USED_FOR]->(t)
            `,
            {
                relationships: projectTechnologies
            }
        );

        console.log("Creating project-skill relationships...");

        await session.run(
            `
            UNWIND $relationships AS rel
            MATCH (p:Project {name: rel[0]})
            MATCH (s:Skill {name: rel[1]})
            CREATE (p)-[:BUILDS_SKILL]->(s)
            `,
            {
                relationships: projectSkills
            }
        );

        console.log("Creating job role requirements...");

        for (const [roleName, requiredSkills] of Object.entries(roleSkills)) {
            await session.run(
                `
                MATCH (role:JobRole {name: $role})
                MATCH (skill:Skill)
                WHERE skill.name IN $skills
                CREATE (role)-[:REQUIRES]->(skill)
                `,
                {
                    role: roleName,
                    skills: requiredSkills
                }
            );
        }

        console.log("Connecting job roles to domains...");

        for (const [role, domain] of Object.entries(roleDomains)) {
            await session.run(
                `
                MATCH (roleNode:JobRole {name: $role})
                MATCH (domainNode:Domain {name: $domain})
                CREATE (roleNode)-[:IN_DOMAIN]->(domainNode)
                `,
                {
                    role,
                    domain
                }
            );
        }

        console.log("Connecting companies to job roles...");

        await session.run(
            `
            UNWIND $relationships AS rel
            MATCH (company:Company {name: rel[0]})
            MATCH (role:JobRole {name: rel[1]})
            CREATE (company)-[:HIRES_FOR]->(role)
            `,
            {
                relationships: companyRoles
            }
        );

        console.log("=================================");
        console.log("SkillGraph seed completed!");
        console.log("=================================");

        const counts = await session.run(`
            MATCH (n)
            RETURN labels(n)[0] AS label, count(n) AS count
            ORDER BY label
        `);

        for (const record of counts.records) {
            console.log(
                `${record.get("label")}: ${record.get("count").toString()}`
            );
        }
    } catch (error) {
        console.error("Seed failed:", error);
    } finally {
        await session.close();
        await driver.close();
    }
}

seed();

