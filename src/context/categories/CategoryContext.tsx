import React, {
  createContext,
  useReducer,
  useEffect,
  useContext,
  ReactNode,
} from "react";
import {
  categoryReducer,
  initialCategoryState,
  CategoryState,
} from "./categoryReducer";
import { CategoryAction } from "./categoryActions";
import { getCategories } from "../../api/api";

const CategoryContext = createContext<{
  state: CategoryState;
  dispatch: React.Dispatch<CategoryAction>;
}>({
  state: initialCategoryState,
  dispatch: () => {},
});

export const CategoryProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(categoryReducer, initialCategoryState);

  useEffect(() => {
    const load = async () => {
      dispatch({ type: "SET_LOADING", payload: true });
      try {
        const categories = await getCategories();
        dispatch({ type: "SET_CATEGORIES", payload: categories });
      } catch (err) {
        console.error("Failed to load categories", err);
      } finally {
        dispatch({ type: "SET_LOADING", payload: false });
      }
    };

    load();
  }, []);

  return (
    <CategoryContext.Provider value={{ state, dispatch }}>
      {children}
    </CategoryContext.Provider>
  );
};

export const useCategoryContext = () => useContext(CategoryContext);
