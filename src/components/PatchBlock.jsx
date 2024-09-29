import { Link } from "react-router-dom";
function PatchBlock ({post}) {
    return (
        <Link to={`/post/${post.id}`} class="patch-block">
            <div class="container">
                <h3 class="patch-block__title">{post.title}</h3>
                <span class="patch-block__date">{post.date}</span>
                <span class="patch-block__version">{post.version}</span>
            </div>
        </Link>
    );
}

export default PatchBlock;