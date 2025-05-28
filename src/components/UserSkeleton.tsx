
import React from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import { Card, CardContent } from '@/components/ui/card';

const UserSkeleton = () => {
  return (
    <Card className="overflow-hidden">
      <div className="p-6">
        <div className="w-16 h-16 mx-auto mb-4">
          <Skeleton className="w-full h-full rounded-full" />
        </div>
        <CardContent className="p-0 space-y-4 text-center">
          <div className="space-y-2">
            <Skeleton className="h-6 w-32 mx-auto" />
            <Skeleton className="h-5 w-20 mx-auto" />
          </div>
          <div className="space-y-3">
            <Skeleton className="h-4 w-40 mx-auto" />
            <Skeleton className="h-4 w-32 mx-auto" />
            <Skeleton className="h-4 w-48 mx-auto" />
          </div>
        </CardContent>
      </div>
    </Card>
  );
};

const UserSkeletonGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {Array.from({ length: 8 }).map((_, index) => (
        <UserSkeleton key={index} />
      ))}
    </div>
  );
};

export default UserSkeletonGrid;
