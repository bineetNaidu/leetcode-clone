import Split from 'react-split';
import { FC } from 'react';
import { PreferenceNav } from './PreferenceNav';
import CodeMirror from '@uiw/react-codemirror';
import { vscodeDark } from '@uiw/codemirror-theme-vscode';
import { javascript } from '@codemirror/lang-javascript';
import { EditorFooter } from './EditorFooter';

export const Playground: FC = () => {
  return (
    <div className="flex flex-col bg-dark-layer-1 relative overflow-x-auto">
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
        <div className="w-full px-5 overflow-auto">
          <div className="flex h-10 items-center space-x-6">
            <div className="relative flex h-full flex-col justify-center cursor-pointer">
              <h2 className="text-sm font-medium text-white leading-5">
                Test Cases
              </h2>
              <hr className="absolute bottom-0 w-full h-0.5 rounded-full border-none bg-white" />
            </div>
          </div>

          <div className="flex">
            {[1, 2, 3].map((i) => (
              <div className="mr-2 items-center mt-2 text-white" key={i}>
                <div className="flex flex-wrap items-center gap-y-4">
                  <button className="flex-medium items-center transition-all focus:outline-none inline-flex bg-dark-fill-3 hover:bg-dark-fill-2 relative rounded-lg px-4 py-1 cursor-pointer whitespace-nowrap">
                    Case {i}
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="font-semibold my-4">
            <p className="text-sm font-medium mt-4 text-white">Input:</p>
            <div className="w-full cursor-text rounded-lg border px-3 py-[10px] bg-dark-fill-3 border-transparent text-white mt-2">
              nums: [1,2,3,4,5,6,7,8,9,10], k: 3
            </div>

            <p className="text-sm font-medium mt-4 text-white">Output:</p>
            <div className="w-full cursor-text rounded-lg border px-3 py-[10px] bg-dark-fill-3 border-transparent text-white mt-2">
              [1,9,10]
            </div>
          </div>
        </div>
      </Split>

      <EditorFooter />
    </div>
  );
};
