import React from 'react';
import Meta from '@/components/Meta';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card';

export default function Payments() {
  return (
    <>
      <Meta />
      <div className="container mx-auto px-4 py-16 flex flex-1 flex-col items-center justify-center">
        <Card className="w-full max-w-md shadow-md rounded-xl">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">
              Payments Coming Soon
            </CardTitle>
            <CardDescription className="text-center">
              We&apos;re working on secure and efficient payment solutions.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <p className="mb-6">
              Our team is developing cutting-edge payment features to enhance
              your experience.
            </p>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
