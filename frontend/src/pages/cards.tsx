import React, { Fragment, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
// Importing components
import Meta from '@/components/Meta';
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
// Importing Icons
import {
  Eye,
  EyeOff,
  Lock,
  Unlock,
  Settings,
  ChevronRight,
} from 'lucide-react';

// Mock data
const cardData = {
  lastFourDigits: '1234',
  balance: '€1,234.56',
  fullNumber: '1234 5678 9012 3456',
  expiryDate: '12/25',
  cvv: '123',
};

const transactions = [
  { id: 1, merchant: 'Netflix', amount: '-€12.99', date: '2023-06-15' },
  { id: 2, merchant: 'Uber', amount: '-€24.50', date: '2023-06-14' },
  { id: 3, merchant: 'Starbucks', amount: '-€4.75', date: '2023-06-13' },
];

export default function Home() {
  const [showDetails, setShowDetails] = useState(false);
  const [isFrozen, setIsFrozen] = useState(false);
  const router = useRouter();

  const handleShowDetails = () => {
    setShowDetails(!showDetails);
  };

  const handleFreeze = () => {
    setIsFrozen(!isFrozen);
  };

  const handleSettings = () => {
    router.push('/card-settings');
  };

  return (
    <Fragment>
      <Meta />

      <div className="w-full flex flex-col space-y-6">
        {/* Card Display */}
        <div className="relative w-full aspect-[1.58/1]">
          <Card className="absolute w-full h-full bg-gradient-to-br from-green-400 to-green-600 dark:from-green-600 dark:to-green-800 text-white p-6 flex flex-col justify-between rounded-2xl overflow-hidden shadow-lg">
            <div className="text-lg font-bold">Gnosis Card</div>
            <div className="text-right">
              <div className="text-sm opacity-80">Balance</div>
              <div className="text-3xl font-bold">{cardData.balance}</div>
              <div className="mt-2 text-lg">•••• {cardData.lastFourDigits}</div>
            </div>
            {/* Overlay for card details */}
            <div
              className={`absolute inset-0 bg-black bg-opacity-90 flex flex-col justify-center items-center transition-opacity duration-300 ${showDetails ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            >
              <div className="text-center">
                <div className="mb-4">
                  <div className="text-sm opacity-80">Card Number</div>
                  <div className="text-lg">{cardData.fullNumber}</div>
                </div>
                <div className="flex justify-center space-x-8">
                  <div>
                    <div className="text-sm opacity-80">Expiry Date</div>
                    <div>{cardData.expiryDate}</div>
                  </div>
                  <div>
                    <div className="text-sm opacity-80">CVV</div>
                    <div>{cardData.cvv}</div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Card Actions */}
        <div className="flex justify-center space-x-8">
          <div className="flex flex-col items-center">
            <Button
              variant="outline"
              size="icon"
              onClick={handleShowDetails}
              className={`rounded-full w-14 h-14 ${
                showDetails
                  ? 'bg-warning dark:bg-warning text-black dark:text-black'
                  : 'bg-background dark:bg-background text-foreground dark:text-foreground'
              }`}
            >
              {showDetails ? <EyeOff size={24} /> : <Eye size={24} />}
            </Button>
            <span className="text-xs mt-2">
              {showDetails ? 'Hide' : 'Show'}
            </span>
          </div>
          <div className="flex flex-col items-center">
            <Button
              variant="outline"
              size="icon"
              onClick={handleFreeze}
              className={`rounded-full w-14 h-14 ${
                isFrozen
                  ? 'bg-info dark:bg-info text-white dark:text-white'
                  : 'bg-background dark:bg-background text-foreground dark:text-foreground'
              }`}
            >
              {isFrozen ? <Lock size={24} /> : <Unlock size={24} />}
            </Button>
            <span className="text-xs mt-2">
              {isFrozen ? 'Unfreeze' : 'Freeze'}
            </span>
          </div>
          <div className="flex flex-col items-center">
            <Button
              variant="outline"
              size="icon"
              onClick={handleSettings}
              className="rounded-full w-14 h-14 bg-background dark:bg-background text-foreground dark:text-foreground"
            >
              <Settings size={24} />
            </Button>
            <span className="text-xs mt-2">Settings</span>
          </div>
        </div>

        {/* Recent Transactions */}
        <Card className="shadow-md">
          <CardHeader>
            <h4 className="text-lg font-semibold">Recent Transactions</h4>
          </CardHeader>
          <CardContent className="space-y-4">
            {transactions.map((transaction) => (
              <div
                key={transaction.id}
                className="flex justify-between items-center p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors duration-200"
              >
                <div>
                  <div className="font-medium">{transaction.merchant}</div>
                  <div className="text-sm text-muted-foreground">
                    {transaction.date}
                  </div>
                </div>
                <div className="font-semibold">{transaction.amount}</div>
              </div>
            ))}
          </CardContent>
          <CardFooter>
            <Link
              href="/card-transaction"
              className="flex items-center justify-between w-full text-sm text-primary hover:text-primary/80 transition-colors duration-200"
            >
              <span>See All Transactions</span>
              <ChevronRight size={20} />
            </Link>
          </CardFooter>
        </Card>
      </div>
    </Fragment>
  );
}
