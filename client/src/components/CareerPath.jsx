function CareerPath({ careerPath }) {
    return (
        <div className="career-path">
            {careerPath.map((path, index) => (
                <div className="path" key={index}>
                    {path.map((step, stepIndex) => (
                        <div
                            className="path-step"
                            key={stepIndex}
                        >
                            <div className="node">
                                {step.start.name}
                            </div>

                            <div className="arrow">
                                ↓
                                <span>
                                    {step.relationship}
                                </span>
                            </div>

                            {stepIndex === path.length - 1 && (
                                <div className="node">
                                    {step.end.name}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}

export default CareerPath;