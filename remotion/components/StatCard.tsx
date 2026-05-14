import React from 'react';
import { colors, typography } from '../designTokens';

export type StatCardProps = {
  type: 'war' | 'status' | 'person';
  title: string;
  icon?: string; // 동물 실루엣 이미지 경로
  stats: {
    label: string;            // 자연어 기반 항목명 (예: "기동성 매우 높음")
    score: 1 | 2 | 3;         // 기호 개수
    direction: 'up' | 'down'; // 기호 종류 (▲ 또는 ▼)
  }[];
};

export const StatCard: React.FC<StatCardProps> = ({ type, title, icon, stats }) => {
  return (
    <div style={{
      width: '540px',
      backgroundColor: colors.subtitleBg,
      // 낙서체 외곽선 느낌을 위한 불규칙한 border-radius
      border: `5px solid ${colors.inkBorder}`,
      borderRadius: '6px 18px 10px 14px / 18px 8px 15px 10px',
      padding: '24px 32px',
      display: 'flex',
      flexDirection: 'column',
      fontFamily: typography.fontFamilyHandwriting,
      color: colors.textPrimary,
      boxShadow: '4px 6px 0px rgba(0,0,0,0.1)', // 약간의 그림자로 종이 느낌 강조
    }}>
      {/* 헤더 영역 (동물 아이콘 + 이름) */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: '20px',
        borderBottom: `4px solid ${colors.inkBorder}`,
        marginBottom: '20px',
        // 손그림처럼 살짝 삐뚤어진 느낌
        transform: 'rotate(-0.5deg)',
      }}>
        {icon && (
          <img 
            src={icon} 
            alt="icon" 
            style={{ 
              width: '64px', 
              height: '64px', 
              objectFit: 'contain', 
              marginRight: '20px' 
            }}
          />
        )}
        <div style={{ fontSize: '52px', fontWeight: 'bold', lineHeight: '1' }}>
          {title}
        </div>
      </div>

      {/* 바디 영역 (스탯 목록) */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {stats.map((stat, idx) => (
          <div key={idx} style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingBottom: '14px',
            borderBottom: idx < stats.length - 1 ? `3px solid ${colors.inkBorder}` : 'none',
            // 각 행의 선도 제각각 조금씩 삐뚤어지게 연출
            transform: `rotate(${idx % 2 === 0 ? 0.3 : -0.2}deg)`,
          }}>
            {/* 항목명 */}
            <span style={{ fontSize: '36px', fontWeight: '600' }}>
              {stat.label}
            </span>
            
            {/* 기호 (▲ 또는 ▼) */}
            <div style={{ display: 'flex', gap: '6px' }}>
              {Array.from({ length: stat.score }).map((_, i) => (
                <span key={i} style={{
                  fontSize: '32px',
                  color: stat.direction === 'up' ? colors.triangleUp : colors.triangleDown,
                  // 삼각형 모양 자체도 기계적이지 않게 살짝씩 회전
                  transform: `rotate(${i % 2 === 0 ? -4 : 5}deg) translateY(${stat.direction === 'down' ? '3px' : '0'})`,
                  display: 'inline-block'
                }}>
                  {stat.direction === 'up' ? '▲' : '▼'}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
