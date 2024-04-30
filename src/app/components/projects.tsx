import { styled } from "styled-components";
import { observer } from "mobx-react";
import { H1, Tags } from "./common/micro";
import useStore from "@/store";

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
              <h1 className="font-bold">{p?.title}</h1>
              <span>{p?.introduction}</span>
              <Tags texts={p?.skills} />
              {p?.contents?.map(
                (c: { position: string; outputs: string[] }) => {
                  return (
                    <ProjectContent key={c.position}>
                      {c.outputs.map((o: string) => {
                        return <p key={o}>{o}</p>;
                      })}
                    </ProjectContent>
                  );
                }
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
});

export default Projects;

const ProjectContent = styled.div``;
