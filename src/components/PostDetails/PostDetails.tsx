import React from "react";

import { Post } from "../../types";
import { formatDate } from "../../utils/formatDate";
import {
  Avatar,
  Container,
  Content,
  CoverImage,
  Meta,
  Title,
} from "./PostDetails.styles";
import texts from "../../constants/constants";

interface PostDetailsProps {
  post: Post;
  highlight?: string;
}

const PostDetails: React.FC<PostDetailsProps> = ({ post, highlight }) => {
  const getHighlightedText = (text: string, highlight?: string) => {
    if (!highlight) return text;

    const parts = text.split(new RegExp(`(${highlight})`, "gi"));
    return parts.map((part, i) =>
      part.toLowerCase() === highlight.toLowerCase() ? (
        <mark key={i}>{part}</mark>
      ) : (
        part
      )
    );
  };

  return (
    <Container>
      <Title>{post.title}</Title>

      <Meta>
        <Avatar src={post.author.profilePicture} alt={post.author.name} />
        <span>
          {texts.post.by} <strong>{post.author.name}</strong>
        </span>
        <span>{formatDate(post.createdAt)}</span>
      </Meta>

      <CoverImage src={post.thumbnailUrl} alt={post.title} />

      <Content>
        {post.content
          .split("\n")
          .map(
            (para, index) =>
              para && <p key={index}>{getHighlightedText(para, highlight)}</p>
          )}
      </Content>
    </Container>
  );
};

export default PostDetails;
