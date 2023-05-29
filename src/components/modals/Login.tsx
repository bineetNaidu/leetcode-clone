import { authModalAtom } from '@/atoms/authModal.atom';
import { FC, useEffect, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { auth } from '@/lib/firebase';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useRouter } from 'next/router';

export const Login: FC = () => {
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
  });
  const setAuthModalState = useSetRecoilState(authModalAtom);
  const [loginWithEmailAndPassword, authUser, isLoading, error] =
    useSignInWithEmailAndPassword(auth);

  const router = useRouter();

  const handleRegisterClicked = () => {
    setAuthModalState((prev) => ({ ...prev, type: 'register' }));
  };

  const handleForgotPasswordClicked = () => {
    setAuthModalState((prev) => ({ ...prev, type: 'forgotPassword' }));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const { email, password } = inputs;

      if (!email || !password) return alert('Please fill in all fields');

      const user = await loginWithEmailAndPassword(email, password);

      if (!user) return;

      router.push('/');
    } catch (error: any) {
      console.error(error);
      alert(error.message);
    }
  };

  useEffect(() => {
    if (error) {
      alert(error.message);
    }
  }, [error]);

  return (
    <form className="space-y-6 px-6 pb-4" onSubmit={handleSubmit}>
      <h3 className="text-xl font-medium text-white">Sign in to LeetClone</h3>

      <div>
        <label
          htmlFor="email"
          className="text-sm font-medium block mb-2 text-gray-300"
        >
          Your Email
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
          htmlFor="password"
          className="text-sm font-medium block mb-2 text-gray-300"
        >
          Your Password
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
        disabled={isLoading}
      >
        {isLoading ? 'signing you in...' : 'Sign In'}
      </button>
      <button className="flex w-full justify-end">
        <a
          href="#"
          className="text-sm block text-brand-orange hover:underline w-full text-right"
          onClick={handleForgotPasswordClicked}
        >
          Forgot Password?
        </a>
      </button>
      <div className="text-sm font-medium text-gray-300">
        Not Registered?{' '}
        <a
          href="#"
          className="text-blue-700 hover:underline"
          onClick={handleRegisterClicked}
        >
          Create account
        </a>
      </div>
    </form>
  );
};
