import { Author } from "../../types";

export type AuthorAction =
  | { type: "SET_AUTHORS"; payload: Author[] }
  | { type: "SET_LOADING"; payload: boolean };
