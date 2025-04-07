import { Category } from "../../types";

export type CategoryAction =
  | { type: "SET_CATEGORIES"; payload: Category[] }
  | { type: "SET_LOADING"; payload: boolean };
