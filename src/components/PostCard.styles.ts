import styled from "styled-components";

export const CardStyled = styled.article`
  background: ${({ theme }) => theme.colors.neutrals.lightest};
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  overflow: hidden;
  width: 100%;
`;

export const ThumbnailStyled = styled.img`
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  height: 196px;
  object-fit: cover;
  width: 100%;
`;

export const ContentStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
`;

export const MetaStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.neutrals.extraDark};
`;

export const DotStyled = styled.span`
  background: ${({ theme }) => theme.colors.secondary.medium};
  border-radius: 50%;
  height: 4px;
  width: 4px;
`;

export const TitleStyled = styled.h3`
  color: ${({ theme }) => theme.colors.primary.light};
  font-size: ${({ theme }) => theme.typography.sizes.h3};
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  margin: 0;
`;

export const ExcerptStyled = styled.p`
  color: ${({ theme }) => theme.colors.neutrals.extraDark};
  font-size: ${({ theme }) => theme.typography.sizes.bodySmall};
  line-height: 150%;
  margin: 0;
`;

export const CategoriesStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

export const CategoryStyled = styled.span`
  background-color: ${({ theme }) => theme.colors.neutrals.extraLight};
  border-radius: 42px;
  color: ${({ theme }) => theme.colors.neutrals.extraDark};
  font-size: ${({ theme }) => theme.typography.sizes.caption};
  padding: 8px 12px;
`;
