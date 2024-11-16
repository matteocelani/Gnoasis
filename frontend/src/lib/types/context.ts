import { ReactNode } from 'react';

export type EmailContextType = {
  email: string;
  setEmail: (email: string) => void;
};

export type EmailProviderProps = {
  children: ReactNode;
};
