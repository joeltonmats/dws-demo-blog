import { Author } from "../../types";
import { AuthorAction } from "./authorActions";

export interface AuthorState {
  authors: Author[];
  loading: boolean;
}

export const initialAuthorState: AuthorState = {
  authors: [],
  loading: true,
};

export const authorReducer = (
  state: AuthorState,
  action: AuthorAction,
): AuthorState => {
  switch (action.type) {
    case "SET_AUTHORS":
      return { ...state, authors: action.payload };
    case "SET_LOADING":
      return { ...state, loading: action.payload };
    default:
      return state;
  }
};
