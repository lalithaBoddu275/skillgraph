import { useEffect, useState } from "react";
import axios from "axios";

import SkillGraph from "./components/SkillGraph";
import CareerCard from "./components/CareerCard";
import SkillCard from "./components/SkillCard";
import CareerPath from "./components/CareerPath";
const API_URL = import.meta.env.VITE_API_URL;
import "./App.css";

function App() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        async function fetchCareerInsights() {
            try {
              
        const response = await axios.get(
  `${API_URL}/api/careers/insights/Lalitha`
    );

                setData(response.data.data);
            } catch (err) {
                console.error(err);
                setError("Failed to load career insights");
            } finally {
                setLoading(false);
            }
        }

        fetchCareerInsights();
    }, []);

    if (loading) {
        return (
            <div className="loading">
                Loading Career Insights...
            </div>
        );
    }

    if (error) {
        return (
            <div className="error">
                {error}
            </div>
        );
    }

    return (
        <div className="app">

            <header className="header">
                <h1>SkillGraph</h1>
                <p>
                    Graph-Based Career Intelligence Platform
                </p>
            </header>

            <main className="container">

                <section className="profile">
                    <p>Your Career Profile</p>

                    <h2>{data.person}</h2>

                    <div className="target-role">
                        <span>Recommended Career</span>
                        <strong>
                            {data.targetRole}
                        </strong>
                    </div>
                </section>


                <section>
                    <h2>Matching Career Roles</h2>

                    <div className="career-grid">
                        {data.matchingRoles.map((role) => (
                            <CareerCard
                                key={role.role}
                                role={role.role}
                                matchingSkills={
                                    role.matchingSkills
                                }
                            />
                        ))}
                    </div>
                </section>


                <section>
                    <h2>Recommended Skills</h2>

                    <div className="skill-grid">
                        {data.recommendedSkills.map(
                            (skill) => (
                                <SkillCard
                                    key={skill.skill}
                                    {...skill}
                                />
                            )
                        )}
                    </div>
                </section>

                <section>
    <h2>Career Graph</h2>

    <SkillGraph
        careerPath={data.careerPath}
    />
</section>

<section>
    <h2>Career Path Details</h2>

    <CareerPath
        careerPath={data.careerPath}
    />
</section>

            </main>
        </div>
    );
}

export default App;