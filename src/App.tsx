import { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { ProductsPage } from './pages/ProductsPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { FeaturesPage } from './pages/FeaturesPage';
import { BlogPage } from './pages/BlogPage';
import { BlogDetailPage } from './pages/BlogDetailPage';
import { TechnologyPage } from './pages/TechnologyPage';
import { ContactPage } from './pages/ContactPage';

export type Route = {
  page: string;
  slug?: string;
};

export default function App() {
  const [currentRoute, setCurrentRoute] = useState<Route>({ page: 'home' });

  const navigate = (page: string, slug?: string) => {
    setCurrentRoute({ page, slug });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (currentRoute.page) {
      case 'home':
        return <HomePage navigate={navigate} />;
      case 'services':
        return <ServicesPage navigate={navigate} />;
      case 'service-detail':
        return <ServiceDetailPage slug={currentRoute.slug!} navigate={navigate} />;
      case 'products':
        return <ProductsPage navigate={navigate} />;
      case 'product-detail':
        return <ProductDetailPage slug={currentRoute.slug!} navigate={navigate} />;
      case 'features':
        return <FeaturesPage />;
      case 'blog':
        return <BlogPage navigate={navigate} />;
      case 'blog-detail':
        return <BlogDetailPage slug={currentRoute.slug!} navigate={navigate} />;
      case 'technology':
        return <TechnologyPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage navigate={navigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Header currentPage={currentRoute.page} navigate={navigate} />
      <main>{renderPage()}</main>
      <Footer navigate={navigate} />
    </div>
  );
}
