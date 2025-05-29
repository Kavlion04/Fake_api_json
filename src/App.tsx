import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "@/contexts/CartContext";
import { WishlistProvider } from "@/contexts/WishlistContext";
import { Suspense, lazy } from "react";
import LoadingSpinner from "@/components/LoadingSpinner";
import { User } from "lucide-react";

const Index = lazy(() => import("./pages/Index"));
const Users = lazy(() => import("./pages/Users"));
const Cart = lazy(() => import("./pages/Cart"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Products = lazy(() => import("./pages/Products"));
const ProductDetail = lazy(() => import("./pages/ProductDetail"));
const UserDetail = lazy(() => import("./pages/UserDetail"));
const Wishlist = lazy(() => import("./pages/Wishlist"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <CartProvider>
      <WishlistProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Suspense fallback={<LoadingSpinner />}>
              <Routes>
                <Route path="/" element={<Suspense><Index /></Suspense>} />
                <Route path="/users" element={<Suspense><Users/></Suspense>} />
                <Route path="/users/:id" element={<Suspense><UserDetail/></Suspense>} />
                <Route path="/products" element={<Suspense><Products/></Suspense>} />
                <Route path="/products/:id" element={<Suspense><ProductDetail/></Suspense>} />
                <Route path="/cart" element={<Suspense><Cart/></Suspense>} />
                <Route path="/wishlist" element={<Suspense><Wishlist/></Suspense>} />
                <Route path="*" element={<Suspense><NotFound/></Suspense>} />
              </Routes>
            </Suspense>
          </BrowserRouter>
        </TooltipProvider>
      </WishlistProvider>
    </CartProvider>
  </QueryClientProvider>
);

export default App;
