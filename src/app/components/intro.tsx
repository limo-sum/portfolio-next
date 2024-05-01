import { observer } from "mobx-react";
import { Tags } from "./common/micro";
import useStore from "@/store";

const Intro = observer(() => {
  const { intro } = useStore().globalStore;

  return (
    <div className="mb-4" id="INTRO">
      <ul>
        {intro?.introduction?.map((i: string) => {
          return (
            <li key={i} className="mb-1 h-auto">
              {i}
            </li>
          );
        })}
      </ul>
      <br />
      <Tags texts={intro?.skills} />
    </div>
  );
});

export default Intro;
