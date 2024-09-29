import BackButton from "../assets/image/back-button.svg";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import LoadingDetail from "../components/LoadingDetail";
import Error from "../components/Error";
function PostDetailPage() {

    const {id} = useParams();
    const [post, setPost] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        async function fetchPost() {
            try {
                setIsLoading(true);
                const response = await axios.get(`https://b5929f5cc1a1708a.mokky.dev/post/${id}`);
                setPost(response.data);
            } catch (error) {
                setIsError(true);
                console.log(error);
            } finally {
                setIsLoading(false);
            }
        }
        fetchPost();
    }, [id]);

    if (isError) {
        return <Error />
    }

    return (
        <section class="mobile-block">
            <Link to="/" class="back-block__header">
                <div class="container">
                    <img src={BackButton} alt="Back button" />
                    Назад
                </div>
            </Link>
            {isLoading ? (<LoadingDetail />) : (
                <div class="container">
                    <div class="post-block">
                        <h3 class="patch-block__title">{post.title}</h3>
                        <span class="patch-block__date">{post.date}</span>
                        <img src={post.imageUrl} alt={post.title} />
                        <p class="description">
                            {post.description}
                        </p>
                    </div>
                </div>
            )}

        </section>
    );
}

export default PostDetailPage;