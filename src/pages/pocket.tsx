import React from 'react';
import Meta from '@/components/Meta';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card';

export default function Pocket() {
  return (
    <>
      <Meta />
      <div className="container mx-auto px-4 py-16 flex flex-1 flex-col items-center justify-center">
        <Card className="w-full max-w-md shadow-md rounded-xl">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">
              Pocket Feature Coming Soon
            </CardTitle>
            <CardDescription className="text-center">
              We&apos;re crafting a smart way to manage your digital assets.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <p className="mb-6">
              Our team is developing an innovative pocket system to help you
              organize and access your crypto with ease.
            </p>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
