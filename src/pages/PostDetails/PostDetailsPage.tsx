import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Post } from "../../types";
import { getPostById, getPosts } from "../../api/api";
import Header from "../../components/Header/Header";
import PostDetails from "../../components/PostDetails/PostDetails";
import LatestArticlesSection from "../../components/LatestArticleSection/LatestArticleSection";
import BackButton from "../../components/BackButton/BackButton";
import {
  ContentContainer,
  MainColumn,
  SideColumn,
  Wrapper,
} from "./PostDetailsPage.styles";
import { useHeaderContext } from "../../context/header/headerContext";

const PostDetailsPage: React.FC = () => {
  const { id } = useParams();
  const [post, setPost] = useState<Post | null>(null);
  const [latestPosts, setLatestPosts] = useState<Post[]>([]);
  const { setContext, setOnSearch } = useHeaderContext();
  const [highlight, setHighlight] = useState("");

  useEffect(() => {
    if (!id) return;
    getPostById(id).then(setPost);
    getPosts().then((posts: Post[]) => setLatestPosts(posts.slice(0, 4)));
  }, [id]);

  const handleSearch = useCallback((value: string) => {
    setHighlight(value);
  }, []);

  useEffect(() => {
    setContext("post");
    setOnSearch(() => handleSearch);

    return () => setOnSearch(undefined);
  }, [setContext, setOnSearch, handleSearch]);

  if (!post) return null;

  return (
    <>
      <Header />
      <Wrapper>
        <ContentContainer>
          <SideColumn>
            <BackButton />
          </SideColumn>
          <MainColumn>
            <PostDetails post={post} highlight={highlight} />
            <LatestArticlesSection posts={latestPosts} />
          </MainColumn>
        </ContentContainer>
      </Wrapper>
    </>
  );
};

export default PostDetailsPage;
