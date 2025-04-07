export interface Author {
  createdAt: string;
  id: string;
  name: string;
  profilePicture: string;
  updatedAt: string;
}

export interface Category {
  createdAt: string;
  id: string;
  name: string;
  postId: string;
  updatedAt: string;
}

export interface Post {
  author: Author;
  authorId: string;
  categories: Category[];
  content: string;
  createdAt: string;
  id: string;
  thumbnailUrl: string;
  title: string;
  updatedAt: string;
}
