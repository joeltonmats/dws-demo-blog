import styled from "styled-components";

export const Container = styled.article`
  margin: 24px auto 32px;
  max-width: 800px;

  p {
    margin: 0;
  }

  @media (min-width: 1024px) {
    margin-top: 0;
  }
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.neutrals.darkest};
  font-size: ${({ theme }) => theme.typography.sizes.h1};
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  margin-bottom: 24px;
  margin-top: 0;
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

  mark {
    background: ${({ theme }) => theme.colors.accent.light};
    color: ${({ theme }) => theme.colors.neutrals.darkest};
    font-weight: bold;
    padding: 0 2px;
    border-radius: 4px;
  }
`;
