import Link from 'next/link';
import Image from 'next/image';
import { FC } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/lib/firebase';
import { LogoutBtn } from './LogoutBtn';

export const Topbar: FC = () => {
  const [authUser] = useAuthState(auth);
  return (
    <nav className="relative flex h-[50px] w-full shrink-0 items-center px-5 bg-dark-layer-1 text-dark-gray-7">
      <div
        className={`flex w-full items-center justify-between max-w-[1200px] mx-auto`}
      >
        <Link href="/" className="h-[22px] flex-1">
          <Image
            src="/logo-full.png"
            alt="Logo"
            className="h-full"
            height={100}
            width={100}
          />
        </Link>

        <div className="flex items-center space-x-4 flex-1 justify-end">
          <div>
            <a
              href="https://www.buymeacoffee.com/burakorkmezz"
              target="_blank"
              rel="noreferrer"
              className="bg-dark-fill-3 py-1.5 px-3 cursor-pointer rounded text-brand-orange hover:bg-dark-fill-2"
            >
              Premium
            </a>
          </div>
          {!authUser ? (
            <Link href="/auth">
              <button className="bg-dark-fill-3 py-1 px-2 cursor-pointer rounded ">
                Sign In
              </button>
            </Link>
          ) : (
            <div className="cursor-pointer group relative">
              <Image
                src="/avatar.png"
                alt="user profile avatar"
                className="h-8 w-8 rounded-full"
                height={100}
                width={100}
              />
              <div
                className="absolute top-10 left-2/4 -translate-x-2/4  mx-auto bg-dark-layer-1 text-brand-orange p-2 rounded shadow-lg z-40 group-hover:scale-100 scale-0 
		transition-all duration-300 ease-in-out"
              >
                <p className="text-sm">{authUser.email}</p>
              </div>
            </div>
          )}
          {authUser && <LogoutBtn />}
        </div>
      </div>
    </nav>
  );
};
