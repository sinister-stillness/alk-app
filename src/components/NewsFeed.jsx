import PatchBlock from "./PatchBlock";
import { useEffect, useState } from "react";
import axios from "axios";
import LoadingPost from "./LoadingPost";
import Error from "./Error";
function NewsFeed() {

    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        async function fetchPosts() {
            try {
                setIsLoading(true);
                const response = await axios.get('https://b5929f5cc1a1708a.mokky.dev/post');
                setPosts(response.data);
            } catch(error) {
                setIsError(true);
                console.log(error);
            } finally {
                setIsLoading(false);
            }
        }
        fetchPosts();
    }, []);

    if (isError) {
        return <Error />
    }

    return (
        <div class="new-patches-block">
            {isLoading ? (<LoadingPost />) : (
                <>
                    {posts.map((post) => (
                    <PatchBlock key={post.id} post={post}/>
                    ))}
               </>
            )}
        </div>
    );
}

export default NewsFeed;