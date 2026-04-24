import React from "react";
import { AbsoluteFill, spring, useCurrentFrame, useVideoConfig } from "remotion";

interface StatCardProps {
    character: string;
    stats?: Record<string, string | number>;
    tier?: string;
    passive_traits?: string[];
    debuff_traits?: string[];
    className?: string;
}

export const StatCard: React.FC<StatCardProps> = ({ character, stats, tier, passive_traits, debuff_traits, className }) => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();
    const scale = spring({ frame, fps, config: { damping: 12 } });

    return (
        <AbsoluteFill style={{ backgroundColor: "#0D1117", justifyContent: "center", alignItems: "center", color: "white" }}>
            <div style={{ transform: `scale(${scale})`, display: "flex", width: "80%", justifyContent: "space-between" }}>
                <div style={{ flex: 1 }}>
                    <h1 style={{ fontSize: 80, color: "#FFD700", margin: 0 }}>{character}</h1>
                    <p style={{ color: "#58A6FF", fontSize: 40, marginTop: 10 }}>{className}</p>
                    <div style={{ marginTop: 40, fontSize: 30 }}>
                        <p style={{ color: "#58A6FF", marginBottom: 10 }}>[PASSIVES]</p>
                        {passive_traits?.map(p => <div key={p}>- {p}</div>)}
                        
                        <p style={{ color: "#FF4444", marginTop: 30, marginBottom: 10 }}>[DEBUFFS]</p>
                        {debuff_traits?.map(d => <div key={d}>- {d}</div>)}
                    </div>
                </div>
                
                <div style={{ flex: 1, backgroundColor: "#1e1e1e", padding: 40 }}>
                    <h2 style={{ color: "#58A6FF", textAlign: "center", borderBottom: "2px solid #333", paddingBottom: 20 }}>STAT CHART</h2>
                    {stats && Object.entries(stats).map(([key, value]) => (
                        <div key={key} style={{ display: "flex", justifyContent: "space-between", margin: "15px 0", fontSize: 24 }}>
                            <span style={{ textTransform: "uppercase" }}>{key.replace("_", " ")}</span>
                            <span style={{ fontWeight: "bold", color: "#FFD700" }}>{value as string}</span>
                        </div>
                    ))}
                </div>
                
                <div style={{ flex: 1, textAlign: "right", display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
                    <div style={{ backgroundColor: "#333", padding: "20px 40px", display: "inline-block" }}>
                        <div style={{ fontSize: 30, color: "#aaa" }}>TIER</div>
                        <h1 style={{ fontSize: 120, color: "#FFD700", margin: 0 }}>{tier}</h1>
                    </div>
                </div>
            </div>
        </AbsoluteFill>
    );
};
