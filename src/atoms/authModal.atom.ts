import { atom } from 'recoil';

type AuthModalState = {
  isOpen: boolean;
  type: 'login' | 'register' | 'forgotPassword';
};

const initialState: AuthModalState = {
  isOpen: false,
  type: 'login',
};

export const authModalAtom = atom<AuthModalState>({
  default: initialState,
  key: 'authModalAtom',
});
