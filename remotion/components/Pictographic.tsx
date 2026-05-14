import React from 'react';
import { useCurrentFrame, useVideoConfig, spring } from 'remotion';
import { typography } from '../designTokens';

export const Pictographic: React.FC<{ iconUrl: string, label: string }> = ({ iconUrl, label }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  
  // 통통 튀어오르는 spring 애니메이션
  const scale = spring({ 
    frame, 
    fps, 
    config: { tension: 120, friction: 14 } 
  });

  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      transform: `scale(${scale})` 
    }}>
      {/* 픽토그램을 흰색 단일 색상으로 변환 */}
      <img 
        src={iconUrl} 
        alt="icon" 
        style={{ 
          width: '120px', 
          height: '120px', 
          filter: 'brightness(0) invert(1)',
          objectFit: 'contain'
        }} 
      />
      <span style={{ 
        marginTop: '16px', 
        fontSize: '32px', 
        fontWeight: 'bold', 
        fontFamily: typography.fontFamilyMain, 
        color: '#FFFFFF' 
      }}>
        {label}
      </span>
    </div>
  );
};
