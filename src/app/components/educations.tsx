import { observer } from "mobx-react";
import { H1 } from "./common/micro";
import useStore from "@/store";

const Educations = observer(() => {
  const { educations } = useStore().globalStore;

  return (
    <div>
      <H1 text="EDUCATIONS" />
      {educations?.map((p: any) => {
        return (
          <div
            className="relative mb-12 grid grid-cols-4 gap-4 pb-1"
            key={p.at}
          >
            <div className="absolute -inset-x-4 -inset-y-4 z-0 cursor-default border border-transparent rounded hover:border-gray-300" />
            <p className="col-span-1">
              {p?.start_from} ~ {p?.end_to}
            </p>
            <div className="col-span-3">
              <h1 className="font-bold">{p?.at}</h1>
              <span>{p.title}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
});

export default Educations;
