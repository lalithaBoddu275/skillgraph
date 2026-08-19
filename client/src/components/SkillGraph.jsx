import {
    ReactFlow,
    Background,
    Controls,
    MiniMap
} from "reactflow";

import "reactflow/dist/style.css";

function SkillGraph({ careerPath }) {

    if (!careerPath || careerPath.length === 0) {
        return (
            <div className="empty-graph">
                No career path available.
            </div>
        );
    }

    const nodes = [];
    const edges = [];

    const nodeMap = new Map();

    careerPath.forEach((path) => {

        path.forEach((segment) => {

            const startName = segment.start.name;
            const endName = segment.end.name;

            if (!nodeMap.has(startName)) {

                nodeMap.set(startName, {
                    id: startName,
                    data: {
                        label: startName
                    },
                    position: {
                        x: nodes.length * 220,
                        y: 100
                    }
                });

                nodes.push(
                    nodeMap.get(startName)
                );
            }

            if (!nodeMap.has(endName)) {

                nodeMap.set(endName, {
                    id: endName,
                    data: {
                        label: endName
                    },
                    position: {
                        x: nodes.length * 220,
                        y: 250
                    }
                });

                nodes.push(
                    nodeMap.get(endName)
                );
            }

            const edgeId =
                `${startName}-${segment.relationship}-${endName}`;

            edges.push({
                id: edgeId,
                source: startName,
                target: endName,
                label: segment.relationship
            });

        });

    });

    return (
        <div
            style={{
                width: "100%",
                height: "600px",
                border: "1px solid #ddd",
                borderRadius: "12px",
                overflow: "hidden"
            }}
        >

            <ReactFlow
                nodes={nodes}
                edges={edges}
                fitView
            >

                <Background />

                <Controls />

                <MiniMap />

            </ReactFlow>

        </div>
    );
}

export default SkillGraph;