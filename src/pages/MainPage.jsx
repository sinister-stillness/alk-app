import NewsFeed from "../components/NewsFeed";

function MainPage() {
    return(
        <section class="mobile-block">
            <div class="mobile-block__header is-secondary">
                Все новости
            </div>
            <NewsFeed />
        </section>
    );
}

export default MainPage;