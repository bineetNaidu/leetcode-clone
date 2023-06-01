import Split from 'react-split';
import { FC } from 'react';
import { PreferenceNav } from './PreferenceNav';
import CodeMirror from '@uiw/react-codemirror';
import { vscodeDark } from '@uiw/codemirror-theme-vscode';
import { javascript } from '@codemirror/lang-javascript';

export const Playground: FC = () => {
  return (
    <div className="flex flex-col bg-dark-layer-1 relative">
      <PreferenceNav />
      <Split
        className="h-[calc(100vh-94px)]"
        direction="vertical"
        minSize={60}
        sizes={[60, 40]}
      >
        <div className="w-full overflow-auto">
          <CodeMirror
            value="const a = 1;"
            theme={vscodeDark}
            extensions={[javascript()]}
            style={{ fontSize: 14, height: '100%' }}
          />
        </div>
        <div>test case</div>
      </Split>
    </div>
  );
};
