import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import theme from "@/styles/theme";
import { periodGenerator } from "./common/generator";
import { observer } from "mobx-react";
import { H1 } from "./common/micro";
import useStore from "@/store";

const Works = observer(() => {
  const { works } = useStore().globalStore;

  return (
    <div>
      <H1 text="WORKS" />
      {works?.map((p: any) => {
        return (
          <div
            className="relative mb-12 grid grid-cols-4 gap-4 pb-1"
            key={p.at}
          >
            <div className="absolute -inset-x-4 -inset-y-4 z-0 cursor-default border border-transparent rounded hover:border-gray-300" />
            <p className="col-span-1">
              {periodGenerator(p?.start_from, p?.end_to)}
            </p>
            <div className="col-span-3">
              <div className="flex text-center">
                <h1 className="font-bold">{p?.at}</h1> : {p?.position}
              </div>
              {p?.descriptions?.map((d: string) => {
                return (
                  <p key={d}>
                    <span>{d}</span>
                  </p>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
});

export default Works;
