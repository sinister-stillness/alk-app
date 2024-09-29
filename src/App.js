import "./assets/css/style.css";
import Header from "./components/Header";
import MainPage from "./pages/MainPage";
import PostDetailPage from "./pages/PostDetailPage";
import CategoriesPage from "./pages/CategoriesPage";
import HeroesPage from "./pages/HeroesPage";
import {Routes, Route} from "react-router-dom";
import BasicGuide from "./pages/BasicGuide";
import AdvancedGuide from "./pages/AdvancedGuide";

function App() {
  return (
    <>
      <Header />
        <main>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/post/:id" element={<PostDetailPage />} />
            <Route path="/categories" element={<CategoriesPage />} />
            <Route path="/heroes" element={<HeroesPage />} />
            <Route path="/guides/basic" element={<BasicGuide />} />
            <Route path="/guides/advanced" element={<AdvancedGuide />} />
          </Routes>
        </main>
    </>
  );
}

export default App;
