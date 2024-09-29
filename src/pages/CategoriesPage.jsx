import HomeIcon from "../assets/image/all_news_feed.svg";
import AllHeroes from "../assets/image/all_heroes.svg";
import BasicGuide from "../assets/image/basic-guide.svg";
import AdvancedGuide from "../assets/image/advanced-guide.svg";
import { Link } from "react-router-dom";
import LoadingRow from "../components/LoadingRow";
import { useState, useEffect } from "react";
import axios from "axios";

function CategoriesPage() {

    const [categories, setCategories] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        async function fetchCategories() {
            try {
                setIsLoading(true);
                const response = await axios.get(`https://b5929f5cc1a1708a.mokky.dev/category/`);
                setCategories(response.data);
            } catch(e) {
                console.log(e);
            } finally {
                setIsLoading(false);
            }
        }
        fetchCategories();
    }, []);

    return (
        <section class="mobile-block">
            <div class="mobile-block__header is-secondary">
                Категории
            </div>
            {isLoading ? (<LoadingRow />) : (
                <div class="container"> 
                    <div class="category-row">
                        <Link to="/" class="category-item">
                            <img src={HomeIcon} alt="News Feed" class="category-item__img" />
                            <span class="category-item__title">Все новости</span>
                        </Link>
                        <Link to="/heroes" class="category-item">
                            <img src={AllHeroes} alt="Heroes" class="category-item__img" />
                            <span class="category-item__title">Все герои</span>
                        </Link>
                        <Link to="/guides/basic" class="category-item">
                            <img src={BasicGuide} alt="Basic" class="category-item__img" />
                            <span class="category-item__title">Базовое руководство</span>
                        </Link>
                        <Link to="/guides/advanced" class="category-item">
                            <img src={AdvancedGuide} alt="Advanced" class="category-item__img" />
                            <span class="category-item__title">Продвинутое руководство</span>
                        </Link>
                    </div>
                </div>
            )}

        </section>
    );
}

export default CategoriesPage;