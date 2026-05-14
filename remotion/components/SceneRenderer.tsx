import React from 'react';
import { AbsoluteFill, staticFile } from 'remotion';
import { SubtitleBar } from './SubtitleBar';
import { StatCard } from './StatCard';
import { WobblySpeechBubble } from './WobblySpeechBubble';
import { HighlightText } from './HighlightText';
import { Pictographic } from './Pictographic';
import { BattleScene } from './BattleScene';
import { SourceBadge } from './SourceBadge';
import { colors } from '../designTokens';

// 배경 이미지 경로 매핑 (assets/bg/ 폴더의 실제 이미지)
const BG_MAP: Record<string, string> = {
  '1': staticFile('assets/bg/1.jpg'),
  '2': staticFile('assets/bg/2.jpg'),
  '3': staticFile('assets/bg/3.jpg'),
};

// 캐릭터에 흰색 sticker 테두리를 입히는 CSS filter
// drop-shadow를 여러 방향으로 겹쳐서 두꺼운 흰색 외곽선처럼 보이게 만듦
const STICKER_BORDER_FILTER =
  'drop-shadow(0 0 8px white) drop-shadow(0 0 8px white) drop-shadow(0 0 8px white)';

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
  const bgSrc = BG_MAP[background] ?? BG_MAP['1'];

  return (
    <AbsoluteFill style={{ justifyContent: 'center', alignItems: 'center', overflow: 'hidden' }}>
      {/* 배경 이미지: assets/bg/{1|2|3}.jpg */}
      <img
        src={bgSrc}
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
      />
      
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
            // 사료 이미지: 종이 위에 올린 듯 기울어진 보더
            return <img key={idx} src={comp.props.src} style={{ ...positionStyle, width: comp.props.width || '800px', border: `8px solid ${colors.inkBorder}`, transform: 'rotate(-1.5deg)', boxShadow: '8px 12px 0 rgba(0,0,0,0.1)' }} />;
          case 'CharacterDoodle':
            // 캐릭터 누끼 이미지: 흰색 sticker 테두리 filter 적용
            return <img key={idx} src={comp.props.src} style={{ ...positionStyle, height: comp.props.height || '500px', objectFit: 'contain', filter: STICKER_BORDER_FILTER }} />;
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
