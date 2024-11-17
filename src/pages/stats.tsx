import React from 'react';
import Meta from '@/components/Meta';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card';

export default function Stats() {
  return (
    <>
      <Meta />
      <div className="container mx-auto px-4 py-16 flex flex-1 flex-col items-center justify-center">
        <Card className="w-full max-w-md shadow-md rounded-xl">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">
              Stats Dashboard Incoming
            </CardTitle>
            <CardDescription className="text-center">
              We&apos;re crunching numbers to bring you insightful statistics.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <p className="mb-6">
              Our analytics team is preparing comprehensive stats to help you
              make informed decisions.
            </p>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
