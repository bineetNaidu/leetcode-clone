import { auth } from '@/lib/firebase';
import { FC } from 'react';
import { useSignOut } from 'react-firebase-hooks/auth';
import { FiLogOut } from 'react-icons/fi';

type Props = {};

export const LogoutBtn: FC<Props> = () => {
  const [logout, loading] = useSignOut(auth);

  const handleLogout = async () => {
    await logout();
  };

  return (
    <button
      className="bg-dark-fill-3 py-1.5 px-3 cursor-pointer rounded text-brand-orange disabled:opacity-50"
      onClick={handleLogout}
      disabled={loading}
    >
      <FiLogOut />
    </button>
  );
};
