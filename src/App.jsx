import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import "./App.css";

// ======================= Components ========================= \\
import Navigation from "./components/desktopNavigation";
import MobileNavigation from "./components/mobileNavigation";
import Footer from "./components/footer";

// ======================= Pages ========================= \\
import HomePage from "./pages/home";
import ProductsPage from "./pages/products";
import ContactPage from "./pages/contact";
import AboutPage from "./pages/about";
import PartnersPage from "./pages/partners";
import NewsPage from "./pages/news";
import CurrentProjectPage from "./pages/currentProjects";
import FinishedProjectsPage from "./pages/finishedProjects";
import ProductDetailPage from "./pages/productDetail";
import NewsDetailPage from "./pages/newsDetail";

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
          <Route path="/product-detail" element={<ProductDetailPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about-us" element={<AboutPage />} />
          <Route path="/partners" element={<PartnersPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/news-detail" element={<NewsDetailPage />} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </Router>
  );
}

export default App;
