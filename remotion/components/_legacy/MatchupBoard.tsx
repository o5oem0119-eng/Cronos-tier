import React from "react";
import { AbsoluteFill, spring, useCurrentFrame, useVideoConfig } from "remotion";

interface MatchupBoardProps {
    character_a: string;
    character_b: string;
    comparison_axes?: string[];
    result?: string;
}

export const MatchupBoard: React.FC<MatchupBoardProps> = ({ character_a, character_b, comparison_axes, result }) => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();

    // Zoom in for the whole board
    const scale = spring({ frame, fps, config: { damping: 14 } });

    // VS pop animation
    const vsPop = spring({ frame: frame - 15, fps, config: { damping: 10 } });

    return (
        <AbsoluteFill style={{ backgroundColor: "#0D1117", padding: "100px", color: "white" }}>
            <div style={{ transform: `scale(${scale})`, display: "flex", height: "100%" }}>

                {/* Left Side: Character A */}
                <div style={{ flex: 1, backgroundColor: "#1e1e1e", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", borderRight: "4px solid #333" }}>
                    <h1 style={{ fontSize: 80, color: "#58A6FF", marginBottom: 60 }}>{character_a}</h1>
                </div>

                {/* Center: VS and Result */}
                <div style={{ width: 300, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", zIndex: 10, margin: "0 -150px" }}>
                    <div style={{
                        transform: `scale(${vsPop})`,
                        backgroundColor: "#FF4444",
                        color: "white",
                        padding: "30px 40px",
                        fontSize: 80,
                        fontWeight: "bold",
                        borderRadius: "50%"
                    }}>
                        VS
                    </div>
                    {result && (
                        <div style={{ opacity: vsPop, marginTop: 40, backgroundColor: "#333", padding: "10px 20px", fontSize: 30, textAlign: "center" }}>
                            {result}
                        </div>
                    )}
                </div>

                {/* Right Side: Character B */}
                <div style={{ flex: 1, backgroundColor: "#1e1e1e", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", borderLeft: "4px solid #333" }}>
                    <h1 style={{ fontSize: 80, color: "#FFD700", marginBottom: 60 }}>{character_b}</h1>
                </div>
            </div>
        </AbsoluteFill>
    );
};
