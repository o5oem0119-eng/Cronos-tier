import { registerRoot, Composition } from 'remotion';
import { MainSequence } from './MainSequence';
// @ts-ignore
import scenario from '../data/generated/mongol_empire/scenario.json';

const RemotionRoot: React.FC = () => {
  return (
    <Composition
      id="ChronosV4"
      component={MainSequence}
      durationInFrames={scenario.scenes.length * 150}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={{
        scenes: scenario.scenes as any,
      }}
    />
  );
};

registerRoot(RemotionRoot);
