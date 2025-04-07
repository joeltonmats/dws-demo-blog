import {
  CardStyled,
  CategoriesStyled,
  CategoryStyled,
  ContentStyled,
  DotStyled,
  ExcerptStyled,
  MetaStyled,
  ThumbnailStyled,
  TitleStyled,
} from "./PostCard.styles";
import { Post } from "../types";
import { formatDate } from "../utils/formatDate";

interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }: PostCardProps) {
  const formattedDate = formatDate(post.createdAt);
  return (
    <CardStyled>
      <ThumbnailStyled src={post.thumbnailUrl} alt={post.title} />
      <ContentStyled>
        <MetaStyled>
          <span>{formattedDate}</span>
          <DotStyled />
          <span>{post.author.name}</span>
        </MetaStyled>
        <TitleStyled>{post.title}</TitleStyled>
        <ExcerptStyled>{post.content.slice(0, 120)}...</ExcerptStyled>
        <CategoriesStyled>
          {post.categories.map((cat) => (
            <CategoryStyled key={cat.id}>{cat.name}</CategoryStyled>
          ))}
        </CategoriesStyled>
      </ContentStyled>
    </CardStyled>
  );
}
