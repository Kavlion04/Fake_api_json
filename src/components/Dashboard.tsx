
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { ShoppingBag, Users, Package, BarChart3, Star, TrendingUp, Heart } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';

const Dashboard = () => {
  const { totalItems, totalPrice } = useCart();

  const dashboardItems = [
    {
      title: 'Products',
      description: 'Browse our amazing product collection',
      icon: Package,
      link: '/',
      color: 'bg-blue-500',
      stats: 'Explore now'
    },
    {
      title: 'Users',
      description: 'Meet our community members',
      icon: Users,
      link: '/users',
      color: 'bg-green-500',
      stats: 'Connect today'
    },
    {
      title: 'Shopping Cart',
      description: 'Review your selected items',
      icon: ShoppingBag,
      link: '/cart',
      color: 'bg-purple-500',
      stats: `${totalItems} items - $${totalPrice.toFixed(2)}`
    },
    {
      title: 'Wishlist ',
      description: 'View performance metrics',
      icon: Heart,
      link: '/wishlist',
      color: 'bg-red-500',
      stats: 'wishlist'
    },
    {
      title: 'Reviews',
      description: 'Customer feedback and ratings',
      icon: Star,
      link: '#',
      color: 'bg-yellow-500',
      stats: 'Coming soon'
    },
    {
      title: 'Trends',
      description: 'Market insights and trends',
      icon: TrendingUp,
      link: '#',
      color: 'bg-red-500',
      stats: 'Coming soon'
    }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Dashboard</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Access all your important features and data from one central location.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {dashboardItems.map((item, index) => (
          <Card 
            key={item.title}
            className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in border-0 bg-white/80 backdrop-blur-sm"
            style={{ 
              animationDelay: `${index * 100}ms`,
              animationFillMode: 'both'
            }}
          >
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between">
                <div className={`w-12 h-12 ${item.color} rounded-lg flex items-center justify-center transition-transform group-hover:scale-110`}>
                  <item.icon className="h-6 w-6 text-white" />
                </div>
                <Badge variant="secondary" className="text-xs">
                  {item.stats}
                </Badge>
              </div>
              <CardTitle className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                {item.title}
              </CardTitle>
              <CardDescription className="text-gray-600">
                {item.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              {item.link !== '#' ? (
                <Link to={item.link}>
                  <Button className="w-full" variant="outline">
                    Access {item.title}
                  </Button>
                </Link>
              ) : (
                <Button className="w-full" variant="outline" disabled>
                  {item.stats}
                </Button>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
