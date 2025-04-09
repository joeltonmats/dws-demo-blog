import React from "react";
import styled from "styled-components";
import { Post } from "../../types";
import PostCard from "../Post/PostCard";
import NoPostsFound from "../NoPostsFound/NoPostsFound";

interface PostListProps {
  posts: Post[];
  onClickPost?: (id: string) => void;
}

const GridWrapper = styled.div`
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  justify-content: center;
  margin: 0 auto;
  max-width: 1120px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  @media (min-width: 769px) and (max-width: 1023px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const PostList: React.FC<PostListProps> = ({ posts, onClickPost }) => {
  if (!posts.length) {
    return <NoPostsFound />;
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
