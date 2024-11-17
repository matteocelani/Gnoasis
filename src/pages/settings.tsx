import React from 'react';
import Meta from '@/components/Meta';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card';

export default function Settings() {
  return (
    <>
      <Meta />
      <div className="container mx-auto px-4 py-16 flex flex-1 flex-col items-center justify-center">
        <Card className="w-full max-w-md shadow-md rounded-xl">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">
              Settings Under Construction
            </CardTitle>
            <CardDescription className="text-center">
              We&apos;re fine-tuning your personalization options.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <p className="mb-6">
              Stay tuned for advanced settings to customize your experience.
            </p>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
