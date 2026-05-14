import React from "react";
import { AbsoluteFill, spring, useCurrentFrame, useVideoConfig } from "remotion";

interface ServerRulePanelProps {
    server: string;
    rules?: string[];
}

export const ServerRulePanel: React.FC<ServerRulePanelProps> = ({ server, rules }) => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();
    
    // Panel pops in
    const pop = spring({ frame, fps, config: { damping: 14 } });

    return (
        <AbsoluteFill style={{ backgroundColor: "rgba(13, 17, 23, 0.8)", justifyContent: "center", alignItems: "center" }}>
            <div style={{ 
                transform: `scale(${pop})`, 
                backgroundColor: "#1e1e1e", 
                padding: "60px 80px", 
                borderTop: "8px solid #FFD700",
                color: "white",
                width: "70%",
                boxShadow: "0 20px 50px rgba(0,0,0,0.5)"
            }}>
                <h1 style={{ fontSize: 60, color: "#FFD700", borderBottom: "2px solid #333", paddingBottom: 30, marginBottom: 50 }}>
                    [{server ? server.toUpperCase() : "SERVER"} RULES]
                </h1>
                
                <div style={{ display: "flex", flexDirection: "column", gap: 30 }}>
                    {rules?.map((rule, idx) => {
                        const lineFade = spring({ frame: frame - (15 + idx * 10), fps });
                        return (
                            <div key={idx} style={{ opacity: lineFade, display: "flex", alignItems: "center", fontSize: 40 }}>
                                <div style={{ width: 20, height: 20, backgroundColor: "#58A6FF", marginRight: 30 }} />
                                {rule}
                            </div>
                        );
                    })}
                </div>
            </div>
        </AbsoluteFill>
    );
};
