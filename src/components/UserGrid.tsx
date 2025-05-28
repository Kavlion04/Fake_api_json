
import React, { memo } from 'react';
import UserCard from './UserCard';
import type { User } from '@/hooks/useUsers';

interface UserGridProps {
  users: User[];
}

const UserGrid = memo<UserGridProps>(({ users }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {users.map((user, index) => (
        <UserCard 
          key={user.id} 
          user={user} 
          index={index}
        />
      ))}
    </div>
  );
});

UserGrid.displayName = 'UserGrid';

export default UserGrid;
