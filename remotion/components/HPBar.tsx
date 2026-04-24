import React from "react";
import { AbsoluteFill, spring, useCurrentFrame, useVideoConfig } from "remotion";

interface HPBarProps {
    character: string;
    metric?: string;
    from: number;
    to: number;
}

export const HPBar: React.FC<HPBarProps> = ({ character, metric = "HP", from, to }) => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();

    // Animate the value transition
    const progress = spring({ frame, fps, config: { damping: 200 } });
    const currentValue = from - ((from - to) * progress);
    const percentage = Math.max(0, currentValue);

    // Color thresholds matching the flat 2D spec
    let color = "#58A6FF"; // Default blue
    if (percentage < 40) color = "#FFD700"; // Warning yellow
    if (percentage < 10) color = "#FF4444"; // Critical red

    // Shake effect when critical
    const isCritical = percentage < 10;
    const shakeX = isCritical && frame % 4 < 2 ? 10 : 0;

    return (
        <AbsoluteFill style={{ backgroundColor: "transparent", padding: 80, justifyContent: "flex-end", alignItems: "center" }}>
            <div style={{
                width: "60%",
                transform: `translateX(${shakeX}px)`,
                backgroundColor: "#1e1e1e",
                padding: "20px 40px",
                border: "2px solid #333"
            }}>
                <div style={{ display: "flex", justifyContent: "space-between", color: "white", fontSize: 32, marginBottom: 20, fontFamily: "monospace" }}>
                    <span>{character}</span>
                    <span style={{ color }}>{metric} {Math.round(currentValue)}%</span>
                </div>
                <div style={{ width: "100%", backgroundColor: "#000", height: 40, overflow: "hidden" }}>
                    <div style={{ width: `${percentage}%`, height: "100%", backgroundColor: color, transition: "background-color 0.1s" }} />
                </div>
            </div>
        </AbsoluteFill>
    );
};
