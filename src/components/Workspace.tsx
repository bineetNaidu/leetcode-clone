import Split from 'react-split';
import { FC } from 'react';
import { ProblemDescription } from './ProblemDescription';

export const Workspace: FC = () => {
  return (
    <Split className="split" minSize={0}>
      <ProblemDescription />
      <div>code editor</div>
    </Split>
  );
};
