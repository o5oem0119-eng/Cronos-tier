import React from "react";
import { AbsoluteFill, spring, useCurrentFrame, useVideoConfig } from "remotion";

interface IntroCardProps {
    character: string;
    className?: string;
    tier?: string;
    role?: string;
}

export const IntroCard: React.FC<IntroCardProps> = ({ character, className, tier, role }) => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();

    const scale = spring({
        frame,
        fps,
        config: {
            damping: 12
        }
    });

    return (
        <AbsoluteFill
            style={{
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#0D1117"
            }}
        >

            <div
                style={{
                    transform: `scale(${scale})`,
                    color: "#FFD700",
                    fontSize: 120,
                    fontWeight: 800
                }}
            >
                {character}
            </div>

            <div
                style={{
                    color: "#58A6FF",
                    fontSize: 40,
                    marginTop: 20
                }}
            >
                {className}
            </div>

            <div
                style={{
                    color: "#FFFFFF",
                    fontSize: 32,
                    marginTop: 10
                }}
            >
                Tier {tier}
            </div>

            <div
                style={{
                    color: "#AAAAAA",
                    marginTop: 10
                }}
            >
                {role}
            </div>

        </AbsoluteFill>
    );
};
