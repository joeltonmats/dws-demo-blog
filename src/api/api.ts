import axios from "axios";
import { Author, Category, Post } from "../types";
import { normalizePost } from "../utils/normalize";

const BASE_URL = "https://tech-test-backend.dwsbrazil.io";

/* POSTS  */
export const getPosts = async (): Promise<Post[]> => {
  try {
    const response = await axios.get<Post[]>(`${BASE_URL}/posts`);
    return response.data.map(normalizePost);
  } catch (error) {
    console.error("Failed to fetch posts", error);
    throw new Error("Unable to load posts");
  }
};

export const getPostById = async (id: string): Promise<Post> => {
  try {
    const response = await axios.get<Post>(`${BASE_URL}/posts/${id}`);
    return normalizePost(response.data);
  } catch (error) {
    console.error("Failed to fetch post", error);
    throw new Error("Unable to load post");
  }
};

/* AUTHORS  */

export const getAuthors = async (): Promise<Author[]> => {
  try {
    const response = await axios.get<Author[]>(`${BASE_URL}/authors`);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch authors", error);
    throw new Error("Unable to load authors");
  }
};

export const getAuthorById = async (id: string): Promise<Author> => {
  try {
    const response = await axios.get<Author>(`${BASE_URL}/authors/${id}`);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch author", error);
    throw new Error("Unable to load author");
  }
};

/* Categories  */
export const getCategories = async (): Promise<Category[]> => {
  try {
    const response = await axios.get<Category[]>(`${BASE_URL}/categories`);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch categories", error);
    throw new Error("Unable to load categories");
  }
};

export const getCategoryById = async (id: string): Promise<Category> => {
  try {
    const response = await axios.get<Category>(`${BASE_URL}/categories/${id}`);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch category", error);
    throw new Error("Unable to load category");
  }
};
