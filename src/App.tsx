import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import "./App.css";

// ======================= Components ========================= \\
import Navigation from "./components/navigation";
import Footer from "./components/footer";

// ======================= Pages ========================= \\
import HomePage from "./pages/home/index";
import ProductsPage from "./pages/products/index";
import ContactPage from "./pages/contact/index";
import AboutPage from "./pages/about/index";
import PartnersPage from "./pages/partners";
import NewsPage from "./pages/news";
import CurrentProjectPage from "./pages/current-projects/index";
import FinishedProjectsPage from "./pages/finished-projects";
import ProductDetailPage from "./pages/products/_page/productDetail";
import NewsDetailPage from "./pages/news/_pages/newsDetail";
import MobileNavigation from "./components/navigation/mobile";

function App() {
  const isDesktopOrLaptop = useMediaQuery({ query: "(min-width: 768px)" });

  return (
    <Router>
      <header className="w-full">
        {isDesktopOrLaptop ? <Navigation /> : <MobileNavigation />}
      </header>
      <main className="h-fit">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/current-projects" element={<CurrentProjectPage />} />
          <Route path="/finished-projects" element={<FinishedProjectsPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:productId" element={<ProductDetailPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about-us" element={<AboutPage />} />
          <Route path="/partners" element={<PartnersPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/news/:newsId" element={<NewsDetailPage />} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </Router>
  );
}

export default App;
