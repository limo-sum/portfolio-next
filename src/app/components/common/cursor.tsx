import { FC, Fragment, useCallback, useEffect, useRef, useState } from "react";

interface AnimatedCursorProps {
  color?: string;
  outerAlpha?: number;
  innerSize?: number;
  outerSize?: number;
  outerScale?: number;
  innerScale?: number;
}

export const AnimatedCursor: FC<AnimatedCursorProps> = ({
  color = "0, 0, 0",
  outerAlpha = 0.4,
  innerSize = 2,
  outerSize = 2,
  outerScale = 5,
  innerScale = 0.7,
}) => {
  const cursorOuterRef = useRef<HTMLDivElement>(null);
  const cursorInnerRef = useRef<HTMLDivElement>(null);
  const requestRef = useRef<number | null>(null);
  const previousTimeRef = useRef<number | null>(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(true);
  const [isActive, setIsActive] = useState(false);
  const [isActiveClickable, setIsActiveClickable] = useState(false);
  const endX = useRef(0);
  const endY = useRef(0);

  const onMouseMove = useCallback(({ clientX, clientY }: MouseEvent) => {
    setCoords({ x: clientX, y: clientY });
    cursorInnerRef.current!.style.top = clientY + "px";
    cursorInnerRef.current!.style.left = clientX + "px";
    endX.current = clientX;
    endY.current = clientY;
  }, []);

  const animateOuterCursor = useCallback(
    (time: number) => {
      if (previousTimeRef.current !== null && cursorOuterRef.current) {
        coords.x += (endX.current - coords.x) / 8;
        coords.y += (endY.current - coords.y) / 8;
        cursorOuterRef.current.style.top = coords.y + "px";
        cursorOuterRef.current.style.left = coords.x + "px";
      }
      previousTimeRef.current = time;
      requestRef.current = requestAnimationFrame(animateOuterCursor);
    },
    [] // eslint-disable-line
  );

  useEffect(() => {
    if (requestRef.current === null) {
      requestRef.current = requestAnimationFrame(animateOuterCursor);
    }
    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
        requestRef.current = null;
      }
    };
  }, [animateOuterCursor]);

  const onMouseDown = useCallback(() => setIsActive(true), []);
  const onMouseUp = useCallback(() => setIsActive(false), []);
  const onMouseEnter = useCallback(() => setIsVisible(true), []);
  const onMouseLeave = useCallback(() => setIsVisible(false), []);

  useEffect(() => {
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mouseenter", onMouseEnter);
    document.addEventListener("mouseleave", onMouseLeave);
    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mouseenter", onMouseEnter);
      document.removeEventListener("mouseleave", onMouseLeave);
    };
  }, [onMouseMove, onMouseDown, onMouseUp, onMouseEnter, onMouseLeave]);

  useEffect(() => {
    if (isActive && cursorInnerRef.current && cursorOuterRef.current) {
      cursorInnerRef.current.style.transform = `scale(${innerScale})`;
      cursorOuterRef.current.style.transform = `scale(${outerScale})`;
    } else {
      cursorInnerRef.current &&
        (cursorInnerRef.current.style.transform = "scale(1)");
      cursorOuterRef.current &&
        (cursorOuterRef.current.style.transform = "scale(1)");
    }
  }, [innerScale, outerScale, isActive]);

  useEffect(() => {
    if (isActiveClickable && cursorInnerRef.current && cursorOuterRef.current) {
      cursorInnerRef.current.style.transform = `scale(${innerScale * 1.3})`;
      cursorOuterRef.current.style.transform = `scale(${outerScale * 1.4})`;
    }
  }, [innerScale, outerScale, isActiveClickable]);

  useEffect(() => {
    if (isVisible && cursorInnerRef.current && cursorOuterRef.current) {
      cursorInnerRef.current.style.opacity = "1";
      cursorOuterRef.current.style.opacity = "1";
    } else {
      cursorInnerRef.current && (cursorInnerRef.current.style.opacity = "0");
      cursorOuterRef.current && (cursorOuterRef.current.style.opacity = "0");
    }
  }, [isVisible]);

  useEffect(() => {
    const clickables = document.querySelectorAll(
      'a, input[type="submit"], input[type="image"], label[for], select, button, .link'
    );
    clickables.forEach((el) => {
      if (el instanceof HTMLElement) {
        el.style.cursor = "none";

        el.addEventListener("mouseover", () => {
          setIsActive(true);
        });
        el.addEventListener("click", () => {
          setIsActive(true);
          setIsActiveClickable(false);
        });
        el.addEventListener("mousedown", () => {
          setIsActiveClickable(true);
        });
        el.addEventListener("mouseup", () => {
          setIsActive(true);
        });
        el.addEventListener("mouseout", () => {
          setIsActive(false);
          setIsActiveClickable(false);
        });
      }
    });

    return () => {
      clickables.forEach((el) => {
        if (el instanceof HTMLElement) {
          el.removeEventListener("mouseover", () => {
            setIsActive(true);
          });
          el.removeEventListener("click", () => {
            setIsActive(true);
            setIsActiveClickable(false);
          });
          el.removeEventListener("mousedown", () => {
            setIsActiveClickable(true);
          });
          el.removeEventListener("mouseup", () => {
            setIsActive(true);
          });
          el.removeEventListener("mouseout", () => {
            setIsActive(false);
            setIsActiveClickable(false);
          });
        }
      });
    };
  }, [isActive]);

  return (
    <Fragment>
      <div
        ref={cursorOuterRef}
        className={`z-9 fixed w-${outerSize} h-${outerSize} 
        pointer-events-none bg-black bg-opacity-10 rounded-full 
        transition-opacity ease-in-out duration-150`}
      />
      <div
        ref={cursorInnerRef}
        className={`z-9 fixed w-${innerSize} h-${innerSize} 
        pointer-events-none bg-black rounded-full 
        transition-opacity ease-in-out duration-150`}
      />
    </Fragment>
  );
};
