function SkillCard({
    skill,
    category,
    careerOptions,
    usefulFor
}) {
    return (
        <div className="skill-card">
            <h3>{skill}</h3>

            <span className="category">
                {category}
            </span>

            <p>
                Useful for{" "}
                <strong>{careerOptions}</strong>{" "}
                career paths
            </p>

            <small>
                {usefulFor.join(" • ")}
            </small>
        </div>
    );
}

export default SkillCard;