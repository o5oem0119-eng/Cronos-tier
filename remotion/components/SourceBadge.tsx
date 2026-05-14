import React from 'react';
import { typography } from '../designTokens';

export const SourceBadge: React.FC<{ source: string }> = ({ source }) => {
  return (
    <div style={{
      position: 'absolute',
      bottom: '40px',
      right: '40px',
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      color: '#FFFFFF',
      padding: '12px 24px',
      borderRadius: '6px',
      fontSize: '24px',
      fontFamily: typography.fontFamilyMain,
      fontWeight: '500',
    }}>
      출처: {source}
    </div>
  );
};
