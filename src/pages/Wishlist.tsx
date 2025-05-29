import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useWishlist } from "@/contexts/WishlistContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Heart, ShoppingBag, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Wishlist = () => {
  const { wishlist, toggleWishlist, clearWishlist, wishlistCount } =
    useWishlist();
  const navigate = useNavigate();

  if (wishlistCount === 0) {
    return (
      <div>
        <Header />
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
            <ShoppingBag className="h-16 w-16 text-gray-400 mb-4" />
            <h2 className="text-2xl font-semibold mb-2">
              Your wishlist is empty
            </h2>
            <p className="text-gray-600 mb-6">
              Add items to your wishlist to see them here
            </p>
            <Button onClick={() => navigate("/products")}>
              Browse Products
            </Button>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="text-center py-12 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            My Wishlist
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Your favorite products are saved here.
          </p>
        </div>

        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Wishlist ({wishlistCount})</h1>
          <Button variant="destructive" onClick={clearWishlist}>
            Clear Wishlist
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {wishlist.map((product) => (
            <Card key={product.id} className="overflow-hidden">
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-48 object-contain p-4"
                />
                <Badge className="absolute top-2 left-2">
                  {product.category}
                </Badge>
              </div>

              <CardContent className="p-4">
                <h3 className="font-semibold text-lg mb-2 line-clamp-2">
                  {product.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                  {product.description}
                </p>
                <div className="flex items-center gap-2 mb-4">
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
                <p className="text-2xl font-bold text-green-600">
                  ${product.price}
                </p>
              </CardContent>

              <CardFooter className="p-4 pt-0 flex justify-between items-center">
                <Button
                  variant="outline"
                  onClick={() => navigate(`/products/${product.id}`)}
                >
                  View Details
                </Button>
                <div className="flex items-center space-x-2">
                  <Switch
                    checked={true}
                    onCheckedChange={() => toggleWishlist(product)}
                    className="data-[state=checked]:bg-red-500"
                  />
                  <Heart className="h-4 w-4 text-red-500 fill-current" />
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Wishlist;
