import Split from 'react-split';
import { FC } from 'react';
import { ProblemDescription } from './ProblemDescription';
import { Playground } from './Playground';

export const Workspace: FC = () => {
  return (
    <Split className="split" minSize={0}>
      <ProblemDescription />
      <Playground />
    </Split>
  );
};
