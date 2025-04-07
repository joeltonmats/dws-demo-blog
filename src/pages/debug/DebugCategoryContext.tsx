import { useCategoryContext } from "../../context/categories/CategoryContext";

const DebugCategoryContext = () => {
  const { state } = useCategoryContext();

  if (state.loading) return <p>Loading categories...</p>;

  return (
    <div>
      <h2>Categories Loaded: {state.categories.length}</h2>
      <ul>
        {state.categories.map((category) => (
          <li key={category.id}>{category.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default DebugCategoryContext;
