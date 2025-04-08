import { Category } from "../../types";
import { CategoryAction } from "./categoryActions";

export interface CategoryState {
  categories: Category[];
  loading: boolean;
}

export const initialCategoryState: CategoryState = {
  categories: [],
  loading: true,
};

export const categoryReducer = (
  state: CategoryState,
  action: CategoryAction,
): CategoryState => {
  switch (action.type) {
    case "SET_CATEGORIES":
      return { ...state, categories: action.payload };
    case "SET_LOADING":
      return { ...state, loading: action.payload };
    default:
      return state;
  }
};
