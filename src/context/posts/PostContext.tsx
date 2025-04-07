import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useReducer,
} from "react";
import { PostAction } from "./postActions";
import { initialPostState, postReducer, PostState } from "./postReducer";
import { getPosts } from "../../api/api";

const PostContext = createContext<{
  state: PostState;
  dispatch: React.Dispatch<PostAction>;
}>({
  state: initialPostState,
  dispatch: () => {},
});

export const PostProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(postReducer, initialPostState);

  useEffect(() => {
    const load = async () => {
      dispatch({ type: "SET_LOADING", payload: true });
      try {
        const posts = await getPosts();
        dispatch({ type: "SET_POSTS", payload: posts });
      } catch (err) {
        console.error("Failed to load posts", err);
      } finally {
        dispatch({ type: "SET_LOADING", payload: false });
      }
    };

    load();
  }, []);

  return (
    <PostContext.Provider value={{ state, dispatch }}>
      {children}
    </PostContext.Provider>
  );
};

export const usePostContext = () => useContext(PostContext);
