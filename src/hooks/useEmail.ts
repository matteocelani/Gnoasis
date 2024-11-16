import { useContext } from 'react';
// Importing Context
import { EmailContext } from '@/context/EmailContext';
// Importing Types
import { EmailContextType } from '@/lib/types/context';

export const useEmail = (): EmailContextType => {
  const context = useContext(EmailContext);
  if (!context) {
    throw new Error('useEmail must be used within an EmailProvider');
  }
  return context;
};
