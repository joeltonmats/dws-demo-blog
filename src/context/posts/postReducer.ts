import { Post } from "../../types";
import { PostAction } from "./postActions";

export interface PostState {
  posts: Post[];
  loading: boolean;
}

export const initialPostState: PostState = {
  posts: [],
  loading: true,
};

export const postReducer = (
  state: PostState,
  action: PostAction
): PostState => {
  switch (action.type) {
    case "SET_POSTS":
      return { ...state, posts: action.payload };
    case "SET_LOADING":
      return { ...state, loading: action.payload };
    default:
      return state;
  }
};
