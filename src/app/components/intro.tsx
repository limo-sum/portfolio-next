import { getIntro } from "@/fetch";
import { useEffect, useState } from "react";
import { observer } from "mobx-react";
import { Tags } from "./common/micro";

interface IntroType {
  email: string;
  github: string;
  introduction: string[];
  name: string;
  skills: string[];
}

const Intro = observer(() => {
  const [intro, setIntro] = useState<IntroType | null>(null);

  useEffect(() => {
    onload();
  }, []);

  const onload = async () => {
    const i = await getIntro();
    setIntro(i);
  };

  return (
    <div className="mb-4" id="INTRO">
      <li>{intro?.introduction}</li>
      <br />
      <Tags texts={intro?.skills} />
    </div>
  );
});

export default Intro;
