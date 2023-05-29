import Link from 'next/link';
import { FC } from 'react';

type Props = {};

export const Navbar: FC<Props> = () => {
  return (
    <nav className="flex items-center justify-between sm:px-12 px-2 md:px-24">
      <Link href="/" className="flex items-center justify-center h-20">
        <img src="/logo.png" alt="LeetCode Logo" className="h-full" />
      </Link>

      <div className="flex items-center">
        <button className="bg-brand-orange text-white px-2 py-1 sm:px-4 rounded-md text-sm font-medium hover:text-brand-orange hover:bg-white hover:border-brand-orange border-2 border-transparent transition-all">
          Sign In
        </button>
      </div>
    </nav>
  );
};