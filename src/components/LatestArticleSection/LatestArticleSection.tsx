import React from "react";
import styled from "styled-components";
import { Post } from "../../types";
import PostList from "../PostList/PostList";
import { useNavigate } from "react-router-dom";
import texts from "../../constants/constants";

interface LatestArticlesSectionProps {
  posts: Post[];
}

const Section = styled.section`
  margin: 64px auto 0;
  max-width: 1200px;
`;

const Title = styled.h2`
  color: ${({ theme }) => theme.colors.neutrals.darkest};
  font-size: ${({ theme }) => theme.typography.sizes.h2};
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  margin-bottom: 32px;
`;

const LatestArticlesSection: React.FC<LatestArticlesSectionProps> = ({
  posts,
}) => {
  const navigate = useNavigate();

  const handleClick = (id: string) => {
    navigate(`/posts/${id}`);
  };

  if (!posts || posts.length === 0) return null;

  return (
    <Section>
      <Title>{texts.post.latestArticle}</Title>
      <PostList posts={posts.slice(0, 4)} onClickPost={handleClick} />
    </Section>
  );
};

export default LatestArticlesSection;
