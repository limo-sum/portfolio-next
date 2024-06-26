"use client";

import { useEffect, useState } from "react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithubAlt } from "@fortawesome/free-brands-svg-icons";
import { observer } from "mobx-react";
import useStore from "../store/index";

const NavBar = observer(() => {
  const { globalStore } = useStore();
  const { menus, currentMenu, setCurrentMenu } = globalStore;
  const [copied, setCopied] = useState<boolean>(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 1000);
  };

  const handleClick = (title: string) => {
    setCurrentMenu(title);
  };

  useEffect(() => {
    const targetElement = document.getElementById(currentMenu);

    if (targetElement) {
      const intro = currentMenu === "INTRO";
      const yOffset = intro ? -120 : -12;
      const yCoordinate =
        targetElement.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset;

      window.scrollTo({ top: yCoordinate, behavior: "smooth" });
    }
  }, [currentMenu]);

  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <div>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          <a href={"/portfolio-next"}>LEE JIYUN</a>
        </h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight sm:text-xl">
          WEB DEVELOPER
        </h2>
      </div>
      <nav className="lg:block">
        <ul className="mt-16 w-full">
          {menus.map((menu: Menu) => {
            return (
              <li
                key={menu.title}
                className="mb-4 flex items-center gap-3"
                onClick={() => handleClick(menu.title)}
              >
                <span>{menu.title}</span>
                <p
                  className={`${
                    currentMenu === menu.title && "bg-black"
                  } w-full h-px`}
                />
              </li>
            );
          })}
        </ul>
      </nav>
      <ul className="ml-1 mt-8 flex items-center gap-4">
        <li
          onClick={() => {
            navigator.clipboard
              .writeText("limosum.dev@gmail.com")
              .then(() => handleCopy());
          }}
        >
          <FontAwesomeIcon icon={copied ? faCheck : (faEnvelope as IconProp)} />
        </li>
        <li
          onClick={() => {
            window.open("https://github.com/limo-sum");
          }}
        >
          <FontAwesomeIcon icon={faGithubAlt as IconProp} />
        </li>
      </ul>
    </header>
  );
});
export default NavBar;
