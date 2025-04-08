import styled from "styled-components";

export const Wrapper = styled.aside`
  background: white;
  border-radius: 16px;
  box-shadow: 0 0 16px rgba(0, 0, 0, 0.03);
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 24px;
  width: 240px;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const Title = styled.h4`
  font-size: ${({ theme }) => theme.typography.sizes.bodyLarge};
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  margin-bottom: 8px;
`;

export const ButtonStyled = styled.button`
  background-color: ${({ theme }) => theme.colors.secondary.medium};
  border-radius: 42px;
  border: none;
  color: ${({ theme }) => theme.colors.neutrals.lightest};
  cursor: pointer;
  font-size: ${({ theme }) => theme.typography.sizes.bodyLarge};
  font-weight: ${({ theme }) => theme.typography.weights.semiBold};
  margin-top: auto;
  padding: 12px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary.dark};
  }
`;
