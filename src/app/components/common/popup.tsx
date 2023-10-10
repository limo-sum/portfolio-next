import theme from "@/styles/theme";
import { IconDefinition, faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC } from "react";
import * as Styled from "./styled";
import { styled } from "styled-components";
import isPropValid from "@emotion/is-prop-valid";

type Props = {
  msgType: string;
  message: string;
  visible: boolean;
};
const Popup: FC<Props> = ({ msgType, message, visible }) => {
  let icon;
  switch (msgType) {
    case "success":
      icon = faCheck;
      break;

    default:
      icon = faCheck;
      break;
  }
  const props = { visible };
  return (
    <ViewFrame {...props}>
      <ModalFrame>
        <Styled.ContentWithIcon>
          <FontAwesomeIcon
            icon={icon as IconDefinition}
            color={theme.colors.background}
          />
          <Styled.ContentSpan>{message}</Styled.ContentSpan>
        </Styled.ContentWithIcon>
      </ModalFrame>
    </ViewFrame>
  );
};

export default Popup;

const ViewFrame = styled.div.withConfig({
  shouldForwardProp: (prop) => isPropValid(prop),
})`
  @keyframes fadein {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  position: fixed;
  z-index: 2;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  display: ${(prop: any) => (prop?.visible ? "block" : "none")};
  animation: fadein 1.5s;
  -moz-animation: fadein 1.5s;
  -webkit-animation: fadein 1.5s;
  -o-animation: fadein 1.5s;
`;

const ModalFrame = styled.div`
  margin: 15% auto;
  padding: 20px;
  background-color: #ffffff;
  border: 1px solid ${() => theme.colors.background};
  border-radius: 20px;
  width: max-content;
  box-shadow: 7px 7px 2px 1px ${() => theme.colors.background};
`;
