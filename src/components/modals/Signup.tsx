import { authModalAtom } from '@/atoms/authModal.atom';
import { FC, useEffect, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '@/lib/firebase';
import { updateCurrentUser } from 'firebase/auth';
import { useRouter } from 'next/router';

export const Signup: FC = () => {
  const [inputs, setInputs] = useState({
    email: '',
    displayName: '',
    password: '',
  });
  const setAuthModalState = useSetRecoilState(authModalAtom);
  const [createUser, authUser, isLoading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const { email, password, displayName } = inputs;

      if (!email || !password || !displayName)
        return alert('Please fill in all fields');

      const newUser = await createUser(email, password);

      if (!newUser) return;

      router.push('/');
    } catch (error: any) {
      console.error(error);
      alert(error.message);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs((prev) => ({ ...prev, [name]: value }));
  };

  const handleNavigateToLogin = () => {
    setAuthModalState((prev) => ({ ...prev, type: 'login' }));
  };

  useEffect(() => {
    if (error) {
      alert(error.message);
    }
  }, [error]);

  return (
    <form className="space-y-6 px-6 pb-4" onSubmit={handleSubmit}>
      <h3 className="text-xl font-medium text-white">Register to LeetClone</h3>

      <div>
        <label
          htmlFor="email"
          className="text-sm font-medium block mb-2 text-gray-300"
        >
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          className="
            border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
            bg-gray-600 border-gray-500 placeholder-gray-400 text-white
        "
          placeholder="name@company.com"
          onChange={handleInputChange}
          value={inputs.email}
        />
      </div>

      <div>
        <label
          htmlFor="displayName"
          className="text-sm font-medium block mb-2 text-gray-300"
        >
          Name
        </label>
        <input
          type="displayName"
          name="displayName"
          id="displayName"
          className="
            border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
            bg-gray-600 border-gray-500 placeholder-gray-400 text-white
        "
          placeholder="John Doe"
          onChange={handleInputChange}
          value={inputs.displayName}
        />
      </div>

      <div>
        <label
          htmlFor="password"
          className="text-sm font-medium block mb-2 text-gray-300"
        >
          Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          className="
            border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
            bg-gray-600 border-gray-500 placeholder-gray-400 text-white
        "
          placeholder="*******"
          onChange={handleInputChange}
          value={inputs.password}
        />
      </div>

      <button
        type="submit"
        className="w-full text-white focus:ring-blue-300 font-medium rounded-lg
                text-sm px-5 py-2.5 text-center bg-brand-orange hover:bg-brand-orange-s
            "
      >
        {isLoading ? 'registering...' : 'Register'}
      </button>

      <div className="text-sm font-medium text-gray-300">
        Already have an account?{' '}
        <a
          href="#"
          className="text-blue-700 hover:underline"
          onClick={handleNavigateToLogin}
        >
          Login
        </a>
      </div>
    </form>
  );
};
