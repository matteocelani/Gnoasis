import { useState, useCallback } from 'react';
// Importing Wagmi
import { useConnect } from 'wagmi';
// Importing Components
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import ConnectButton from '@/components/Login/ConnectButton';
// Importing Icons
import { FaGoogle, FaApple, FaDiscord, FaTwitter } from 'react-icons/fa';

export function Login() {
  const { connectors, connect } = useConnect();
  const [email, setEmail] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleEmailLogin = useCallback(() => {
    if (!email) {
      setError('Email is required');
      setTimeout(() => setError(null), 3000);
      return;
    }

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,10}$/;
    if (!emailRegex.test(email)) {
      setError('Invalid email format');
      setTimeout(() => setError(null), 3000);
      return;
    }

    connect({ connector: connectors[4] });
  }, [email, connect, connectors]);

  return (
    <div className="flex flex-col w-full">
      <Card className="w-full max-w-md bg-white dark:bg-08 border-03 dark:border-07">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-light text-08 dark:text-02 text-center">
            Welcome Back
          </CardTitle>
          <CardDescription className="text-06 dark:text-05 text-center">
            Sign in to your account
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex justify-between space-x-2 w-full">
            {[FaGoogle, FaApple, FaTwitter, FaDiscord].map((Icon, index) => (
              <Button
                key={index}
                variant="outline"
                className="flex-1 h-10"
                onClick={() => connect({ connector: connectors[index] })}
              >
                <Icon className="h-4 w-4" />
              </Button>
            ))}
          </div>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <Separator className="w-full" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white dark:bg-08 px-2 text-06 dark:text-05">
                Or
              </span>
            </div>
          </div>
          <div className="space-y-2">
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-02 dark:bg-07 border-03 dark:border-06"
            />
            <Button
              className="w-full bg-primary text-white"
              onClick={handleEmailLogin}
            >
              Sign In with Email
            </Button>
          </div>
        </CardContent>
        <CardFooter>
          <ConnectButton />
        </CardFooter>
      </Card>
      {error && <p className="text-xs text-red-500 mt-2 text-start">{error}</p>}
    </div>
  );
}
