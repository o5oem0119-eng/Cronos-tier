import React from 'react';
import { colors, typography } from '../designTokens';

export const SubtitleBar: React.FC<{ text: string }> = ({ text }) => {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      position: 'relative',
      padding: '24px 60px',
      backgroundColor: colors.subtitleBg,
      borderTop: `4px solid ${colors.subtitleBorder}`,
      borderBottom: `4px solid ${colors.subtitleBorder}`,
      // 양 끝 사선 컷팅 (Chamfered edge)
      clipPath: 'polygon(20px 0, calc(100% - 20px) 0, 100% 20px, 100% calc(100% - 20px), calc(100% - 20px) 100%, 20px 100%, 0 calc(100% - 20px), 0 20px)',
      boxSizing: 'border-box',
    }}>
      {/* 여는 따옴표 (좌상단 모서리 근처) */}
      <div style={{
        position: 'absolute',
        top: '12px',
        left: '24px',
        fontSize: '48px',
        lineHeight: '1',
        fontWeight: '900',
        color: colors.subtitleQuote,
        fontFamily: typography.fontFamilyMain,
      }}>
        “
      </div>

      {/* 텍스트 컨텐츠 */}
      <div style={{
        fontSize: '36px',
        fontWeight: '700',
        color: colors.textPrimary,
        fontFamily: typography.fontFamilyMain,
        textAlign: 'center',
        wordBreak: 'keep-all',
      }}>
        {text}
      </div>

      {/* 닫는 따옴표 (우하단 모서리 근처) */}
      <div style={{
        position: 'absolute',
        bottom: '-12px',
        right: '24px',
        fontSize: '48px',
        lineHeight: '1',
        fontWeight: '900',
        color: colors.subtitleQuote,
        fontFamily: typography.fontFamilyMain,
      }}>
        ”
      </div>
    </div>
  );
};
