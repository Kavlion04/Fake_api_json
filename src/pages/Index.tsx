
import { useProducts } from '@/hooks/useProducts';
import Dashboard from '@/components/Dashboard';
import Header from '@/components/Header';
import Footer from '@/components/Footer';


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

      </main>

      <Footer />
    </div>
  );
};

export default Index;
