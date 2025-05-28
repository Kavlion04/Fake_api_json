
import React, { memo, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { User, MapPin, Phone, Mail } from 'lucide-react';
import type { User as UserType } from '@/hooks/useUsers';

interface UserCardProps {
  user: UserType;
  index: number;
}

const UserCard = memo<UserCardProps>(({ user, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card 
      className="group overflow-hidden transition-all duration-500 hover:shadow-xl hover:-translate-y-2 cursor-pointer animate-fade-in border-0 bg-white/80 backdrop-blur-sm"
      style={{ 
        animationDelay: `${index * 100}ms`,
        animationFillMode: 'both'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative p-6">
        {/* Avatar */}
        <div className={`w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-4 mx-auto transition-all duration-300 ${
          isHovered ? 'scale-110' : 'scale-100'
        }`}>
          <User className="h-8 w-8 text-white" />
        </div>

        <CardContent className="p-0 space-y-4 text-center">
          <div>
            <h3 className="font-bold text-xl text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
              {user.name.firstname} {user.name.lastname}
            </h3>
            <Badge variant="secondary" className="mt-2">
              @{user.username}
            </Badge>
          </div>

          <div className="space-y-3 text-sm text-gray-600">
            <div className="flex items-center justify-center gap-2">
              <Mail className="h-4 w-4 text-blue-500" />
              <span className="truncate">{user.email}</span>
            </div>
            
            <div className="flex items-center justify-center gap-2">
              <Phone className="h-4 w-4 text-green-500" />
              <span>{user.phone}</span>
            </div>
            
            <div className="flex items-center justify-center gap-2">
              <MapPin className="h-4 w-4 text-red-500" />
              <span className="text-center">
                {user.address.street} {user.address.number}, {user.address.city}
              </span>
            </div>
          </div>
        </CardContent>
      </div>
    </Card>
  );
});

UserCard.displayName = 'UserCard';

export default UserCard;
