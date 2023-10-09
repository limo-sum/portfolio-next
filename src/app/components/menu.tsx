"use client";
import React, { useEffect, useRef } from "react";

interface MenuProps {
  targetId: string;
  children: React.ReactNode;
}

const Menu: React.FC<MenuProps> = ({ targetId, children }) => {
  const targetRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetRef.current = targetElement;
    }
  }, [targetId]);

  const handleClick = () => {
    if (targetRef.current) {
      const targetElement = targetRef.current;
      const yOffset = -52;
      const yCoordinate =
        targetElement.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset;

      window.scrollTo({ top: yCoordinate, behavior: "smooth" });
    }
  };

  return (
    <div onClick={handleClick} style={{ cursor: "pointer" }}>
      {children}
    </div>
  );
};

export default Menu;
