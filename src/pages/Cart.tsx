
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Cart from '@/components/Cart';

const CartPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex flex-col">
      <Header />
      
      <main className="container mx-auto px-4 py-8 flex-1">
        <div className="text-center py-8 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            Shopping Cart
          </h2>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            Review your selected items and proceed to checkout when ready.
          </p>
        </div>

        <div className="flex justify-center animate-fade-in">
          <Cart />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CartPage;
