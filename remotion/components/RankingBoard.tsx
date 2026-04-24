import React from "react";
import { AbsoluteFill, spring, useCurrentFrame, useVideoConfig } from "remotion";

interface RankingEntry {
    rank: number;
    name: string;
    role?: string;
    tier: string;
}

interface RankingBoardProps {
    ranking_title: string;
    entries?: RankingEntry[];
}

export const RankingBoard: React.FC<RankingBoardProps> = ({ ranking_title, entries }) => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();

    return (
        <AbsoluteFill style={{ backgroundColor: "#0D1117", padding: "100px", color: "white" }}>
            <h1 style={{ fontSize: 70, color: "#FFD700", textAlign: "center", marginBottom: 80, borderBottom: "4px solid #333", paddingBottom: 30 }}>
                {ranking_title}
            </h1>
            <div style={{ display: "flex", flexDirection: "column", gap: 30 }}>
                {entries?.map((entry, index) => {
                    // Staggered slide in from left
                    const slideIn = spring({ frame: frame - (index * 10), fps, config: { damping: 14 } });
                    
                    return (
                        <div key={entry.rank} style={{ 
                            transform: `translateX(${(1 - slideIn) * -100}%)`, 
                            opacity: slideIn,
                            display: "flex", 
                            backgroundColor: "#1e1e1e", 
                            padding: "30px 40px", 
                            alignItems: "center" 
                        }}>
                            <div style={{ fontSize: 60, width: 120, color: "#58A6FF", fontWeight: "bold" }}>#{entry.rank}</div>
                            <div style={{ flex: 1 }}>
                                <div style={{ fontSize: 50, fontWeight: "bold" }}>{entry.name}</div>
                                <div style={{ fontSize: 30, color: "#aaa", marginTop: 10 }}>{entry.role}</div>
                            </div>
                            <div style={{ fontSize: 60, color: "#FFD700", fontWeight: "bold", padding: "10px 30px", backgroundColor: "#333" }}>
                                {entry.tier}
                            </div>
                        </div>
                    );
                })}
            </div>
        </AbsoluteFill>
    );
};
