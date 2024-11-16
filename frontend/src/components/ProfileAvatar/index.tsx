import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { getShortAddress } from '@/lib/utils/addressUtils';

type ProfileAvatarProps = {
  address: string;
};

export function ProfileAvatar({ address }: ProfileAvatarProps) {
  return (
    <div className="flex flex-col items-center">
      <Avatar className="w-24 h-24">
        <AvatarImage src="https://github.com/shadcn.png" alt="Profile" />
        <AvatarFallback>
          {address ? address.slice(0, 2).toUpperCase() : 'User'}
        </AvatarFallback>
      </Avatar>
      <p className="mt-4 text-lg font-medium">{getShortAddress(address)}</p>
    </div>
  );
}
