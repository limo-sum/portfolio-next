import { FC } from "react";
import { styled } from "styled-components";

interface Props {
  title: string;
  content: any;
}

const Frame: FC<Props> = ({ title, content }) => {
  return (
    <FrameComp title={title} id={title}>
      <FrameH1>{title}</FrameH1>
      {content}
    </FrameComp>
  );
};
export default Frame;

const FrameComp = styled.div`
  padding: 30px;

  @media screen and (max-width: 768px) {
    width: 100vw;
  }
`;
const FrameH1 = styled.h1`
  display: block;
  margin-bottom: 30px;
  width: max-content;
  font-size: 48px;
  font-weight: bolder;
  line-height: 48px;

  @media screen and (max-width: 768px) {
    font-size: 36px;
    line-height: 36px;
  }
`;
