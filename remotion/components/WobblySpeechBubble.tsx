import React from 'react';
import { colors, typography } from '../designTokens';

export const WobblySpeechBubble: React.FC<{ text: string, direction?: 'left'|'right', variant?: 'character'|'source' }> = ({ text, direction = 'left', variant = 'character' }) => {
  return (
    <div style={{
      position: 'relative',
      display: 'inline-block',
      padding: '24px 36px',
      backgroundColor: variant === 'character' ? '#FFFFFF' : colors.subtitleBg,
      border: `5px solid ${colors.inkBorder}`,
      // 삐뚤삐뚤한 손그림 느낌
      borderRadius: '255px 15px 225px 15px / 15px 225px 15px 255px',
      fontFamily: typography.fontFamilyHandwriting,
      fontSize: '40px',
      fontWeight: '600',
      color: colors.textPrimary,
      boxShadow: '4px 6px 0px rgba(0,0,0,0.1)',
      transform: `rotate(${direction === 'left' ? -2 : 1.5}deg)`,
      whiteSpace: 'pre-wrap',
      textAlign: 'center',
    }}>
      {text}
      {/* 말풍선 꼬리 */}
      <svg 
        width="40" height="40" 
        viewBox="0 0 40 40" 
        style={{
          position: 'absolute',
          bottom: '-32px',
          [direction === 'left' ? 'left' : 'right']: '40px',
          transform: direction === 'left' ? 'none' : 'scaleX(-1)',
        }}
      >
        <path 
          d="M0 0 Q10 25 0 40 Q25 25 40 0 Z" 
          fill={variant === 'character' ? '#FFFFFF' : colors.subtitleBg} 
          stroke={colors.inkBorder} 
          strokeWidth="5" 
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};
