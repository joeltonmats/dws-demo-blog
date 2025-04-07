import { usePostContext } from "../../context/posts/PostContext";

const DebugPostContext = () => {
  const { state } = usePostContext();

  if (state.loading) return <p>Loading posts...</p>;

  return (
    <div>
      <h2>Posts Loaded: {state.posts.length}</h2>
      <ul>
        {state.posts.map((post) => (
          <li key={post.id}>
            <strong>{post.title}</strong> by {post.author.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DebugPostContext;
