import { useAuthorContext } from "../../context/authors/AuthorContext";

const DebugAuthorContext = () => {
  const { state } = useAuthorContext();

  if (state.loading) return <p>Loading authors...</p>;

  return (
    <div>
      <h2>Authors Loaded: {state.authors.length}</h2>
      <ul>
        {state.authors.map((author) => (
          <li key={author.id}>
            <img
              src={author.profilePicture}
              width={24}
              style={{ borderRadius: "50%" }}
            />{" "}
            {author.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DebugAuthorContext;
