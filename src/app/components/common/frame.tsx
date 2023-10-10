import { FC } from "react";
import * as Styled from "../common/styled";

interface Props {
  title: string;
  content: any;
}

const Frame: FC<Props> = ({ title, content }) => {
  return (
    <Styled.FrameComp title={title} id={title}>
      <Styled.FrameH1>{title}</Styled.FrameH1>
      {content}
    </Styled.FrameComp>
  );
};
export default Frame;
