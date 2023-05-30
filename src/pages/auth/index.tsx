import AuthModal from '@/components/modals/AuthModal';
import Image from 'next/image';
import { authModalAtom } from '@/atoms/authModal.atom';
import { Navbar } from '@/components/Navbar';
import { auth } from '@/lib/firebase';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useRecoilValue } from 'recoil';

const Auth = () => {
  const authModal = useRecoilValue(authModalAtom);
  const [authUser, isLoading] = useAuthState(auth);
  const [pageLoading, setPageLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    if (authUser) router.push('/');
    if (!isLoading && !authUser) setPageLoading(false);
  }, [authUser, isLoading, router]);

  if (pageLoading) return null;

  return (
    <div className="bg-gradient-to-b from-gray-600 to-black h-screen relative">
      <div className="max-w-7xl mx-auto">
        <Navbar />
        <div className="flex items-center justify-center h-[calc(100vh-5rem)] pointer-events-none select-none">
          <Image
            src="/hero.png"
            alt="Banner"
            className="pointer-events-none select-none"
            height={600}
            width={600}
          />
        </div>
        {authModal.isOpen && <AuthModal />}
      </div>
    </div>
  );
};

export default Auth;
