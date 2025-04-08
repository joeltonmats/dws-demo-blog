import React from "react";
import styled from "styled-components";
import { Post } from "../../types";
import PostCard from "../PostCard";

interface PostListProps {
  posts: Post[];
  onClickPost?: (id: string) => void;
}

const GridWrapper = styled.div`
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(3, 1fr);

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const PostList: React.FC<PostListProps> = ({ posts, onClickPost }) => {
  if (!posts.length) {
    return <p>No posts found.</p>;
  }

  return (
    <GridWrapper>
      {posts.map((post) => (
        <PostCard
          key={post.id}
          post={post}
          onClick={() => onClickPost?.(post.id)}
        />
      ))}
    </GridWrapper>
  );
};

export default PostList;
