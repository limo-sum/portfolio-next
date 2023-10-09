import theme from "@/styles/theme";
import { styled } from "styled-components";

export const ContentFrame = styled.section`
  img {
    border-radius: 30px;
  }
`;
export const FlexFrame = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  @media screen and (max-width: 768px) {
    display: block;
    p:last-child {
      margin-top: 20px;
    }
  }
`;
export const ElementFrame = styled.div`
  margin-bottom: 30px;
`;
export const Period = styled.p`
  color: gray;
`;
export const TitleH1 = styled.h1`
  font-size: 32px;
  font-weight: bolder;
  line-height: 1;
  margin-bottom: 10px;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
`;

export const ContentWithIcon = styled.p``;
export const ContentSpan = styled.span`
  margin-left: 10px;
`;

export const Tags = styled.p`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  margin-bottom: 10px;

  li {
    list-style: none;
    color: ${() => theme.colors.lake};
    border: 1px solid ${() => theme.colors.lake};
    padding: 0px 8px;
    font-size: 14px;
  }
`;
export const SkeletonFrame = styled.section``;
