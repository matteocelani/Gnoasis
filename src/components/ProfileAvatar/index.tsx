import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { getShortAddress } from '@/lib/utils/addressUtils';

type ProfileAvatarProps = {
  address: string;
};

export function ProfileAvatar({ address }: ProfileAvatarProps) {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).catch((err) => {
      console.error('Error copying to clipboard:', err);
    });
  };

  return (
    <div className="flex flex-col items-center">
      <Avatar className="w-24 h-24">
        <AvatarImage src="https://github.com/shadcn.png" alt="Profile" />
        <AvatarFallback>
          {address ? address.slice(0, 2).toUpperCase() : 'User'}
        </AvatarFallback>
      </Avatar>
      <p
        className="mt-4 text-lg font-medium"
        onClick={() => copyToClipboard(address)}
      >
        {getShortAddress(address)}
      </p>
    </div>
  );
}
