
import { useProducts } from '@/hooks/useProducts';
import ProductGrid from '@/components/ProductGrid';
import ProductSkeletonGrid from '@/components/ProductSkeleton';
import Dashboard from '@/components/Dashboard';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { RefreshCw, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Index = () => {
  const { data: products, isLoading, error, refetch } = useProducts();


  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex flex-col">
      <Header />
      
      <main className="container mx-auto px-4 py-8 flex-1 space-y-16">
        <div className="text-center py-12 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            Welcome to StoreApi
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Your one-stop destination for premium products with seamless shopping experience.
          </p>
        </div>

        <Dashboard />

        {/* <div className="space-y-8">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-semibold text-gray-800">
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
        </div> */}
      </main>

      <Footer />
    </div>
  );
};

export default Index;
