import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
// Importing Constants
import { TAB_ROUTES } from '@/lib/constants/navigation';

export default function TabBar() {
  const router = useRouter();

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-background border-t border-gray-200 dark:border-gray-700">
      <div className="grid grid-cols-4 h-16">
        {TAB_ROUTES.map((tab) => (
          <Link
            key={tab.name}
            href={tab.href}
            className={`flex flex-col items-center justify-center ${
              router.pathname === tab.href
                ? 'text-primary'
                : 'text-muted-foreground'
            }`}
          >
            <tab.icon className="h-5 w-5" />
            <span className="text-xs mt-1">{tab.name}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
}
