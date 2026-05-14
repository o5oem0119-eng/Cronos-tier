import React from 'react';
import { useCurrentFrame, useVideoConfig, spring } from 'remotion';
import { typography } from '../designTokens';

export const HighlightText: React.FC<{ text: string, color?: string }> = ({ text, color = 'rgba(255, 225, 105, 0.7)' }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  
  // spring 애니메이션으로 0에서 1까지 서서히 증가
  const progress = spring({
    frame,
    fps,
    config: { damping: 200, mass: 0.5 },
  });

  return (
    <span style={{ 
      position: 'relative', 
      display: 'inline-block', 
      fontFamily: typography.fontFamilyMain, 
      fontWeight: 'bold' 
    }}>
      <span style={{ position: 'relative', zIndex: 1 }}>{text}</span>
      {/* 형광펜 배경 (진행도에 따라 width 증가) */}
      <div style={{
        position: 'absolute',
        bottom: '15%',
        left: '-3%',
        height: '45%',
        width: `${progress * 106}%`,
        backgroundColor: color,
        zIndex: 0,
        borderRadius: '3px',
      }} />
    </span>
  );
};
