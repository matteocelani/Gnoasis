import React from 'react';
import { Button } from '@/components/ui/button';

type ActionButton = {
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
  isActive?: boolean;
  activeClassName?: string;
};

type ActionButtonsProps = {
  actions: ActionButton[];
};

export function ActionButtons({ actions }: ActionButtonsProps) {
  return (
    <div className="flex justify-center space-x-8">
      {actions.map((action, index) => (
        <div key={index} className="flex flex-col items-center">
          <Button
            variant="outline"
            size="icon"
            onClick={action.onClick}
            className={`rounded-full w-14 h-14 ${
              action.isActive && action.activeClassName
                ? action.activeClassName
                : 'bg-background dark:bg-background text-foreground dark:text-foreground'
            }`}
          >
            {action.icon}
          </Button>
          <span className="text-xs mt-2">{action.label}</span>
        </div>
      ))}
    </div>
  );
}
