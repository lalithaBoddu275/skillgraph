function CareerCard({ role, matchingSkills }) {
    return (
        <div className="career-card">
            <div>
                <h3>{role}</h3>
                <p>Recommended Career</p>
            </div>

            <div className="matching-score">
                {matchingSkills}
                <span> skills</span>
            </div>
        </div>
    );
}

export default CareerCard;