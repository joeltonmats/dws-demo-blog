import React from "react";
import styled from "styled-components";

import noPotsFound from "../..//assets/no-results.png";
import texts from "../../constants/constants";

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 48px;
`;

const Image = styled.img`
  height: auto;
`;

const Message = styled.p`
  color: ${({ theme }) => theme.colors.neutrals.extraDark};
  font-weight: ${({ theme }) => theme.typography.weights.semiBold};
  font-size: ${({ theme }) => theme.typography.sizes.bodyLarge};
`;

const NoPostsFound: React.FC = () => (
  <Wrapper>
    <Image src={noPotsFound} alt={texts.post.notFound} />
    <Message>{texts.post.notFound}</Message>
  </Wrapper>
);

export default NoPostsFound;
