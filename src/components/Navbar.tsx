import Link from 'next/link';
import Image from 'next/image';
import { authModalAtom } from '@/atoms/authModal.atom';
import { FC } from 'react';
import { useSetRecoilState } from 'recoil';

type Props = {};

export const Navbar: FC<Props> = () => {
  const setAuthModalState = useSetRecoilState(authModalAtom);

  const handleClicked = () => {
    setAuthModalState({ isOpen: true, type: 'login' });
  };

  return (
    <nav className="flex items-center justify-between sm:px-12 px-2 md:px-24">
      <Link href="/" className="flex items-center justify-center h-20">
        <Image
          src="/logo.png"
          alt="LeetCode Logo"
          className="h-full"
          width={200}
          height={200}
        />
      </Link>

      <div className="flex items-center">
        <button
          className="bg-brand-orange text-white px-2 py-1 sm:px-4 rounded-md text-sm font-medium hover:text-brand-orange hover:bg-white hover:border-brand-orange border-2 border-transparent transition-all"
          onClick={handleClicked}
        >
          Sign In
        </button>
      </div>
    </nav>
  );
};
