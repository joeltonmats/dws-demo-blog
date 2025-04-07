import { Post } from "../../types";

export type PostAction =
  | { type: "SET_POSTS"; payload: Post[] }
  | { type: "SET_LOADING"; payload: boolean };

export const setPosts = (posts: Post[]) => ({
  type: "SET_POSTS",
  payload: posts,
});

export const setLoading = (loading: boolean) => ({
  type: "SET_LOADING",
  payload: loading,
});
