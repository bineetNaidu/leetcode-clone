import YouTube from 'react-youtube';
import { useState } from 'react';
import { ProblemList } from '@/components/ProblemList';
import { Topbar } from '@/components/Topbar';
import { problems } from '@/utils/mockProblems';
import { IoClose } from 'react-icons/io5';

export default function Home() {
  const [youtubePlayer, setYoutubePlayer] = useState({
    show: false,
    videoId: '',
  });

  const handleOpenYoutubePlayer = (videoId: string) => {
    setYoutubePlayer({
      show: true,
      videoId,
    });
  };

  const handleCloseYoutubePlayer = () => {
    setYoutubePlayer({
      show: false,
      videoId: '',
    });
  };

  return (
    <main className="bg-dark-layer-2 min-h-screen">
      <Topbar />
      <h1 className="text-2xl text-center text-gray-700 dark:text-gray-400 font-medium uppercase mt-10 mb-5">
        &ldquo; QUALITY OVER QUANTITY &rdquo; 👇
      </h1>

      <div className="relative overflow-x-auto mx-auto px-6 pb-10">
        <table className="text-sm text-left text-gray-500 dark:text-gray-400 sm:w-7/12 w-full max-w-[1200px] mx-auto">
          <thead className="text-xs text-gray-700 uppercase dark:text-gray-400 border-b ">
            <tr>
              <th scope="col" className="px-1 py-3 w-0 font-medium">
                Status
              </th>
              <th scope="col" className="px-6 py-3 w-0 font-medium">
                Title
              </th>
              <th scope="col" className="px-6 py-3 w-0 font-medium">
                Difficulty
              </th>

              <th scope="col" className="px-6 py-3 w-0 font-medium">
                Category
              </th>
              <th scope="col" className="px-6 py-3 w-0 font-medium">
                Solution
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-700 text-white">
            {problems.map((p, idx) => (
              <ProblemList
                doc={p}
                idx={idx}
                key={p.id}
                handleOpenYoutubePlayer={handleOpenYoutubePlayer}
              />
            ))}
          </tbody>
          {youtubePlayer.show && (
            <tfoot className="fixed top-0 left-0 h-screen w-screen flex items-center justify-center ">
              <div className="bg-black z-10 opacity-70 top-0 left-0 w-screen h-screen absolute"></div>
              <div className="w-full z-50 h-full px-6 relative max-w-4xl">
                <div className="w-full h-full flex items-center justify-center relative">
                  <div className="w-full relative">
                    <IoClose
                      fontSize={'35'}
                      onClick={handleCloseYoutubePlayer}
                      className="cursor-pointer absolute -top-16 right-0"
                    />
                    <YouTube
                      videoId={youtubePlayer.videoId}
                      loading="lazy"
                      iframeClassName="w-full min-h-[500px]"
                    />
                  </div>
                </div>
              </div>
            </tfoot>
          )}
        </table>
      </div>
    </main>
  );
}
