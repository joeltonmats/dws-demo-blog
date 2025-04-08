import React, { useEffect, useState } from "react";
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

const PostDetailsPage: React.FC = () => {
  const { id } = useParams();
  const [post, setPost] = useState<Post | null>(null);
  const [latestPosts, setLatestPosts] = useState<Post[]>([]);

  useEffect(() => {
    if (!id) return;
    getPostById(id).then(setPost);
    getPosts().then((posts: Post[]) => setLatestPosts(posts.slice(0, 4)));
  }, [id]);

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
            <PostDetails post={post} />
            <LatestArticlesSection posts={latestPosts} />
          </MainColumn>
        </ContentContainer>
      </Wrapper>
    </>
  );
};

export default PostDetailsPage;
