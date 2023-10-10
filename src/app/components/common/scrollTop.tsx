import theme from "@/styles/theme";
import { faCircleChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { throttle } from "lodash";
import React, { useCallback, useEffect, useMemo } from "react";
import styled from "styled-components";

const ScrollTopButton = () => {
  const scrollToTop = () => window.scroll({ top: 0, behavior: "smooth" });

  const cb = useCallback(() => {
    console.log("cb", window.scrollY);
  }, []);
  const throttledScroll = useMemo(() => throttle(cb, 300), []);

  useEffect(() => {
    window.addEventListener("scroll", throttledScroll);
    return () => window.removeEventListener("scroll", throttledScroll);
  }, [throttledScroll]);

  return (
    <ButtonFrame>
      <Button onClick={scrollToTop}>
        <FontAwesomeIcon
          icon={faCircleChevronUp}
          color={theme.colors.background}
        />
      </Button>
    </ButtonFrame>
  );
};

export default ScrollTopButton;

const ButtonFrame = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100vw;
`;
const Button = styled.button`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  margin: 30px auto;
  width: 30px;
  height: 30px;
  background-color: ${() => theme.colors.white};
  border: ${() => theme.colors.background} 1px solid;
  border-radius: 50%;
  z-index: 2;
  cursor: pointer;
`;
