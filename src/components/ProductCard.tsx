
import { useState, useCallback } from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Star, ShoppingCart } from 'lucide-react';
import { Product } from '@/hooks/useProducts';
import { useCart } from '@/contexts/CartContext';

interface ProductCardProps {
  product: Product;
  index: number;
}

const ProductCard = ({ product, index }: ProductCardProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const { addToCart } = useCart();

  const handleAddToCart = useCallback(() => {
    addToCart(product);
  }, [addToCart, product]);

  const handleQuickAdd = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product);
  }, [addToCart, product]);

  return (
    <Card 
      className="group overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 cursor-pointer animate-fade-in border-0 bg-white/80 backdrop-blur-sm"
      style={{ 
        animationDelay: `${index * 100}ms`,
        animationFillMode: 'both'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden ">
        <div 
          className={`aspect-square p-6 transition-all duration-700 ${
            isHovered ? 'scale-110' : 'scale-100'
          }`}
        >
          <img
            src={product.image}
            alt={product.title}
            className={`w-full h-full object-contain  transition-all duration-500 ${
              imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
            onLoad={() => setImageLoaded(true)}
          />
        </div>
        
        {/* Overlay that appears on hover */}
        <div className={`absolute inset-0 bg-black/20 transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`} />
        
        {/* Category badge */}
        <Badge 
          variant="secondary" 
          className="absolute top-3 left-3 bg-white/90 text-gray-800 capitalize"
        >
          {product.category}
        </Badge>
        
        {/* Quick add button that slides in on hover */}
        <Button
          size="sm"
          className={`absolute top-3 right-3 transition-all duration-300 ${
            isHovered ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
          }`}
          onClick={handleQuickAdd}
        >
          <ShoppingCart className="h-4 w-4" />
        </Button>
      </div>

      <CardContent className="p-4 space-y-3">
        <h3 className="font-semibold text-lg line-clamp-2 group-hover:text-blue-600 transition-colors duration-300">
          {product.title}
        </h3>
        
        <p className="text-sm text-gray-600 line-clamp-2">
          {product.description}
        </p>
        
        <div className="flex items-center gap-2">
          <div className="flex items-center">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium ml-1">
              {product.rating.rate}
            </span>
          </div>
          <span className="text-xs text-gray-500">
            ({product.rating.count} reviews)
          </span>
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0 flex items-center justify-between">
        <div className="space-y-1">
          <p className="text-2xl font-bold text-green-600">
            ${product.price}
          </p>
        </div>
        
        <Button 
          className="transition-all duration-300 hover:scale-105"
          variant="outline"
          onClick={handleAddToCart}
        >
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
