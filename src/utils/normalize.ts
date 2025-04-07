/* eslint-disable @typescript-eslint/no-explicit-any */
import { Author, Category, Post } from "../types";

export const normalizePost = (post: any): Post => ({
  id: post.id,
  title: post.title,
  content: post.content,
  thumbnailUrl: post.thumbnail_url,
  createdAt: post.createdAt,
  updatedAt: post.updatedAt,
  authorId: post.authorId,
  author: {
    ...post.author,
    profilePicture: post.author.profilePicture,
  } as Author,
  categories: post.categories.map((c: any) => ({
    id: c.id,
    name: c.name,
    postId: c.postId,
    createdAt: c.createdAt,
    updatedAt: c.updatedAt,
  })) as Category[],
});
