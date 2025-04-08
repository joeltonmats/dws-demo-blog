import styled from "styled-components";

export const Wrapper = styled.aside`
  background: ${({ theme }) => theme.colors.neutrals.lightest};
  border-radius: 16px;
  box-shadow: 0 0 16px rgba(0, 0, 0, 0.03);
  display: flex;
  flex-direction: column;
  padding: 24px;
  width: 240px;
`;

export const Header = styled.div`
  align-items: center;
  display: flex;
  font-size: ${({ theme }) => theme.typography.sizes.bodyLarge};
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  gap: 8px;
  margin-bottom: 12px;
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
`;

export const Title = styled.h4`
  color: ${({ theme }) => theme.colors.neutrals.darkest};
  font-size: ${({ theme }) => theme.typography.sizes.bodyLarge};
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  margin-bottom: 12px;
`;

export const Divider = styled.div`
  background-color: ${({ theme }) => theme.colors.neutrals.extraLight};
  height: 1px;
  margin: 8px 0;
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
