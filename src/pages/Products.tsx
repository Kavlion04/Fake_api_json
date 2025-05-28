import Footer from "@/components/Footer";
import { AlertDescription } from "@/components/ui/alert";
import { Alert } from "@/components/ui/alert";
import { AlertTriangle } from "lucide-react";
import { RefreshCw } from "lucide-react";
import Header from "@/components/Header";
import { useProducts } from "@/hooks/useProducts";
import React from "react";
import { Button } from "@/components/ui/button";
import ProductSkeletonGrid from "@/components/ProductSkeleton";
import ProductGrid from "@/components/ProductGrid";

const Products = () => {
  const { data: products, isLoading, error, refetch } = useProducts();
  return (
    <div>
      <Header />
      <div className="space-y-8">
        <div className="text-center py-12 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Our Products
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Meet our amazing community of products from around the world.
          </p>
        </div>
        <div className="flex items-center text-center justify-between">
          <h3 className="text-2xl font-semibold p-4 text-gray-800">
            Featured Products
          </h3>
          {products && (
              <p className="text-gray-600">
                {products.length} products available
              </p>
            )}
        </div>
        {error && (
          <Alert className="border-red-200 bg-red-50">
            <AlertTriangle className="h-4 w-4 text-red-600" />
            <AlertDescription className="flex items-center justify-between w-full">
              <span className="text-red-600">
                Failed to load products. Please try again.
              </span>
              <Button
                variant="outline"
                size="sm"
                onClick={() => refetch()}
                className="ml-4"
              >
                <RefreshCw className="h-4 w-4 mr-2" />
                Retry
              </Button>
            </AlertDescription>
          </Alert>
        )}
        {isLoading && <ProductSkeletonGrid />}
        {products && !isLoading && (
          <div className="animate-fade-in">
            <ProductGrid products={products} />
          </div>
        )}
        {!isLoading && !error && products?.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No products found.</p>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Products;
