import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import texts from "../../constants/constants";

const Button = styled.button`
  align-items: center;
  background: transparent;
  border-radius: 42px;
  border: 1px solid ${({ theme }) => theme.colors.secondary.medium};
  color: ${({ theme }) => theme.colors.secondary.medium};
  cursor: pointer;
  display: flex;
  font-size: ${({ theme }) => theme.typography.sizes.bodyLarge};
  font-weight: ${({ theme }) => theme.typography.weights.semiBold};
  gap: 8px;
  padding: 12px 16px;

  &:hover {
    border-color: ${({ theme }) => theme.colors.secondary.dark};
    color: ${({ theme }) => theme.colors.secondary.dark};
  }
`;

const BackButton: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Button onClick={() => navigate("/")}>
      <ArrowLeft size={20} /> {texts.buttons.back}
    </Button>
  );
};

export default BackButton;
