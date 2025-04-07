import React from "react";
import styled from "styled-components";
import { Post } from "../../types";
import PostCard from "../PostCard";

interface PostListProps {
  posts: Post[];
}

const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const PostList: React.FC<PostListProps> = ({ posts }) => {
  if (!posts.length) {
    return <p>No posts found.</p>;
  }

  return (
    <ListWrapper>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </ListWrapper>
  );
};

export default PostList;
