import React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";

interface SystemLogProps {
    message: string;
}

export const SystemLog: React.FC<SystemLogProps> = ({ message }) => {
    const frame = useCurrentFrame();
    // 2 characters per frame for terminal typing speed
    const charsToShow = Math.floor(frame / 2); 

    return (
        <AbsoluteFill style={{ backgroundColor: "rgba(13, 17, 23, 0.9)", padding: 80, fontFamily: "monospace" }}>
            <div style={{ color: "#00FF41", fontSize: 40, whiteSpace: "pre-wrap", lineHeight: 1.5 }}>
                {"[SYSTEM LOG]\n\n" + message.substring(0, charsToShow)}
                {frame % 30 < 15 ? "█" : ""}
            </div>
        </AbsoluteFill>
    );
};
