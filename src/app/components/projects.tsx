import { observer } from "mobx-react";
import { H1, Tags } from "./common/micro";
import useStore from "@/store";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolderOpen } from "@fortawesome/free-regular-svg-icons";

const Projects = observer(() => {
  const { projects } = useStore().globalStore;

  return (
    <div>
      <H1 text="PROJECTS" />
      {projects?.map((p: any) => {
        return (
          <div
            className="relative mb-12 grid grid-cols-4 gap-4 pb-1"
            key={p.title}
          >
            <div className="absolute -inset-x-4 -inset-y-4 z-0 cursor-default border border-transparent rounded hover:border-gray-300" />
            <p className="col-span-1">
              {p?.start_from} ~ {p?.end_to}
            </p>
            <div className="col-span-3">
              <h1 className="font-bold text-xl">{p?.title}</h1>
              <span>{p?.introduction}</span>
              <Tags texts={p?.skills} />

              <ul className="flex flex-col gap-2">
                {p?.contents?.map(
                  (c: { position: string; outputs: string[] }) => {
                    return (
                      <li key={c.position}>
                        <p className="border-b border-dashed py-1 mb-1">
                          <FontAwesomeIcon icon={faFolderOpen} color="gray" />
                          <span className="ml-1 text-gray-500">
                            {c.position}
                          </span>
                        </p>
                        <ul className="pl-2">
                          {c.outputs.map((o: string) => {
                            return <li key={o}>{o}</li>;
                          })}
                        </ul>
                      </li>
                    );
                  }
                )}
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );
});

export default Projects;
