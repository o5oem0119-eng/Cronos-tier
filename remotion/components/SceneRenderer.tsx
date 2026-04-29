import React from "react";
import { AbsoluteFill } from "remotion";

// 1. 작성된 7종의 UI 컴포넌트 임포트
import { SystemLog } from "./SystemLog";
import { HPBar } from "./HPBar";
import { IntroCard } from "./IntroCard";
import { StatCard } from "./StatCard";
import { RankingBoard } from "./RankingBoard";
import { MatchupBoard } from "./MatchupBoard";
import { ServerRulePanel } from "./ServerRulePanel";

// 2. 단종 비극 씬 00 (게임 오버) JSON 데이터 임포트
// 파일이 없을 경우를 대비해 Try-Catch나 존재 확인이 필요하지만, 빌드 에러 방지를 위해 실제 생성 경로로 수정
import sceneData from "../../data/generated/danjong_tragedy_long/scenes/scene_00.json";

export const SceneRenderer: React.FC = () => {
    // 데이터 구조 안전하게 추출 (Optional Chaining)
    const components = sceneData?.scene_structure?.components || [];

    return (
        <AbsoluteFill style={{ backgroundColor: "#0D1117" }}>
            {/* JSON의 components 배열을 순회하며 동적으로 렌더링 */}
            {components.map((comp: any, index: number) => {
                const { type, props } = comp;

                // type 값에 따라 적절한 UI 컴포넌트 매핑
                switch (type) {
                    case "SystemLog":
                        return <SystemLog key={index} {...(props as any)} />;
                    case "HPBar":
                        return <HPBar key={index} {...(props as any)} />;
                    case "IntroCard":
                        return <IntroCard key={index} {...(props as any)} />;
                    case "StatCard":
                        return <StatCard key={index} {...(props as any)} />;
                    case "RankingBoard":
                        return <RankingBoard key={index} {...(props as any)} />;
                    case "MatchupBoard":
                        return <MatchupBoard key={index} {...(props as any)} />;
                    case "ServerRulePanel":
                        return <ServerRulePanel key={index} {...(props as any)} />;
                    default:
                        console.warn(`Unsupported component type: ${type}`);
                        return null;
                }
            })}
        </AbsoluteFill>
    );
};
