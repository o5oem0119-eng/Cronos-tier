import React from 'react';
import { Series } from 'remotion';
import { SceneRenderer, SceneData } from './components/SceneRenderer';

export const MainSequence: React.FC<{ scenes: SceneData[] }> = ({ scenes }) => {
  return (
    <Series>
      {scenes.map((scene, index) => (
        // 각 씬의 길이를 150프레임(5초)으로 우선 설정 (테스트용)
        <Series.Sequence key={index} durationInFrames={150}>
          <SceneRenderer sceneData={scene} />
        </Series.Sequence>
      ))}
    </Series>
  );
};
