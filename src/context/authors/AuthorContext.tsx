import React, {
  createContext,
  useReducer,
  useEffect,
  useContext,
  ReactNode,
} from "react";
import {
  authorReducer,
  initialAuthorState,
  AuthorState,
} from "./authorReducer";
import { AuthorAction } from "./authorActions";
import { getAuthors } from "../../api/api";

const AuthorContext = createContext<{
  state: AuthorState;
  dispatch: React.Dispatch<AuthorAction>;
}>({
  state: initialAuthorState,
  dispatch: () => {},
});

export const AuthorProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(authorReducer, initialAuthorState);

  useEffect(() => {
    const load = async () => {
      dispatch({ type: "SET_LOADING", payload: true });
      try {
        const authors = await getAuthors();
        dispatch({ type: "SET_AUTHORS", payload: authors });
      } catch (err) {
        console.error("Failed to load authors", err);
      } finally {
        dispatch({ type: "SET_LOADING", payload: false });
      }
    };

    load();
  }, []);

  return (
    <AuthorContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthorContext.Provider>
  );
};

export const useAuthorContext = () => useContext(AuthorContext);
