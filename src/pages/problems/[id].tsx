import type { NextPage } from 'next';
import { Topbar } from '@/components/Topbar';
import { Workspace } from '@/components/Workspace';

const Problem: NextPage = () => {
  return (
    <main>
      <Topbar problemPage />
      <Workspace />
    </main>
  );
};

export default Problem;
