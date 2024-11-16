import React from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
// Importing Icons
import { CreditCard, PieChart, Moon, Sun } from 'lucide-react';
// Importing Components
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
// Importing Constants
import { HEADER_ROUTES } from '@/lib/constants/navigation';

export default function Header() {
  const { theme, setTheme } = useTheme();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 py-3">
      <div className="flex justify-between items-center">
        <Link href={HEADER_ROUTES.profile.href}>
          <Avatar className="w-10 h-10 cursor-pointer">
            <AvatarImage src="https://github.com/shadcn.png" alt="Profile" />
            <AvatarFallback>User</AvatarFallback>
          </Avatar>
        </Link>
        <div className="flex space-x-3">
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="bg-gray-200 dark:bg-gray-700 p-2 rounded-full shadow-md hover:shadow-lg transition-shadow"
          >
            {theme === 'dark' ? (
              <Sun className="h-5 w-5 text-gray-600 dark:text-gray-300" />
            ) : (
              <Moon className="h-5 w-5 text-gray-600 dark:text-gray-300" />
            )}
          </button>
          <Link href={HEADER_ROUTES.stats.href}>
            <button className="bg-gray-200 dark:bg-gray-700 p-2 rounded-full shadow-md hover:shadow-lg transition-shadow">
              <PieChart className="h-5 w-5 text-gray-600 dark:text-gray-300" />
            </button>
          </Link>
          <Link href={HEADER_ROUTES.cards.href}>
            <button className="bg-gray-200 dark:bg-gray-700 p-2 rounded-full shadow-md hover:shadow-lg transition-shadow">
              <CreditCard className="h-5 w-5 text-gray-600 dark:text-gray-300" />
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
}
