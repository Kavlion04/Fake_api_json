
import { ShoppingBag,  Users, Home, Package } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '@/contexts/CartContext';

const Header = () => {
  const { totalItems } = useCart();
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <ShoppingBag className="h-8 w-8 text-blue-600" />
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              StoreApi
            </h1>
          </Link>
          
          <div className="flex items-center space-x-2">
            <Link to="/">
              <Button 
                variant={location.pathname === '/' ? 'default' : 'ghost'} 
                size="sm"
                className="font-bold"
              >
                <Home className="h-4 w-4 mr-2" />
                <span className="hidden sm:inline">Home</span>
              </Button>
            </Link>

            <Link to="/products">
              <Button 
                variant={location.pathname === '/products' ? 'default' : 'ghost'} 
                size="sm"
                className="font-bold"
              >
                <Package className="h-4 w-4 mr-2" />
                <span className="hidden sm:inline">Products</span>
              </Button>
            </Link>
            
            <Link to="/users">
              <Button 
                variant={location.pathname === '/users' ? 'default' : 'ghost'} 
                size="sm"
                className="font-bold"
              >
                <Users className="h-4 w-4 mr-2" />
                <span className="hidden sm:inline">Users</span>
              </Button>
            </Link>
            
            <Link to="/cart">
              <Button 
                variant={location.pathname === '/cart' ? 'default' : 'outline'} 
                size="sm" 
                className="relative font-bold"
              >
                <ShoppingBag className="h-4 w-4 mr-2" />
                <span className="hidden sm:inline">Cart</span>
                {totalItems > 0 && (
                  <Badge 
                    variant="destructive" 
                    className="absolute -top-2 -right-2 h-5 w-5 p-0 flex items-center justify-center text-xs"
                  >
                    {totalItems}
                  </Badge>
                )}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
