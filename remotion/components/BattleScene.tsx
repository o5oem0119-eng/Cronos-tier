import React from 'react';
import { colors, typography, filters } from '../designTokens';

export type BattleSceneProps = {
  leftName: string;
  rightName: string;
  leftImg: string;
  rightImg: string;
};

export const BattleScene: React.FC<BattleSceneProps> = ({ leftName, rightName, leftImg, rightImg }) => {
  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      width: '100%', 
      height: '100%', 
      gap: '120px' 
    }}>
      {/* 좌측 세력 */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <img src={leftImg} style={{ width: '400px', objectFit: 'contain', filter: filters.stickerBorder }} />
        <div style={{ 
          marginTop: '20px',
          fontSize: '52px', 
          fontWeight: 'bold', 
          fontFamily: typography.fontFamilyHandwriting, 
          color: colors.textPrimary, 
          background: '#FFFFFF', 
          padding: '12px 32px', 
          border: `5px solid ${colors.inkBorder}`, 
          borderRadius: '15px 8px 10px 12px / 8px 15px 12px 10px',
          transform: 'rotate(-2deg)'
        }}>
          {leftName}
        </div>
      </div>

      {/* VS 마크 */}
      <div style={{ 
        fontSize: '100px', 
        fontWeight: '900', 
        color: colors.triangleUp, 
        fontFamily: typography.fontFamilyMain,
        fontStyle: 'italic',
        textShadow: `6px 6px 0px ${colors.inkBorder}`
      }}>
        VS
      </div>

      {/* 우측 세력 */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <img src={rightImg} style={{ width: '400px', objectFit: 'contain', transform: 'scaleX(-1)', filter: filters.stickerBorder }} />
        <div style={{ 
          marginTop: '20px',
          fontSize: '52px', 
          fontWeight: 'bold', 
          fontFamily: typography.fontFamilyHandwriting, 
          color: colors.textPrimary, 
          background: '#FFFFFF', 
          padding: '12px 32px', 
          border: `5px solid ${colors.inkBorder}`, 
          borderRadius: '10px 15px 12px 8px / 12px 10px 8px 15px',
          transform: 'rotate(1.5deg)'
        }}>
          {rightName}
        </div>
      </div>
    </div>
  );
};
