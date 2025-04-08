import styled from "styled-components";

export const Container = styled.article`
  margin: 0 auto 64px;
  max-width: 800px;
`;

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.typography.sizes.h1};
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  color: ${({ theme }) => theme.colors.neutrals.darkest};
  margin-bottom: 24px;
`;

export const Meta = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: ${({ theme }) => theme.typography.sizes.caption};
  color: ${({ theme }) => theme.colors.neutrals.extraDark};
  margin-bottom: 24px;
`;

export const Avatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
`;

export const CoverImage = styled.img`
  width: 100%;
  border-radius: 16px;
  margin-bottom: 32px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  font-size: ${({ theme }) => theme.typography.sizes.bodyLarge};
  color: ${({ theme }) => theme.colors.neutrals.extraDark};
`;
