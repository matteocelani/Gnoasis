import React, { createContext, useState, useMemo } from 'react';
// Importing Types
import { EmailContextType, EmailProviderProps } from '@/lib/types/context';

export const EmailContext = createContext<EmailContextType | undefined>(
  undefined
);

export function EmailProvider({
  children,
}: EmailProviderProps): React.JSX.Element {
  const [email, setEmail] = useState<string>('');

  const value = useMemo(() => ({ email, setEmail }), [email, setEmail]);

  return (
    <EmailContext.Provider value={value}>{children}</EmailContext.Provider>
  );
}
