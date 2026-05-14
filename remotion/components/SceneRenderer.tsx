import React from 'react';
import { AbsoluteFill } from 'remotion';
import { SubtitleBar } from './SubtitleBar';
import { StatCard } from './StatCard';
import { WobblySpeechBubble } from './WobblySpeechBubble';
import { HighlightText } from './HighlightText';
import { Pictographic } from './Pictographic';
import { BattleScene } from './BattleScene';
import { SourceBadge } from './SourceBadge';
import { colors } from '../designTokens';

export type ComponentConfig = {
  type: 'StatCard' | 'WobblySpeechBubble' | 'HighlightText' | 'Pictographic' | 'BattleScene' | 'SourceBadge' | 'SourceImage' | 'CharacterDoodle';
  props: any;
  x?: number; // CSS left
  y?: number; // CSS top
};

export type SceneData = {
  background: '1' | '2' | '3';
  components?: ComponentConfig[];
  text?: string;
};

export const SceneRenderer: React.FC<{ sceneData: SceneData }> = ({ sceneData }) => {
  const { background, components, text } = sceneData;

  // 배경 맵핑 규칙
  const bgColors: Record<string, string> = {
    '1': '#0D1117', // 다크 스톤
    '2': '#F8F8F0', // 구겨진 종이
    '3': '#2B2B2B', // 전장 지도
  };
  const bgColor = bgColors[background] || bgColors['1'];

  return (
    <AbsoluteFill style={{ backgroundColor: bgColor, justifyContent: 'center', alignItems: 'center', overflow: 'hidden' }}>
      
      {/* 씬 컴포넌트 렌더링 */}
      {components?.map((comp, idx) => {
        const positionStyle: React.CSSProperties = (comp.x !== undefined || comp.y !== undefined) 
          ? { position: 'absolute', top: comp.y, left: comp.x } 
          : {};

        switch (comp.type) {
          case 'StatCard':
            return <div key={idx} style={{ ...positionStyle, transform: 'scale(1.2)' }}><StatCard {...comp.props} /></div>;
          case 'WobblySpeechBubble':
            return <div key={idx} style={positionStyle}><WobblySpeechBubble {...comp.props} /></div>;
          case 'HighlightText':
            return <div key={idx} style={{ ...positionStyle, fontSize: '48px', color: '#FFF' }}><HighlightText {...comp.props} /></div>;
          case 'Pictographic':
            return <div key={idx} style={positionStyle}><Pictographic {...comp.props} /></div>;
          case 'BattleScene':
            return <AbsoluteFill key={idx}><BattleScene {...comp.props} /></AbsoluteFill>;
          case 'SourceBadge':
            return <SourceBadge key={idx} {...comp.props} />;
          case 'SourceImage': 
            // 사료 이미지를 구겨진 종이 위에 올린 듯 연출
            return <img key={idx} src={comp.props.src} style={{ ...positionStyle, width: comp.props.width || '800px', border: `8px solid ${colors.inkBorder}`, transform: 'rotate(-1.5deg)', boxShadow: '8px 12px 0 rgba(0,0,0,0.1)' }} />;
          case 'CharacterDoodle':
            return <img key={idx} src={comp.props.src} style={{ ...positionStyle, height: comp.props.height || '500px', objectFit: 'contain' }} />;
          default:
            return null;
        }
      })}

      {/* 자막바 (텍스트가 있을 때만 항상 화면 최상단 하단에 고정) */}
      {text && (
        <div style={{ position: 'absolute', bottom: '80px', width: '85%' }}>
          <SubtitleBar text={text} />
        </div>
      )}
    </AbsoluteFill>
  );
};
