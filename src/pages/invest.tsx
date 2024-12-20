import React from 'react';
import Meta from '@/components/Meta';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card';

export default function Invest() {
  return (
    <>
      <Meta />

      <div className="container mx-auto px-4 py-16 flex flex-1 flex-col items-center justify-center">
        <Card className="w-full max-w-md shadow-md rounded-xl">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">
              Coming Soon
            </CardTitle>
            <CardDescription className="text-center">
              We&apos;re working hard to bring you the best investment
              experience.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <p className="mb-6">
              We apologize for the delay. Our team is putting the final touches
              on some exciting features.
            </p>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
