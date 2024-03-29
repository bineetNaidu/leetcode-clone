import Link from 'next/link';
import { FC } from 'react';
import { BsCheckCircle } from 'react-icons/bs';
import { AiFillYoutube } from 'react-icons/ai';
import type { Problem } from '@/utils/mockProblems';

type Props = {
  idx: number;
  doc: Problem;
  handleOpenYoutubePlayer: (videoId: string) => void;
};

export const ProblemList: FC<Props> = ({
  doc,
  idx,
  handleOpenYoutubePlayer,
}) => {
  const difficultyColor =
    doc.difficulty === 'Easy'
      ? 'text-dark-green-s'
      : doc.difficulty === 'Medium'
      ? 'text-dark-yellow'
      : 'text-dark-pink';
  return (
    <tr key={doc.id} className={`${idx % 2 === 1 ? 'bg-dark-layer-1' : ''}`}>
      <td className="px-2 py-4 font-medium whitespace-nowrap text-dark-green-s">
        <BsCheckCircle fontSize={18} width={18} />
      </td>

      <td className="px-6 py-4">
        <Link
          className="hover:text-blue-600 cursor-pointer"
          href={`/problems/${doc.id}`}
        >
          {doc.title}
        </Link>
      </td>

      <td className={`px-6 py-4 ${difficultyColor}`}>{doc.difficulty}</td>

      <td className="px-6 py-4">{doc.category}</td>

      <td className="px-6 py-4">
        {doc.videoId ? (
          <AiFillYoutube
            fontSize={18}
            width={18}
            className="cursor-pointer hover:text-red-500"
            onClick={() => handleOpenYoutubePlayer(doc.videoId!)}
          />
        ) : (
          <p>coming soon</p>
        )}
      </td>
    </tr>
  );
};
