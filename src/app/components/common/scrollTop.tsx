import theme from "@/styles/theme";
import { faCircleChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";

const ScrollTopButton = () => {
  const scrollToTop = () => window.scroll({ top: 0, behavior: "smooth" });

  return (
    <Button onClick={scrollToTop}>
      <FontAwesomeIcon icon={faCircleChevronUp} color={theme.colors.lake} />
    </Button>
  );
};

export default ScrollTopButton;

const Button = styled.button`
  position: fixed;
  right: 0;
  bottom: 0;
  margin: 30px;
  width: 30px;
  height: 30px;
  background-color: ${() => theme.colors.background};
  border: none;
  border-radius: 50%;
  z-index: 2;
  cursor: pointer;
`;
